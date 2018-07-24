<template>
  <div class="wrapper">
    <router-link to="/"></router-link>
    <router-link to="/number"></router-link>
    <router-link to="/confirm"></router-link>
    <router-view></router-view>
    <header class="wifi__header">
      <div class="language_block clearfix">
        <a href="#" class="btn btn_dropdown" id="switch_lang">ru</a>
        <div class="languages_dropdown">
          <a href="#" class="btn" v-on:click="changeLang('kg')">kg</a>
          <a href="#" class="btn" v-on:click="changeLang('ru')">ru</a>
          <a href="#" class="btn" v-on:click="changeLang('en')">en</a>
          <a href="#" class="btn" v-on:click="changeLang('uz')">uz</a>
        </div>
      </div>
      <img class="wifi__logo" src="../assets/images/logo.svg" alt="">
      <div class="wifi__heading__wrapper">
        <h3 class="wifi__heading">Высокоскоростной и бесплатный </h3>
      </div>
    </header>
    <main class="wifi">
      <div class="wifi__options">
        <p class="wifi__options__heading">Безлимитный доступ</p>
        <button class="wifi__options__button" v-on:click="route">
          для абонентов
          <span class="wifi__options__strong">Beeline</span>
        </button>
      </div>
      <div class="wifi__options">
        <p class="wifi__options__heading">Нет номера Beeline? </p>
        <button class="wifi__options__button" v-on:click="getAccess">подключись на 30 минут</button>
      </div>
      <div class="wifi__options">
        <p class="wifi__options__heading">или</p>
        <button class="wifi__options__button wifi__options__button--transparent" v-on:click="confirm_page">
          <p style="width: 95%">просто купи
            <span class="wifi__options__strong">sim-карту</span>
            для безлимитного доступа</p>
          <span class="arrow"></span>
        </button>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        baseUrl: 'http://localhost:8181/wifi/',
      }
    },

    methods: {
        getAccess: function () {
          this.$axios.get(this.baseUrl + 'auth/getAccess')
            .then((response) => {
              if (response.body.rate === true) {
                window.location.href = "../" + this.lang + "/forStrangers.html";
              } else {

                if (response.body.status === true) {
                  this.$router.push("/confirm");
                }

                if (response.body.status === false) {
                  this.$router.push("/confirm");
                }
              }
            }).catch((err) => {
            console.log(err);
          })
      },

      confirm_page: function () {
        this.$router.push("/confirm");
      },

      route: function () {
        this.$router.push("/number");
      },

      changeLang: function (lang) {
        document.getElementById('switch_lang').innerHTML = lang;
      },
    },
  }
</script>


