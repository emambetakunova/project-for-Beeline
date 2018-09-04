<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'app',
    mounted: function () {
      this.$router.push("/");
    },

    data: function () {
      return {}
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
