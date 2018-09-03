<template>
  <p class="confirmation__description">{{ $t("access_granted") }}</p>
</template>
<script>
  export default {
    name: 'confirmGranted',
    data: function () {
      return {
        count: 0
      }
    },
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
