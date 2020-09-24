<template>
  <div id="backgroundBase">
    <component v-bind:is="boundBackground"> </component>
  </div>
</template>

<script>
import DefaultBackground from "@/components/backgrounds/DefaultBackground";
export default {
  name: "BackgroundBase",
  data() {
    return {
      boundBackground: DefaultBackground
    };
  },
  components: {
    DefaultBackground
  }
};
</script>

<style scoped lang="scss">
#backgroundBase{
  height: 100%;
  width: 100%;
  background: red;
}
</style>
