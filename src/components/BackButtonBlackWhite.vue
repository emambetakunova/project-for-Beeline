<template>
  <button class="btn_back btn_back_white" v-on:click="backButton()">{{ $t("back") }}</button>
</template>
<script>
  export default {
    name: 'button-back-black-white',
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
