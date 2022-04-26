import { createApp } from './vendor/vue.esm-browser.js';

const App = createApp({
  data() {
    return {
      operand1: 0,
      operand2: 0,
      picked: 'sum',
    };
  },
  computed: {
    result: function () {
      if (this.picked === 'sum') {
        return this.operand1 + this.operand2;
      }
      if (this.picked === 'subtract') {
        return this.operand1 - this.operand2;
      }
      if (this.picked === 'multiply') {
        return this.operand1 * this.operand2;
      }
      if (this.picked === 'divide') {
        return this.operand1 / this.operand2;
      }
      return this.operand1 + this.operand2;
    },
  },
});

App.mount('#app');
