<template>
  <div class="toasts">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="toast"
      :class="{ toast_success: item.type === 'success', toast_error: item.type === 'error' }"
    >
      <ui-icon class="toast__icon" :icon="item.icon" />
      <span>{{ item.message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  data() {
    return {
      toastId: 0,
      list: [],
      timer: 5000,
    };
  },

  methods: {
    success(message) {
      this.createToast({ message, type: 'success' });
    },

    error(message) {
      this.createToast({ message, type: 'error' });
    },

    createToast({ message, type }) {
      let toast = {};

      toast.message = message;
      toast.type = type;
      toast.icon = this.toastIcon(type);
      toast.id = this.toastId++;

      this.list.push(toast);
      this.toastDestroy(toast.id);
    },

    toastIcon(type) {
      return type === 'success' ? 'check-circle' : 'alert-circle';
    },

    toastDestroy(id) {
      setTimeout(() => (this.list = this.list.filter((item) => item.id !== id)), this.timer);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
