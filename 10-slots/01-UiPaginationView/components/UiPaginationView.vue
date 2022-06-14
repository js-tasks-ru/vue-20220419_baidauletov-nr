<template>
  <div class="pagination-container">
    <template v-for="item in pageItems">
      <slot :item="item" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },
    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    pageItems() {
      return this.items.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
  },
};
</script>

<style></style>
