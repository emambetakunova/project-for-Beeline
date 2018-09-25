<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div class="wrapper" id="app">
    <router-link to="/"></router-link>
    <router-link to="/number"></router-link>
    <router-link to="/confirm"></router-link>
    <router-view></router-view>

    <div class="contaner wifi__header">
      <div class="language_block">
        <a href="#" class="btn btn_dropdown" id="switch_lang">ru</a>
        <div class="languages_dropdown">
          <a href="#" class="btn" v-on:click="setLang('kg')" v-if="getLang('kg')">kg</a>
          <a href="#" class="btn" v-on:click="setLang('ru')" v-if="getLang('ru')">ru</a>
          <a href="#" class="btn" v-on:click="setLang('en')" v-if="getLang('en')">en</a>
          <a href="#" class="btn" v-on:click="setLang('uz')" v-if="getLang('uz')">uz</a>
        </div>
      </div>

      <header>
        <img class="wifi__logo" src="../assets/images/logo.svg" alt="">
        <main class="wifi">
          <div class="wifi__options">
            <button class="wifi__options__button" @click="route">
              {{ $t("for_subscribers") }}
              <span class="wifi__options__strong">{{ $t("Beeline") }}</span>
              {{ $t("for_beeline_customers") }}
            </button>
          </div>
          <div class="wifi__options" v-if="checked">
            <button class="wifi__options__button" @click="getAccess">{{ $t("no_sim") }} <span
              class="wifi__options__strong">{{ $t("limited_access") }}</span></button>
          </div>
        </main>
      </header>
    </div>
  </div>
</template>

<script>
  import {HTTP} from '../service/http-common';
  import api from '../service/api';
  import i18n from "../lang/lang";


  export default {

    mounted: function () {
      this.changeLang(i18n.locale);
    },
    data: function () {
      return {
        lang: 'ru',
        checked: true,
        disabled: false,
      }
    },

    methods: {
      getAccess: function () {

        this.checked = false;

        HTTP.get(api.getAccess)
          .then((response) => {

            if (response.data.rate === true) {
              this.$router.push("rating");
            } else {

              if (response.data.status === true) {
                sessionStorage.setItem("messageType", '4');
                this.$router.push("/confirm");
              }

              if (response.data.status === false) {
                sessionStorage.setItem("messageType", '8');
                this.$router.push("/confirm");
              }
            }
          }).catch((err) => {
          this.checked = true;
          console.log(err);
        })
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
    },
  }
</script>
<style>
  @import "~styles/media.css";
  @import "~styles/reset.css";
  @import "~styles/style.css";
</style>



