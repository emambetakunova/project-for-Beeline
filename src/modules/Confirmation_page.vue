<template>
  <div class="confirmation" id="confirm">
    <header class="confirmation__header">
      <button-back></button-back>

      <confirm-granted v-if="getMessage('1')"></confirm-granted>
      <confirm-restricted v-if="getMessage('2')"></confirm-restricted>
      <confirm-rated v-if="getMessage('3')"></confirm-rated>

      <div class="confirmation__sim">
        <p class="confirmation__sim__description">{{ $t("bye_Beeline_sim_offer") }}</p>
        <strong class="contacts-number">0771 055 155</strong>
        <div class="contacts__messanger">
          <a class="contacts__messanger__link" href="https://api.whatsapp.com/send?phone=9960771055155">
            <img src="../assets/images/Whatsapp_icon.svg" alt="">
          </a>
          <a class="contacts__messanger__link" href="https://telegram.me/Beeline_free_wifi">
            <img src="../assets/images/Telegram_icon.svg" alt="">
          </a>
        </div>
      </div>

    </header>
    <main>
      <div class="information">
        <h3 class="information__heading">{{ $t("with_Beeline_Sim_u_Get") }}</h3>
        <p class="information__text--first"><strong>{{ $t("slogan") }}</strong> <br>{{ $t("Unlim_Wifi") }}
        </p>
        <div class="information__heading-container">
          <h3 class="information__heading--main">{{ $t("new_tariff_Plan") }}</h3>
          <h3 class="information__heading--secondary">{{ $t("simple") }}</h3>
        </div>
        <div class="information__text__container">
          <div class="information__image__wrapper">
            <img src="../assets/images/1-illustration.svg" alt=""/>
          </div>
          <p class="information__text information__text--border">{{ $t("unlim_calls") }}<span
            class="information__text--black">{{ $t("unlim_sms") }}</span>
          </p>
        </div>
        <div class="information__text__container">
          <div class="information__image__wrapper">
            <img src="../assets/images/2-illustration.svg" alt=""/>
          </div>
          <p class="information__text information__text--border">{{ $t("internet_trafik") }}<span
            class="information__text--black">{{ $t("no_deviding") }}</span>
          </p>
        </div>
        <div class="information__text__container">
          <div class="information__image__wrapper">
            <img src="../assets/images/3-illustration.svg" alt=""/>
          </div>
          <p class="information__text information__text--border">{{ $t("10min") }}<span
            class="information__text--black">{{ $t("offnet") }}</span>
          </p>
        </div>
        <div class="information__text__container">
          <div class="information__image__wrapper">
            <img src="../assets/images/4-illustration.svg" alt=""/>
          </div>
          <p class="information__text information__text--border">{{ $t("unlim_night_internet") }}<span
            class="information__text--black">{{ $t("timeDivation") }}</span>
          </p>
        </div>
        <div class="information__text__container">
          <div class="information__image__wrapper">
            <img src="../assets/images/5-illustartion.svg" alt=""/>
          </div>
          <p class="information__text information__text--border">{{ $t("no_pakage") }}<span
            class="information__text--black">{{ $t("prices") }}</span>
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
    name: 'confirm',
    components: {ConfirmRestricted, ConfirmGranted, ConfirmRated, ButtonBack},
    data: function () {
      return {
        count: 0,
        messageType: 0,
      }
    },
    methods: {
      getMessage: function (messageType) {
        if (messageType === sessionStorage.getItem('messageType')) {
          return true;
        }
        return false;
      }

    }
  }
</script>
<style src="../assets/css/main.css"></style>



