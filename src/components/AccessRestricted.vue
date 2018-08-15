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
<style src="../assets/css/main.css"></style>
