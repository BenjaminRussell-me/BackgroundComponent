<template>
  <div class="backgroundBase">
    <div
      class="rectangles"
      v-for="(rec, index) in recArr"
      :key="index"
      :style="{
        height: rec.size.height + 'px',
        width: rec.size.width + 'px',
        top: rec.position.top + '%',
        left: rec.position.left + '%',
        background: rec.color
      }"
      :class="{ animated: getAnimated(rec.size.width) && rec.size.height > 0 }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "DefaultBackground",
  data() {
    return {
      recArr: []
    };
  },
  props: {
    amount: {
      type: Number,
      default: 200
    },
    colorControl:{
      type: Object,
      default() {
        return { color: 190, shift: 5 };
      }
    },
    saturation: {
      type: Number,
      default: 100
    },
    lightness: {
      type: Number,
      default: 70
    }
  },
  methods: {
    getAnimated(size) {
      return size < 80;
    },
    setRectangles() {
      class Rectangle {
        constructor(width, height, left, top, alpha, color, lightness, saturation) {
          this.size = { width: width, height: height };
          this.color = `hsla(${color},${saturation}%,${lightness}%,0.${alpha})`;
          this.position = { left: left, top: top };
        }
      }
      for (let i = 0; i < this.amount; i++) {
        let width = this.getRandomInt(10, 550);
        let height = width - this.getRandomInt(width / 2.5, 25);
        let left = this.getRandomInt(0, 100);
        let top = this.getRandomInt(0, 100);
        let alpha = this.getRandomInt(0, 4);
        let color =
          (left + top) / this.colorControl.shift + this.colorControl.color;
        let lightness = this.lightness;
        let saturation = this.saturation;
        this.recArr.push(
          new Rectangle(
            width,
            height,
            left,
            top,
            alpha,
            color,
            lightness,
            saturation
          )
        );
      }
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
  },
  mounted() {
    this.setRectangles();
  }
};
</script>

<style scoped lang="scss">
.backgroundBase {
  height: 100%;
  width: 100%;
  display: grid;
  position: static;
  overflow: hidden;
}
.rectangles{
  position: relative;
  grid-area: 1/1/1/1;
  backdrop-filter: hue-rotate(3deg);
}
.animated {
  animation: inout 2s infinite alternate;
}
@keyframes inout {
  from{transform: scale(1)}
  to{transform: scale(1.3)}
}
</style>
