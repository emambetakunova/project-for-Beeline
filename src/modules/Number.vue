<template>
  <div class="btn_block" id="number">
    <button-back-black-white></button-back-black-white>
    <div class="container">
      <div class="phone_number-group">
        <label class="form__label">{{ $t("pass") }} {{ $t("msisdn") }}
          <strong>{{ $t("Beeline") }}</strong> {{ $t("get_password") }}</label>
        <input class="form__input" placeholder="0XXX XXXXXX" id="name" type="number" v-model="name"
               required v-on:click="setZero()">
      </div>
      <div class="policy-group">
        <input class="policy__input" id="policy" name="policy" type="checkbox" v-model="checked">
        <label class="policy__label" for="policy">
          <div class="policy__span"></div>
          <div class="policy__text" v-on:click="goToAgreementPage()">{{ $t("using_agreement") }}
          </div>
        </label>
      </div>
      <div class="rating_button">
        <button class="rating_btn" v-if="checked" type="submit" :class="[isFull() ? activeClass : '']"
                v-on:click.prevent="sendCode()">{{ $t("get_code") }}
        </button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {HTTP} from '../service/http-common';
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";
  import api from '../service/api';


  export default {
    name: 'number',
    components: {ButtonBackBlackWhite},
    mounted: function () {
      if (this.$route.query.checked === '1') {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    data: function () {
      return {
        url: '',
        name: '', //this stores data values for ‘name’,
        activeClass: 'wifi__button--yellow active',
        status: false,
        checked: false,
        lang: 'ru',
        session: null,
        info: null,
      }
    },
    methods: {
      backButton: function () {
        this.$router.push('/');
      },
      goToAgreementPage: function () {
        this.$router.push('agreement');
      },
      setZero: function () {
        this.name = '0';
      },
      sendCode: function () {

        this.checked = false;

        event.preventDefault();
        HTTP.post(api.sendCode,
          {
            phoneNumber: this.name
          })
          .then((response) => {
            if (response.data.status === true) {
              sessionStorage.setItem("phoneNumber", response.data.phoneNumber);
              sessionStorage.setItem("session", response.data.session);
              this.$router.push("/code");
            } else {
              this.$router.push("/number");
              this.checked = true;
            }
          }).catch((err) => {
          this.$router.push("/number");
          this.checked = true;

          console.log(err);
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

