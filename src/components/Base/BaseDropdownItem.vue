<template>
  <hr class="light" v-if="divider" />

  <a class="block text-sm hover:bg-gray-200 hover:bg-opacity-25 text-left text-gray300 divide-y divide-gray-100 cursor-pointer">
    <div class="px-4 py-3">
      <slot></slot>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  divider: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
