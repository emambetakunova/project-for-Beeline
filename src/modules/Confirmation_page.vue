<template>

  <div class="block">
    <div class="confirmation" id="app">
      <header class="confirmation__header">
        <button-back></button-back>
      </header>
    </div>

    <main class="confirmation-block">

      <div class="confirmation__description" v-if="getMessage('1')">
        <p class="confirmation__text">{{ $t("YES!") }}<br> {{ $t("everything_is_ok") }}</p>
      </div>


      <div class="confirmation__description confirmation__description__time" v-if="getMessage('2')">
        <p class="confirmation__text">{{ $t("UPS!") }}<br> {{ $t("access_60min_granted") }}</p>
        <p>{{ $t("pay_rental_fee") }}</p>
      </div>


      <div class="confirmation__description confirmation__description__time" v-if="getMessage('3')">
        <p class="confirmation__text">{{ $t("UPS!") }}<br> {{ $t("access_60min_granted") }}</p>
        <p>{{ $t("30_min_test2_limit") }}</p>
        <p>{{ $t("bye_one_of_tariffs") }} <strong>{{ $t("MojnoVse20") }}</strong> {{ $t("optional_lang") }}</p>
      </div>

      <div class="confirmation__description confirmation__description__time" v-if="getMessage('4')">
        <p class="confirmation__text"><strong>{{ $t("30_min_test1") }}</strong></p>
        <p>{{ $t("30_min_test2") }}</p>
        <p>{{ $t("30_min_test3") }} <strong>{{ $t("MojnoVse20") }} </strong> {{ $t("optional_lang") }}</p>
      </div>

      <div class="confirmation__description confirmation__description__time" v-if="getMessage('5')">
        <p class="confirmation__text"><strong>{{ $t("time_up_own_rental_fee1") }}</strong></p>
        <p>{{ $t("time_up_own_rental_fee2") }}</p>
      </div>

      <div class="confirmation__description confirmation__description__time" v-if="getMessage('6')">
        <p class="confirmation__text">{{ $t("already_have_access") }}</p>
      </div>

      <div class="confirmation__description confirmation__description__time" v-if="getMessage('7')">
        <p class="confirmation__text"><strong>{{ $t("time_up_own_rental_fee1") }}</strong></p>
        <p>{{ $t("time_up_own_b2b_not_bundle2") }} <strong>{{ $t("MojnoVse20") }}</strong> {{ $t("optional_lang") }}</p>
      </div>


      <div class="confirmation__description confirmation__description__time" v-if="getMessage('8')">
        <p class="confirmation__text"><strong>{{ $t("30_min_test1_limit") }}</strong></p>
        <p>{{ $t("30_min_test2_limit") }}</p>
        <p>{{ $t("30_min_test3_limit") }}</p>
      </div>


      <div class="confirmation__sim">
        <p class="confirmation__sim__description" v-if="getBottomType('4')"> {{ $t("bye_sim_for_unlimited_access")
          }} </p>
        <p class="confirmation__sim__description" v-if="getBottomType('1')">{{ $t("any_questions_write") }}</p>
        <p class="confirmation__sim__description" v-if="getBottomType('2')">{{ $t("any_questions_inform_us") }}</p>
        <p class="confirmation__sim__description" v-if="getBottomType('3')">{{ $t("want_to_by_sim_write") }}</p>
        <strong class="contacts-number">0771 055 155</strong>
      </div>
      <div class="contacts__messanger">
        <a class="contacts__messanger__link" href="https://api.whatsapp.com/send?phone=9960771055155">
          <img src="../assets/images/Whatsapp_icon.svg" alt="">
        </a>
        <a class="contacts__messanger__link" href="https://telegram.me/Beeline_free_wifi">
          <img src="../assets/images/Telegram_icon.svg" alt="">
        </a>
      </div>
      <div class="information" v-if="showOfferInfo">
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
    </main>
  </div>
</template>

<script>
  import ButtonBack from "../components/BackButton";
  import ConfirmRated from "../components/Rated";
  import ConfirmGranted from "../components/AccessGranted";
  import ConfirmRestricted from "../components/AccessRestricted";

  export default {
    mounted: function () {
    },
    name: 'confirm',
    components: {ConfirmRestricted, ConfirmGranted, ConfirmRated, ButtonBack},
    data: function () {
      return {
        messageType: '0',
        bottomType: '0',
        showOfferInfo: true,
      }
    },
    methods: {
      getMessage: function (messageType) {
        // sessionStorage.setItem('messageType', '8')
        if (messageType === sessionStorage.getItem("messageType")) {
          this.messageType = sessionStorage.getItem("messageType");
          if (this.messageType === '1') {
            this.bottomType = '1';
            this.showOfferInfo = false;
          }

          if (this.messageType === '2') {
            this.bottomType = '1';
            this.showOfferInfo = false;
          }

          if (this.messageType === '3') {
            this.bottomType = '2';
          }

          if (this.messageType === '4') {
            this.bottomType = '3';
          }

          if (this.messageType === '5') {
            this.bottomType = '1';
            this.showOfferInfo = false;
          }


          if (this.messageType === '6') {
            this.bottomType = '1';
          }

          if (this.messageType === '7') {
            this.bottomType = '2';
          }

          if (this.messageType === '8') {
            this.bottomType = '3';
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
