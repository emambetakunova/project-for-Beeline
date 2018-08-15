<template>
  <div class="btn_block">
    <ButtonBackBlackWhite></ButtonBackBlackWhite>
    <form class="wifi__form" action="">
      <div class="phone_number-group">
        <label class="form__label" for="password">Введите <b>код</b>, который <br>
          получите на ваш телефон</label>
        <input id="password" name="code" class="form__input" type="number"
               placeholder="XXXX" v-model="password"
               required>
      </div>
      <button class="button" type="submit" v-on:click="validateCode()">
        ПОДКЛЮЧИТЬСЯ
      </button>
    </form>
  </div>
</template>

<script>
  import {baseUrl} from '../utils/constants';
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";

  export default {
    name: 'password',
    data: function () {
      return {
        lang: 'ru',
        password: '',
      }
    },
    components: {ButtonBackBlackWhite},
    methods: {
      validateCode() {
        HTTP.post(baseUrl + 'auth/validateCode', {
          phoneNumber: this.name,
          code: this.code,
          session: sessionStorage.getItem('session')
        })
          .then(response => {
            if (response.data.status === true) {
              window.location.href = "https://beeline.kg";
            }
            if (response.data.status === false) {
              alert("Неверный код, попробуйте ввести еще раз")
            }
          })
      },
      isFull() {
        if (this.name.length > 8) return true
      }
    }
  }
</script>
<style src="../assets/css/main.css"></style>



