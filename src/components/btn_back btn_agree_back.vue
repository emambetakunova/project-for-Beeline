<template>
  <button class="btn_back btn_agree_back" v-on:click="backButton()">НАЗАД</button>
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
