<template>
  <div id="backgroundBase">
    <component
      v-bind:is="background"
      :ammount="amount"
      :lightness="lightness"
      :colorControl="colorControl"
      :saturation="saturation"
    >
    </component>
  </div>
</template>

<script>
import DefaultBackground from "../backgrounds/default/DefaultBackground";
import SkyScrapers from "../backgrounds/sky_scrapers/SkyScrapers";
import Blocks from "../backgrounds/blocks/Blocks";
export default {
  name: "BackgroundBase",
  data() {
    return {
      boundBackground: SkyScrapers
    };
  },
  components: {
    DefaultBackground,
    SkyScrapers,
    Blocks
  },
  props: {
    background: {
      type: String,
      default: "DefaultBackground"
    },
    amount: {
      type: Number,
      default: 200
    },
    colorControl: {
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
  }
};
</script>

<style scoped lang="scss">
#backgroundBase {
  height: 100%;
  width: 100%;
}
</style>
