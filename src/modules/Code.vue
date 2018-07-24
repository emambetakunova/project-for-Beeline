<template>
  <div class="btn_block">
    <button-back-black-white></button-back-black-white>
    <form class="wifi__form" action="">
      <div class="phone_number-group">
        <label class="form__label" for="code">Введите <b>код</b>, который <br>
          получите на ваш телефон</label>
        <input id="code" name="code" class="form__input" type="number"
               placeholder="XXXX" v-model="code"
               required>
      </div>
      <button class="button" type="submit">
        ПОДКЛЮЧИТЬСЯ
      </button>
    </form>
  </div>
</template>

<script>
  import ButtonBackBlackWhite from "../components/BackButtonBlackWhite";
  export default {
    name: 'code',
    components: {ButtonBackBlackWhite},
    data: function () {
      return {
        count: 0
      }
    }
  }
</script>


