<template>
  <button class="btn_back" v-on:click="backButton()">Назад</button>
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
        window.history.back();
      }
    }
  }
</script>
