<template>
  <div class="rating__header" id="rating">
    <div class="container">
      <p class="rating__description" v-if="showMsg">Время истекло. Хочешь еще доступ на <span>30 минут?</span>
      </p>
      <p class="rating__description" v-if="showMsgOwn">Помоги нам стать еще лучше</p>
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
                <input v-model="interview" name="interview" type="radio" class="interview_radio" id="interview_1"
                       v-bind:value="'Wi-Fi не везде ловит'"/>
                <label for="interview_1">Wi-Fi не везде ловит</label>
              </div>
              <div class="interview_item">
                <input v-model="interview" name="interview" type="radio" class="interview_radio" id="interview_2"
                       v-bind:value="'Интернет тормозит'"/>
                <label for="interview_2">Интернет тормозит</label>
              </div>
              <div class="interview_item">
                <input v-model="interview" name="interview" type="radio" class="interview_radio" id="interview_3"
                       v-bind:value="'Сложно подключиться'"/>
                <label for="interview_3">Сложно подключиться</label>
              </div>
              <div class="interview_item">
                <input v-model="interview" name="interview" type="radio" class="interview_radio" id="interview_4"
                       v-bind:value="'Интернет периодически пропадает'"/>
                <label for="interview_4">Интернет периодически пропадает</label>
              </div>
              <div class="interview_item interview_itemlast">
                <label class="interview_label" for="interview_text">Другое</label>
              </div>
              <div class="interview_item interview_itemlast">
                <textarea v-model="comment" class="interview_textarea" id="interview_text"
                          placeholder="Твои комментарии"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="rating_button">
        <button class="rating_btn" type="submit" v-on:click.prevent="sendRate(event)">Отправить</button>
      </div>
    </div>
  </div>
</template>
<script>
  import RatingBlock from "../components/rating/RatingBlock";
  import RatingInterview from "../components/rating/RatingInterview";
  import {HTTP} from '../service/http-common';
  import api from '../service/api';


  export default {
    name: 'rating',
    components: {RatingInterview, RatingBlock},
    data: function () {
      return {
        showThanks: false,
        showRating: true,
        showInterview: false,
        showMsg: false,
        showMsgOwn: false,
        rate: 0,
        interview: '',
        descr: '',
        comment: '',
      }
    },
    methods: {
      setRate: function (rate) {
        this.rate = rate;

        if (rate === 5) {
          this.rate = rate;
          this.showThanks = true;
          this.showInterview = false;
        } else {
          this.showInterview = true;
          this.showThanks = false;

        }
      },
      sendRate: function () {
        event.preventDefault();
        HTTP.post(api.rate, {
          descr: this.interview + ' ' + this.comment,
          ownUsers: this.code,
          rate: this.rate
        })

          .then(response => {
            if (response.data.status === true) {
              if (response.data.hss === true && response.data.crm === true) {
                window.messageType = '1';
                this.$router.push("/confirm");
              } else if (response.data.hss === false && response.data.crm === true) {
                window.messageType = '2';
                this.$router.push("/confirm");
              } else {
                window.messageType = '3';
                this.$router.push("/confirm");
              }
            }
          }).catch(e => {
          alert("Неверный код, попробуйте ввести еще раз")
        })
      }
    }
  }
</script>
<style>
  @import "../assets/css/media.css";
  @import "../assets/css/reset.css";
  @import "../assets/css/style.css";
</style>
