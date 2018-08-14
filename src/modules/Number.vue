<template>
  <div class="btn_block" id="number">
    <button-back-black-white></button-back-black-white>
    <div class="form-wrapper">
      <form class="wifi__form">
        <div class="phone_number-group">
          <label class="form__label">{{ $t("pass") }} {{ $t("msisdn") }}
            <strong>{{ $t("Beeline") }}</strong> {{ $t("get_password") }}</label>
          <input class="form__input" placeholder="07XX XXXXXX" id="name" type="number" v-model="name"
                 required>
        </div>
        <div class="policy-group">
          <input class="policy__input" id="policy" name="policy" type="checkbox" v-model="checked">
          <label class="policy__label" for="policy">
            <div class="policy__span"></div>
            <div class="policy__text" v-on:click="goToAgreementpage()">{{ $t("using_agreement") }}
            </div>
          </label>
        </div>
        <button class="button" v-if="checked" type="submit" :class="[isFull() ? activeClass : '']"
                v-on:click="sendCode()">
          {{ $t("get_code") }}
        </button>
      </form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {HTTP} from '../service/http-common';
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";

  export default {
    name: 'number',
    components: {ButtonBackBlackWhite},
    mounted: function () {
      console.log(this.$route.query.checked);
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
        info: null,
      }
    },
    methods: {
      backButton: function () {
        this.$router.push('/');
      },
      goToAgreementpage: function () {
        this.$router.push('agreement');
      },
      sendCode: function () {
        HTTP.post('auth/sendCode',
          {
          phoneNumber: this.name
        })
          .then((response) => {

            if(response.body.status === null) {
              alert(response.body.error);
            }

            if(response.body.status === true) {
              localStorage.setItem()
              this.$router.push("/code");
            }

            if(response.body.status === false) {
              alert(response.body.error);
            }

        }).catch((err) => {
          console.log(err);
        })
      },
      isFull() {
        if (this.name.length > 8) return true
      }
    }
  }
</script>
<style src="../assets/css/main.css"></style>



