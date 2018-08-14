<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'app',
    mounted: function () {
      localStorage.setItem('app', 'app.vue');
    },

    data: function () {
      return {}
    }
  }
</script>
