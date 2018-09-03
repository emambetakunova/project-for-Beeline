<template>
  <div class="interview_block" id="RatingInterview">
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
</template>
<script>
  export default {
    name: 'RatingInterview',
    data: function () {
      return {}
    }
  }
</script>
<style>
  @import "../../assets/css/media.css";
  @import "../../assets/css/reset.css";
  @import "../../assets/css/style.css";
</style>

