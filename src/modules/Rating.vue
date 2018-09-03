<template>
  <div class="rating__header" id="rating">
    <div class="container">
      <p class="rating__description" v-if="showMsg">Время истекло. Хочешь еще доступ на <span>30 минут?</span>
      </p>
      <h3 class="rating__title">Оцени качество Wi-Fi</h3>
      <div class="rating_block">
        <div>
          <form>
            <input name="rating" type="radio" class="emoji_checkbox rating_1" id="rating_1" v-on:click="setRate(1)"/>
            <label for="rating_1">ужасно</label>
            <input name="rating" type="radio" class="emoji_checkbox rating_2" id="rating_2" v-on:click="setRate(2)"/>
            <label for="rating_2">плохо</label>
            <input name="rating" type="radio" class="emoji_checkbox rating_3" id="rating_3" v-on:click="setRate(3)"/>
            <label for="rating_3">нормально</label>
            <input name="rating" type="radio" class="emoji_checkbox rating_4" id="rating_4" v-on:click="setRate(4)"/>
            <label for="rating_4">хорошо</label>
            <input name="rating" type="radio" class="emoji_checkbox rating_5" id="rating_5" v-on:click="setRate(5)"/>
            <label for="rating_5">отлично</label>
          </form>
        </div>
      </div>

      <div class="answer_text" v-if="showThanks">
        <h3 class="rating__title answer_text">Спасибо за оценку!</h3>
      </div>


      <div class="interview_block" v-if="showInterview">
        <div class="container">
          <h3 class="rating__title">Твой отзыв поможет нам стать лучше:</h3>
          <div class="interview_list">
            <form>
              <div class="interview_item">
                <input name="interview" type="radio" class="interview_radio" id="interview_1"/>
                <label for="interview_1">Wi-Fi не везде ловит</label>
              </div>
              <div class="interview_item">
                <input name="interview" type="radio" class="interview_radio" id="interview_2"/>
                <label for="interview_2">Интернет тормозит</label>
              </div>
              <div class="interview_item">
                <input name="interview" type="radio" class="interview_radio" id="interview_3"/>
                <label for="interview_3">Сложно подключиться</label>
              </div>
              <div class="interview_item">
                <input name="interview" type="radio" class="interview_radio" id="interview_4"/>
                <label for="interview_4">Интернет периодически пропадает</label>
              </div>
              <div class="interview_item interview_itemlast">
                <label class="interview_label" for="interview_text">Другое</label>
              </div>
              <div class="interview_item interview_itemlast">
                <textarea class="interview_textarea" id="interview_text" placeholder="Твои комментарии"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
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
        rate: 0,
      }
    }, methods: {
      setRate: function (rate) {
        this.rate = rate;

        if (rate === 5) {
          this.showThanks = true;
          this.showInterview = false;
        } else {
          this.showInterview = true;
          this.showThanks = false;

        }
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
