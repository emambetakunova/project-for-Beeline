<template>
  <div id="app">
    <header class="wifi__header">
      <div class="wrapper wrap">
        <img class="wifi__logo" src="../assets/images/logo_welcome.svg" alt="">
        <div class="wifi__heading__wrapper">
          <h3 class="wifi__heading">Высокоскоростной и бесплатный </h3>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    name: 'app',
    mounted: function () {
      this.$router.push("/");
    },
    data() {
      return {
        baseUrl: 'http://localhost:8181/wifi/',

      }
    }
  }
</script>


