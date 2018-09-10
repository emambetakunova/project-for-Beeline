<template>
  <button class="btn_back" v-on:click="backButton()">{{ $t("back") }}</button>
</template>
<script>
  export default {
    name: 'button-back',
    data: function () {
      return {
      }
    },
    methods: {
      backButton() {
        this.$router.push("/");
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
