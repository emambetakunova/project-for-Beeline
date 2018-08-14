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
          <a href="#" class="btn" v-on:click="setLang('kg')" v-if="getLang('kg')">kg</a>
          <a href="#" class="btn" v-on:click="setLang('ru')" v-if="getLang('ru')">ru</a>
          <a href="#" class="btn" v-on:click="setLang('en')" v-if="getLang('en')">en</a>
          <a href="#" class="btn" v-on:click="setLang('uz')" v-if="getLang('uz')">uz</a>
        </div>
      </div>
      <img class="wifi__logo" src="../assets/images/logo.svg" alt="">
      <div class="wifi__heading__wrapper">
        <h3 class="wifi__heading">{{ $t("slogan") }}</h3>
      </div>
    </header>
    <main class="wifi">
      <div class="wifi__options">
        <p class="wifi__options__heading">{{ $t("unlimited_access") }}</p>
        <button class="wifi__options__button" v-on:click="route">
          {{ $t("for_subscribers") }}
          <span class="wifi__options__strong">{{ $t("Beeline") }}</span>
        </button>
      </div>
      <div class="wifi__options">
        <p class="wifi__options__heading"> {{ $t("no_sim") }}</p>
        <button class="wifi__options__button" v-on:click="getAccess">{{ $t("limited_access") }}</button>
      </div>
      <div class="wifi__options">
        <p class="wifi__options__heading">{{ $t("or") }}</p>
        <button class="wifi__options__button wifi__options__button--transparent" v-on:click="confirm_page">
          <p style="width: 95%">{{ $t("just_bye") }}
            <span class="wifi__options__strong">{{ $t("sim") }}</span>
            {{ $t("for_unlimited") }}</p>
          <span class="arrow"></span>
        </button>
      </div>
    </main>
  </div>
</template>

<script>
  import {HTTP} from '../service/http-common';

  export default {
    mounted: function () {
      if (sessionStorage.getItem("lang") === null) {
        location.reload();
      }
      this.changeLang(sessionStorage.getItem("lang"));
    },
    data: function () {
      return {
        lang: 'ru',
        // baseUrl: 'https://free-wifi.beeline.kg:8181//wifi/',
      }
    },

    methods: {
      getAccess: function () {
        console.log(this.baseUrl);
        HTTP.get(this.baseUrl + 'auth/getAccess')
          .then((response) => {
            if (response.body.rate === true) {
              this.router.push("rating");
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
        if (lang === null) {
          lang = this.lang;
        }
        document.getElementById('switch_lang').innerHTML = lang;
        this.lang = lang;
        sessionStorage.setItem('lang', lang);
      },
      setLang: function (lang) {
        this.$store.dispatch('setLang', lang);
        this.changeLang(lang);
      },

      getLang: function (lang) {
        if (lang != this.lang) {
          return true;
        }
        return false;
      },
    }
  }
</script>
<style src="../assets/css/main.css"></style>



