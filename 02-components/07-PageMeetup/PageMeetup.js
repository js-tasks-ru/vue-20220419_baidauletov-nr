import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from './../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
    },
  },

  data() {
    return {
      meetup: null,
      isLoading: false,
      error: '',
    };
  },

  watch: {
    async meetupId(value) {
      this.fetchData(value);
    },
  },

  async mounted() {
    this.fetchData(this.meetupId);
  },

  methods: {
    fetchMeetupById,
    async fetchData(value) {
      this.meetup = null;
      this.error = '';
      this.isLoading = true;
      try {
        this.meetup = await this.fetchMeetupById(value);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->  
      <MeetupView :meetup="meetup" v-if="meetup && !error && !isLoading" />

      <ui-container v-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{this.error}}</ui-alert>
      </ui-container>
    </div>`,
});
