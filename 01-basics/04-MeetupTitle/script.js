import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const app = createApp({
  data() {
    return {
      meetupTitle: '',
      meetupId: '',
    };
  },
  watch: {
    async meetupId(newVal) {
      this.meetupTitle = await fetchMeetupById(newVal);
    },
  },
});

app.mount('#app');
