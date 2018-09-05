<template>
  <div>
    <div class="container agreement_block">
      <agreement-ru v-if="getLang('ru')"></agreement-ru>
      <agreement-kg v-if="getLang('kg')"></agreement-kg>
      <agreement-en v-if="getLang('en')"></agreement-en>
      <agreement-uz v-if="getLang('uz')"></agreement-uz>
    </div>
    <div class="agreement_btn">
      <btn_back-btn_agree_back></btn_back-btn_agree_back>
      <btn-agree-submit></btn-agree-submit>
    </div>
  </div>
</template>
<script>
  import Btn_backBtn_agree_back from "../components/btn_back btn_agree_back";
  import BtnAgreeSubmit from "../components/btn_agree_submit";
  import agreementRu from "../components/agreement/AgreementRu.vue";
  import agreementEn from "../components/agreement/AgreementEn.vue";
  import agreementKg from "../components/agreement/AgreementKg.vue";
  import agreementUz from "../components/agreement/AgreementUz.vue";

  export default {
    name: 'agreement',
    components: {BtnAgreeSubmit, Btn_backBtn_agree_back, agreementRu, agreementEn, agreementKg, agreementUz},
    data: function () {
      return {
        checked: false,
      }
    },
    methods: {
      getLang: function (lang) {
        this.lang = sessionStorage.getItem("lang");
        if (lang == this.lang) {
          return true;
        }
        return false;
      },
    },
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
