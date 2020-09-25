<template>
  <div id="defaultBase">
    <div class="sceen" v-for="(block, index) in blockArr" :key="index">
      <div class="block">
        <div class="block__face block__face--front">front</div>
        <div class="block__face block__face--back">back</div>
        <div class="block__face block__face--right">right</div>
        <div class="block__face block__face--left">left</div>
        <div class="block__face block__face--top">top</div>
        <div class="block__face block__face--bottom">bottom</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultBackground",
  data() {
    return {
      dimensions: " height: 60px; width: 60px; background: red",
      blockArr: [1, 2]
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
#defaultBase {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
}
.sceen {
  width: 200px;
  height: 200px;
  perspective: 800px;
  place-self: center;
  .block {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-30px) rotate3d(0, 1, 0, -10deg);
    transition: transform 1s;
  }

  .block.show-front {
    transform: translateZ(-50px) rotateY(0deg);
  }
  .block.show-back {
    transform: translateZ(-50px) rotateY(-180deg);
  }
  .block.show-right {
    transform: translateZ(-150px) rotateY(-90deg);
  }
  .block.show-left {
    transform: translateZ(-150px) rotateY(90deg);
  }
  .block.show-top {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  .block.show-bottom {
    transform: translateZ(-100px) rotateX(90deg);
  }

  .block__face {
    position: absolute;
    border: 2px solid black;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
  }

  .block__face--front,
  .block__face--back {
    width: 200px;
    height: 200px;
    line-height: 200px;
  }

  .block__face--right,
  .block__face--left {
    width: 100px;
    height: 200px;
    left: 50px;
    line-height: 200px;
  }

  .block__face--top,
  .block__face--bottom {
    width: 200px;
    height: 100px;
    top: 50px;
    line-height: 100px;
  }

  .block__face--front {
    background: hsla(0, 100%, 50%, 0.7);
  }
  .block__face--right {
    background: hsla(60, 100%, 50%, 0.7);
  }
  .block__face--back {
    background: hsla(120, 100%, 50%, 0.7);
  }
  .block__face--left {
    background: hsla(180, 100%, 50%, 0.7);
  }
  .block__face--top {
    background: hsla(240, 100%, 50%, 0.7);
  }
  .block__face--bottom {
    background: hsla(300, 100%, 50%, 0.7);
  }

  .block__face--front {
    transform: rotateY(0deg) translateZ(50px);
  }
  .block__face--back {
    transform: rotateY(180deg) translateZ(50px);
  }

  .block__face--right {
    transform: rotateY(90deg) translateZ(100px);
  }
  .block__face--left {
    transform: rotateY(-90deg) translateZ(100px);
  }

  .block__face--top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .block__face--bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }

  label {
    margin-right: 10px;
  }
}
</style>
