<template>
  <div>
    <div class="confirmation" id="confirm">
      <button-back></button-back>

      <header class="confirmation__header">
        <div class="confirmation__description" v-if="getMessage(1)">
          <p>{{ $t("everything_is_ok") }}</p>
        </div>

        <div class="confirmation__description confirmation__description__time" v-if="getMessage(2)">
          <p class="confirmation__text">{{ $t("access_60min_granted") }}</p>
          <p>{{ $t("pay_rental_fee") }}</p>
        </div>

        <div class="confirmation__description confirmation__description__time" v-if="getMessage(3)">
          <p class="confirmation__text">{{ $t("access_60min_granted") }}</p>
          <p> {{ $t("bye_one_of_tariffs") }} <strong>«{{ $t("MojnoVse20") }}</strong>, <strong>{{ $t("MojnoVse") }}
          </strong> {{ $t("or") }} <strong> {{ $t("prostoTP") }} </strong>, <strong>{{ $t("ProstoMini") }}</strong>
            {{$t("with_payed_rental_fee") }}</p>
        </div>

        <div class="confirmation__description confirmation__description__time" v-if="getMessage(4)">
          <p class="confirmation__text">{{ $t("access_30min_granted") }}</p>
        </div>

        <div class="confirmation__description confirmation__description__time" v-if="getMessage(5)">
          <p class="confirmation__text">{{ $t("timeUp") }}</p>
          <p> {{ $t("bye_one_of_tariffs") }} <strong>«{{ $t("MojnoVse20") }}</strong>, <strong>{{ $t("MojnoVse") }}
          </strong> {{ $t("or") }} <strong> {{ $t("prostoTP") }} </strong>, <strong>{{ $t("ProstoMini") }}</strong>
            {{$t("with_payed_rental_fee") }}</p>
          <!---->
        </div>
      </header>
    </div>
    <main class="confirmation-block">

      <div class="confirmation__sim">
        <p class="confirmation__sim__description" v-if="getBottomType(4)"> {{ $t("bye_sim_for_unlimited_access") }} </p>
        <p class="confirmation__sim__description" v-if="getBottomType(1)">{{ $t("any_questions_write") }}</p>
        <p class="confirmation__sim__description" v-if="getBottomType(2)">{{ $t("any_questions_inform_us") }}</p>
        <p class="confirmation__sim__description" v-if="getBottomType(3)">{{ $t("want_to_by_sim_write") }}</p>


        <strong class="contacts-number">0771 055 155</strong>
        <div class="contacts__messanger">
          <a class="contacts__messanger__link" href="https://api.whatsapp.com/send?phone=9960771055155">
            <img src="../assets/images/Whatsapp_icon.svg" alt="">
          </a>
          <a class="contacts__messanger__link" href="https://telegram.me/Beeline_free_wifi">
            <img src="../assets/images/Telegram_icon.svg" alt="">
          </a>
        </div>
        <div class="information">
          <div class="information__heading-container">
            <h3 class="information__heading--main">{{ $t("new_tariff_Plan") }}</h3>
            <h3 class="information__heading--secondary">{{ $t("MojnoVse20") }}</h3>
          </div>
          <div class="information__text__container">
            <div class="information__image__wrapper">
              <img src="../assets/images/like-illustration.svg" alt="">
            </div>
            <p class="information__text information__text--border">{{ $t("internet_trafik") }}<span
              class="information__text--black">{{ $t("day_internet") }}</span>
            </p>
          </div>
          <div class="information__text__container">
            <div class="information__image__wrapper">
              <img src="">
              <img src="../assets/images/ytube-illustration.svg" alt="">
            </div>
            <p class="information__text information__text--border">{{ $t("unlim_night_internet") }}<span
              class="information__text--black">{{ $t("timeDivation") }}</span>
            </p>
          </div>
          <!--<div class="information__text__container">-->
          <!--<div class="information__image__wrapper">-->
          <!--<img src="../assets/images/eternity-illustration.svg" alt="">-->
          <!--</div>-->
          <!--<p class="information__text information__text&#45;&#45;border">{{ $t("unlimited_internet") }} <span-->
          <!--class="information__text&#45;&#45;black">{{ $t("128") }}</span>-->
          <!--</p>-->
          <!--</div>-->
          <div class="information__text__container">
            <div class="information__image__wrapper">
              <img src="../assets/images/profile-illustration.svg" alt="">
            </div>
            <p class="information__text information__text--border">{{ $t("unlim_calls") }} <span
              class="information__text--black">{{ $t("unlim_sms") }}</span>
            </p>
          </div>
          <div class="information__text__container">
            <div class="information__image__wrapper">
              <img src="../assets/images/tenmin-illustration.svg" alt="">
            </div>
            <p class="information__text information__text--border">{{ $t("10min") }}<span
              class="information__text--black">{{ $t("offnet") }}</span>
            </p>
          </div>
          <div class="price__info">
            <p class="information__price">
              <strong>{{ $t("rental_fee") }}</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!--<div>-->
  <!--<div class="confirmation" id="confirm">-->
  <!--<header class="confirmation__header">-->
  <!--<button-back></button-back>-->
  <!--</header>-->
  <!--</div>-->

  <!--<confirm-granted v-if="getMessage('1')"></confirm-granted>-->
  <!--<confirm-restricted v-if="getMessage('2')"></confirm-restricted>-->
  <!--<confirm-rated v-if="getMessage('3')"></confirm-rated>-->


  <!--<div class="confirmation__sim">-->
  <!--<p class="confirmation__sim__description">{{ $t("bye_Beeline_sim_offer") }}</p>-->
  <!--<strong class="contacts-number">0771 055 155</strong>-->
  <!--<div class="contacts__messanger">-->
  <!--<a class="contacts__messanger__link" href="https://api.whatsapp.com/send?phone=9960771055155">-->
  <!--<img src="../assets/images/Whatsapp_icon.svg" alt="">-->
  <!--</a>-->
  <!--<a class="contacts__messanger__link" href="https://telegram.me/Beeline_free_wifi">-->
  <!--<img src="../assets/images/Telegram_icon.svg" alt="">-->
  <!--</a>-->
  <!--</div>-->
  <!--</div>-->

  <!--<main>-->
  <!--<div class="information">-->
  <!--<h3 class="information__heading">{{ $t("with_Beeline_Sim_u_Get") }}</h3>-->
  <!--<p class="information__text&#45;&#45;first"><strong>{{ $t("slogan") }}</strong> <br>{{ $t("Unlim_Wifi") }}-->
  <!--</p>-->
  <!--<div class="information__heading-container">-->
  <!--<h3 class="information__heading&#45;&#45;main">{{ $t("new_tariff_Plan") }}</h3>-->
  <!--<h3 class="information__heading&#45;&#45;secondary">{{ $t("simple") }}</h3>-->
  <!--</div>-->
  <!--<div class="information__text__container">-->
  <!--<div class="information__image__wrapper">-->
  <!--<img src="../assets/images/1-illustration.svg" alt=""/>-->
  <!--</div>-->
  <!--<p class="information__text information__text&#45;&#45;border">{{ $t("unlim_calls") }}<span-->
  <!--class="information__text&#45;&#45;black">{{ $t("unlim_sms") }}</span>-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="information__text__container">-->
  <!--<div class="information__image__wrapper">-->
  <!--<img src="../assets/images/2-illustration.svg" alt=""/>-->
  <!--</div>-->
  <!--<p class="information__text information__text&#45;&#45;border">{{ $t("internet_trafik") }}<span-->
  <!--class="information__text&#45;&#45;black">{{ $t("no_deviding") }}</span>-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="information__text__container">-->
  <!--<div class="information__image__wrapper">-->
  <!--<img src="../assets/images/3-illustration.svg" alt=""/>-->
  <!--</div>-->
  <!--<p class="information__text information__text&#45;&#45;border">{{ $t("10min") }}<span-->
  <!--class="information__text&#45;&#45;black">{{ $t("offnet") }}</span>-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="information__text__container">-->
  <!--<div class="information__image__wrapper">-->
  <!--<img src="../assets/images/4-illustration.svg" alt=""/>-->
  <!--</div>-->
  <!--<p class="information__text information__text&#45;&#45;border">{{ $t("unlim_night_internet") }}<span-->
  <!--class="information__text&#45;&#45;black">{{ $t("timeDivation") }}</span>-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="information__text__container">-->
  <!--<div class="information__image__wrapper">-->
  <!--<img src="../assets/images/5-illustartion.svg" alt=""/>-->
  <!--</div>-->
  <!--<p class="information__text information__text&#45;&#45;border">{{ $t("no_pakage") }}<span-->
  <!--class="information__text&#45;&#45;black">{{ $t("prices") }}</span>-->
  <!--</p>-->
  <!--</div>-->
  <!--<div class="price__info">-->
  <!--<p class="information__price">-->
  <!--<strong>{{ $t("rental_fee") }}</strong>-->
  <!--</p>-->
  <!--</div>-->
  <!--</div>-->
  <!--</main>-->
  <!--</div>-->
</template>

<script>
  import ButtonBack from "../components/BackButton";
  import ConfirmRated from "../components/Rated";
  import ConfirmGranted from "../components/AccessGranted";
  import ConfirmRestricted from "../components/AccessRestricted";

  export default {
    name: 'confirm',
    components: {ConfirmRestricted, ConfirmGranted, ConfirmRated, ButtonBack},
    data: function () {
      return {
        count: 0,
        messageType: 0,
        bottomType: 0,
      }
    },
    methods: {
      getMessage: function (messageType) {
        if (messageType === sessionStorage.getItem('messageType')) {
          if (sessionStorage.getItem('messageType') === '1') {
            this.bottomType = 1;
          }

          if (sessionStorage.getItem('messageType') === '2') {
            this.bottomType = 1;
          }

          if (sessionStorage.getItem('messageType') === '3') {
            this.bottomType = 2;
          }

          if (sessionStorage.getItem('messageType') === '4') {
            this.bottomType = 3;
          }


          if (sessionStorage.getItem('messageType') === '5') {
            this.bottomType = 4;
          }

          return true;
        }
        return false;
      },

      getBottomType: function (bottomType) {
        if (bottomType === this.bottomType) {
          return true;
        }
        return false;
      }

    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
