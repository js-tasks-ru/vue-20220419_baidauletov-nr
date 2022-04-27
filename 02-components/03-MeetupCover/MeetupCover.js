import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: String,
    image: String,
  },
  computed: {
    bgCover() {
      return this.image ? `--bg-url: url(${this.image})` : 'https://course-vue.javascript.ru/api/images/2';
    },
  },

  template: `
    <div class="meetup-cover" :style="bgCover">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
