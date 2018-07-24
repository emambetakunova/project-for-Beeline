<template>
  <div class="btn_block" id="number">
    <button-back-black-white></button-back-black-white>
    <div class="form-wrapper">
      <form class="wifi__form">
        <div class="phone_number-group">
          <label class="form__label">Введи номер
            <strong>Beeline</strong> и получи код для безлимитного доступа</label>
          <input class="form__input" placeholder="07XX XXXXXX" id="name" type="number" v-model="name"
                 required>
        </div>
        <div class="policy-group">
          <input class="policy__input" id="policy" name="policy" type="checkbox" v-model="checked">
          <label class="policy__label" for="policy">
            <div class="policy__span"></div>
            <div class="policy__text" v-on:click="goToAgreementpage()">я согласен(а) с условиями пользовательского
              соглашения
            </div>
          </label>
        </div>
        <button class="button" v-if="checked" type="submit" :class="[isFull() ? activeClass : '']"
                v-on:click="sendCode()">
          ПОЛУЧИТЬ КОД
        </button>
      </form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
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
        baseUrl: 'http://localhost:8181/wifi/',
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
        this.$axios.post(this.baseUrl + 'auth/sendCode',
          {
          phoneNumber: this.name
        })
          .then((response) => {
            this.$router.push("/code");
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


