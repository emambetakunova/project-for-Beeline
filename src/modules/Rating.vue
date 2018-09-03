<template>
  <div class="rating__header">
    <div class="container">
      <p class="rating__description" v-if="showMsg">К сожалению, время истекло. Оцени скорость Wi-Fi и получи доступ еще
        на <span>30 минут!</span>
      </p>
      <h3 class="rating__title">Оцени качество Wi-Fi</h3>
      <RatingBlock></RatingBlock>
      <div class="answer_text" v-if="showThanks">
        <h3 class="rating__title answer_text">Спасибо за оценку!</h3>
      </div>
      <RatingInterview v-if="showInterview"></RatingInterview>
      <div class="rating_button">
        <button class="rating_btn" type="submit" v-on:click.prevent="validateCode($event)">подключись</button>
      </div>
    </div>
  </div>
</template>
<script>
  import RatingBlock from "../components/rating/RatingBlock";
  import RatingInterview from "../components/rating/RatingInterview";

  export default {
    name: 'rating',
    components: {RatingInterview, RatingBlock},
    data: function () {
      return {
        showThanks: false,
        showRating: true,
        showInterview: false,
        showMsg: false,
      }
    }, methods: {}
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
