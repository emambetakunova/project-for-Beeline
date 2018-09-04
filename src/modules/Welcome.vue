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
      this.seamlessAuth();
    },
    data() {
      return {}
    },
    methods: {
      seamlessAuth: function () {
        HTTP.get(baseUrl + 'auth/seamlessAuth')
          .then(response => {
            if (response.data.status === true) {
              if (response.data.hss === true && response.data.crm === true) {
                sessionStorage.setItem("messageType", '1');

                // if (response.data.rate === true) {
                //   sessionStorage.setItem("rate", '1')
                //   this.$router.push("/rating");
                // }

                this.$router.push("/confirm");
              } else if (response.data.hss === false && response.data.crm === true) {
                sessionStorage.setItem("messageType", '2');
                this.$router.push("/confirm");
              } else {
                sessionStorage.setItem("messageType", '3');
                this.$router.push("/confirm");
              }
            }
            else {
              this.$router.push("/");
            }
          })
      }
    }
  }
</script>

<style>
  @import "~styles/media.css";
  @import "~styles/reset.css";
  @import "~styles/style.css";
</style>

