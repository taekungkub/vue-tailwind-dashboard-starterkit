<template>
  <div class="relative">
    <button ref="dropdownButton" @click="toggle()">
      {{ title }}

      <slot name="button"></slot>
    </button>
    <div v-show="isOpen" @click="isOpen = false" class="fixed inset-0 z-10 w-full h-full"></div>
    <transition>
      <div
        ref="dropdownMenu"
        v-show="isOpen"
        class="dropdown-menu absolute z-50 bg-white scroll-custom"
        :class="[
          { 'right-0': left === true },
          { 'left-0': right === true },
          { 'dropdown-center': center === true },
          { 'rounded-3xl': rounded },
          { 'rounded-md': !rounded },
          { 'w-44': !isComponent },
        ]"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<!-- class="dropdown-menu absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl" -->

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};

const props = defineProps({
  title: String | Number,
  variant: {
    type: String,
    default: "primary",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  left: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  isComponent: {
    type: Boolean,
    default: false,
  },
  sm: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
});

defineExpose({
  close,
});

import { createPopper } from "@popperjs/core";

const dropdownButton = ref("");
const dropdownMenu = ref("");
const popperInstance = ref(null);

function toggle() {
  isOpen.value = !isOpen.value;
  popperInstance.value.update();
}
onMounted(() => {
  popperInstance.value = createPopper(dropdownButton.value, dropdownMenu.value, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });
});
onBeforeUnmount(() => {
  if (popperInstance.value) {
    popperInstance.value.destroy();
    popperInstance.value = null;
  }
});
</script>

<style scoped>
.dropdown-menu {
  box-shadow: 0 0.25rem 1rem rgb(161 172 184 / 45%);
}
</style>
