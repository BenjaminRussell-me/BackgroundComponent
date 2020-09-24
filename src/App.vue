<template>
  <div id="holder">
    <background-base></background-base>
  </div>

</template>

<script>
import BackgroundBase from "@/components/BackgroundBase";
export default {
  name: "App",
  components: {BackgroundBase}
};
</script>

<style lang="scss">
body{
  margin: 0;
}
#holder{
  height: 100vh;
  width: 100vw;
}
</style>
