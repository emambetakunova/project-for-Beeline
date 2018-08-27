<template>
  <div id="app">
    <header class="wifi__header">
      <div class="wrapper wrap">
        <img class="wifi__logo" src="../assets/images/logo_welcome.svg" alt="">
        <div class="wifi__heading__wrapper">
          <h3 class="wifi__heading">{{ $t("slogan") }}</h3>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import {baseUrl} from '../utils/constants';
  import {HTTP} from '../service/http-common';

  export default {
    name: 'app',
    mounted: function () {
      this.seamlessAuth();
    },
    data() {
      return {}
    },
    methods: {
      seamlessAuth: function () {
        HTTP.get(baseUrl + 'auth/seamlessAuth')
          .then(response => {
            // if (response.data.rate === true) {
            //   window.location.href = "../lang/" + this.lang + "/forOwns.html";
            // }
            if (response.data.status === true) {
              window.location.href = "https://beeline.kg";
            }
            else {
              this.$router.push("/");
            }
          })
      }
    }
  }
</script>
<style src="../assets/css/main.css"></style>



