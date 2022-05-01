import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupInfo from './components/MeetupInfo';
import MeetupDescription from './components/MeetupDescription';
import MeetupCover from './components/MeetupCover';
import MeetupAgenda from './components/meetup-agenda/MeetupAgenda';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupInfo,
    MeetupDescription,
    MeetupCover,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image"/>
      
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"/>
            <h3>Программа</h3>
            <MeetupAgenda v-if="Object.keys(meetup.agenda).length !== 0" :agenda="meetup.agenda"/>
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
          </div>
        </div>
      </ui-container>
    </div>`,
});
