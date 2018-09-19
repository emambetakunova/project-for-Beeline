<template>
  <div id="app">
    <header class="header">
      <div class="wrap">
        <img class="wifi__logo" src="../assets/images/logo_welcome.svg" alt="">
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
      if (this.actionStart === '1') {
        this.seamlessAuth();
        sessionStorage.setItem('actionStart', '1');
      } else {
        this.$router.push("/");
      }
    },
    data: function () {
      return {
        actionStart: '0',
      }
    },
    methods: {
      seamlessAuth: function () {
        this.actionStart = '1';
        HTTP.get(baseUrl + 'auth/seamlessAuth')
          .then(response => {
              if (response.data.error === 1) {
                sessionStorage.setItem("messageType", '1');

                // if (response.data.rate === true) {
                //   sessionStorage.setItem("rate", '1')
                //   this.$router.push("/rating");
                // }

                this.$router.push("/confirm");
              }

              else if (response.data.error === 2) {
                sessionStorage.setItem("messageType", '2');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 3) {
                sessionStorage.setItem("messageType", '3');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 200) {
                sessionStorage.setItem("messageType", '5');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 100) {
                sessionStorage.setItem("messageType", '6');
                this.$router.push("/confirm");
              }
              else {
                this.$router.push("/");
              }
            }
          ).catch((err) => {
          this.$router.push("/");
          console.log(err);
        })
      },
    }
  }
</script>

<style>
  @import "~styles/media.css";
  @import "~styles/reset.css";
  @import "~styles/style.css";
</style>

