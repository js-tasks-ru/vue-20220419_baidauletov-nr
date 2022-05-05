import { defineComponent } from './../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
    },
    place: {
      type: String,
    },
    date: {
      type: Number,
      default: Number(new Date()),
    },
  },
  computed: {
    dateFormat() {
      return new Date(this.date).toLocaleString(navigator.language, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    },
    isoTime() {
      return new Date(this.date).toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="isoTime">{{ dateFormat }}</time>
      </li>
    </ul>`,
});
