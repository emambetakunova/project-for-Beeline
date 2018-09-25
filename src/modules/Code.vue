<template>
  <div class="btn_block">
    <ButtonBackBlackWhite></ButtonBackBlackWhite>
    <form class="wifi__form" action="">
      <div class="phone__number__group">
        <label class="form__label" for="code"> {{ $t("pass") }} <b> {{ $t("msisdn") }}</b> {{ $t("wifi_which") }}
          <br>
          {{ $t("code_receive") }}</label>
        <input id="code" name="code" class="form__input" type="number"
               placeholder="XXXX" v-model="code"
               required>
      </div>
      <div class="rating_button">
        <button class="rating_btn" type="submit" v-on:click.prevent="validateCode()" v-if="activeState"> {{
          $t("connect") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import api from '../service/api';
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";
  import {HTTP} from '../service/http-common';

  export default {
    name: 'code_page',
    data: function () {
      return {
        lang: 'ru',
        code: '',
        hss: false,
        offer: false,
        submitted: false,
        activeState: true,
      }
    },
    components: {ButtonBackBlackWhite},
    methods: {
      validateCode: function () {
        this.activeState = false;
        event.preventDefault();
        HTTP.post(api.validateCode, {
          phoneNumber: sessionStorage.getItem("phoneNumber"),
          code: this.code,
          session: sessionStorage.getItem("session")
        })
          .then(response => {
            if (response.data.status === true) {
              if (response.data.error === 1) {
                sessionStorage.setItem("messageType", '1');

                // if (response.data.rate === true) {
                //   sessionStorage.setItem("rate", '1')
                //   this.$router.push("/rating");
                // }

                this.$router.push("/confirm");
              }

              else if (response.data.error === 100) {
                sessionStorage.setItem("messageType", '6');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 110) {
                sessionStorage.setItem("messageType", '3');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 111) {
                sessionStorage.setItem("messageType", '3');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 112) {
                sessionStorage.setItem("messageType", '2');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 200) {
                sessionStorage.setItem("messageType", '5');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 5) {
                this.$router.push("/");
              }
            } else if (response.data.status === false) {

              if (response.data.error === 110) {
                sessionStorage.setItem("messageType", '7');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 111) {
                sessionStorage.setItem("messageType", '7');
                this.$router.push("/confirm");
              }

              else if (response.data.error === 112) {
                sessionStorage.setItem("messageType", '5');
                this.$router.push("/confirm");
              }
              else {
                this.$router.push("/");
              }
            }

            this.$router.push("/");
            }
          ).catch(e => {
          this.$router.push("/");
        })
      },
      isFull() {
        if (this.name.length > 8) return true
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
