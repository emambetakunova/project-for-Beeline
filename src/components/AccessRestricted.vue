<template>
  <p class="confirmation__description">{{ $t("access_restricted") }}</p>
</template>
<script>
  export default {
    name: 'confirmRestricted',
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
