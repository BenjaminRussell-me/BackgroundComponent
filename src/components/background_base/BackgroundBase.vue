<template>
  <div id="backgroundBase">
    <component v-bind:is="background"> </component>
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
