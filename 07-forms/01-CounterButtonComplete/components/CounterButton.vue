<template>
  <button @click="onClick">{{ localCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update'],

  data() {
    return {
      localCount: this.count,
    };
  },

  watch: {
    localCount(newVal) {
      this.$emit('update:count', newVal);
    },
    count(newVal) {
      this.localCount = newVal;
    },
  },

  methods: {
    onClick() {
      this.localCount = this.localCount + 1;
    },
  },
};
</script>
