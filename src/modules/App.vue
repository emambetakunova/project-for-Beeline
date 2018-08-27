<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'app',
    mounted: function () {
      this.$router.push("/welcome");
    },

    data: function () {
      return {}
    }
  }
</script>
