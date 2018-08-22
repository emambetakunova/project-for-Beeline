<template>
  <div class="btn_block">
    <ButtonBackBlackWhite></ButtonBackBlackWhite>
    <form class="wifi__form" action="">
      <div class="phone_number-group">
        <label class="form__label" for="code"> {{ $t("pass") }} <b> {{ $t("msisdn") }}</b> {{ $t("wifi_which") }}
          <br>
          {{ $t("code_receive") }}</label>
        <input id="code" name="code" class="form__input" type="number"
               placeholder="XXXX" v-model="code"
               required>
      </div>
      <button class="button" type="submit" v-on:click="validateCode(event)">
        {{ $t("connect") }}
      </button>
    </form>
  </div>
</template>

<script>
  import {baseUrl} from '../utils/constants';
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";
  import {HTTP} from '../service/http-common';

  export default {
    name: 'code_page',
    data: function () {
      return {
        lang: 'ru',
        code: '',
      }
    },
    components: {ButtonBackBlackWhite},
    methods: {
      validateCode: function () {
        event.preventDefault()
        HTTP.post(baseUrl + 'auth/validateCode', {
          phoneNumber: sessionStorage.getItem('phoneNumber'),
          code: this.code,
          session: sessionStorage.getItem('session')
        })
          .then(response => {
            if (response.data.status === true) {
              window.location.href = "https://beeline.kg";
            }

          }).catch(e => {
          alert("Неверный код, попробуйте ввести еще раз")
        })
      },
      isFull() {
        if (this.name.length > 8) return true
      }
    }
  }
</script>
<style src="../assets/css/main.css"></style>
