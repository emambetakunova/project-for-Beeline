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
<style src="../assets/css/main.css"></style>
