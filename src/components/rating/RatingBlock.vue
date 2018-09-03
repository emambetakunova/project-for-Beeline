<template>
  <div class="rating_block">
    <div>
      <form>
        <input name="rating" type="radio" class="emoji_checkbox rating_1" id="rating_1"/>
        <label for="rating_1">ужасно</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_2" id="rating_2"/>
        <label for="rating_2">плохо</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_3" id="rating_3"/>
        <label for="rating_3">нормально</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_4" id="rating_4"/>
        <label for="rating_4">хорошо</label>
        <input name="rating" type="radio" class="emoji_checkbox rating_5" id="rating_5"/>
        <label for="rating_5">отлично</label>
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
<style>
  @import "../../assets/css/media.css";
  @import "../../assets/css/reset.css";
  @import "../../assets/css/style.css";
</style>
