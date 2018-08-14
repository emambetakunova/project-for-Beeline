<template>
  <div class="btn_block">
    <button-back-black-white></button-back-black-white>
    <form class="wifi__form" action="">
      <div class="phone_number-group">
        <label class="form__label" for="password">Введите <b>код</b>, который <br>
          получите на ваш телефон</label>
        <input id="password" name="code" class="form__input" type="number"
               placeholder="XXXX" v-model="password"
               required>
      </div>
    </form>
  </div>
</template>

<script>
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";

  export default {
    name: 'password',
    data: function () {
      return {
        lang: 'ru',
        // baseUrl: 'https://free-wifi.beeline.kg:8181//wifi/',
      }
    },
    components: {ButtonBackBlackWhite},
  }
</script>
<style src="../assets/css/main.css"></style>



