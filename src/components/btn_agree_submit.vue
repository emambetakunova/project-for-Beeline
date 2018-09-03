<template>
  <button class="rating_btn btn_agree" v-on:click="acceptButton()" type="submit">{{ $t("agree") }}</button>
</template>
<script>
  export default {
    name: 'btn-agree-submit',
    data: function () {
      return {
      }
    },
    methods: {
      acceptButton: function () {
        this.$router.push('number' + '?checked=1');
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
