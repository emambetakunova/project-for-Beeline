<template>
  <div class="rating_block">
    <div>
      <form>
        <input name="rating" type="radio" class="emoji_checkbox rating_1" id="1"/>
        <label for="1">ужасно</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_2" id="2"/>
        <label for="2">плохо</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_3" id="3"/>
        <label for="3">нормально</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_4" id="4"/>
        <label for="4">хорошо</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_5" id="5"/>
        <label for="5">отлично</label>
      </form>
    </div>
  </div>
</template>
<script>
  import RatingInterview from "../rating/RatingInterview";

  export default {
    name: 'rating_block',
    components: {RatingInterview},
    data: function () {
      return {}
    }, methods: {}
  }
</script>
<style src="../../assets/css/reset.css"></style>
<style src="../../assets/css/style.css"></style>
