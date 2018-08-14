<template>
  <button class="button btn_agree" v-on:click="acceptButton()" type="submit">{{ $t("agree") }}</button>
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
