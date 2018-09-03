<template>
  <button class="btn_back btn_agree_back" v-on:click="backButton()">{{ $t("back") }}</button>
</template>
<script>
  export default {
    name: 'btn_back-btn_agree_back',
    data: function () {
      return {
      }
    },
    methods: {
      backButton() {
        window.history.back();
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
