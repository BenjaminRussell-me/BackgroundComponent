<template>
  <div id="backgroundBase">
    <component v-bind:is="boundBackground"> </component>
  </div>
</template>

<script>
import DefaultBackground from "../backgrounds/DefaultBackground";
import SkyScrapers from "../backgrounds/SkyScrapers";
export default {
  name: "BackgroundBase",
  data() {
    return {
      boundBackground: SkyScrapers
    };
  },
  components: {
    DefaultBackground,
    SkyScrapers
  }
};
</script>

<style scoped lang="scss">
#backgroundBase {
  height: 100%;
  width: 100%;
}
</style>
