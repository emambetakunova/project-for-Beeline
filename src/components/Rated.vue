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
<style src="../assets/css/main.css"></style>
