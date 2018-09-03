<template>
  <p class="confirmation__description">{{ $t("thanks_for_rate") }}</p>
</template>
<script>
  export default {
    name: 'confirmRated',
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
