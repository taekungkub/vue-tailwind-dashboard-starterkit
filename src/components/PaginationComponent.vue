<template>
  <div class="pagination-container" aria-label="row pagination">
    <ul v-if="totalPages >= 1" class="pagination">
      <li
        class="page-item"
        :class="{
          disabled: currentPage === 1,
        }"
        aria-label="go to next page"
        @click="goFirstPage()"
      >
        <div class="page-link" v-if="skip">First Page</div>
      </li>
      <li
        class="page-item"
        aria-label="go to previous page"
        @click="previous()"
        :class="{
          disabled: currentPage === 1,
        }"
      >
        <span class="page-link">Previous</span>
      </li>
      <li v-for="index in showPages" :key="index" :aria-label="'go to page ' + index" class="page-item" @click="setCurrentPage(index)">
        <div
          class="page-link"
          :class="{
            'active-page': currentPage === index,
          }"
        >
          {{ index }}
        </div>
      </li>
      <li
        class="page-item"
        :class="{
          disabled: currentPage === totalPages || !totalPages,
        }"
        aria-label="go to next page"
        @click="next()"
      >
        <div class="page-link">Next</div>
      </li>

      <li
        class="page-item"
        :class="{
          disabled: currentPage === totalPages || !totalPages,
        }"
        aria-label="go to next page"
        @click="goLastPage()"
        v-if="skip"
      >
        <div class="page-link">Last Page</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  totalPages: {
    required: true,
    type: Number,
  },
  modelValue: {
    required: true,
    type: Number,
  },
  skip: {
    type: Boolean,
  },
  showMaxPage: {
    type: Number,
    default: 10,
  },
});

const { totalPages, modelValue: currentPage } = toRefs(props);

const showPages = computed(() => {
  const numShown = Math.min(props.showMaxPage, totalPages.value);
  let first = currentPage.value - Math.floor(numShown / 2);
  first = Math.max(first, 1);
  first = Math.min(first, totalPages.value - numShown + 1);
  return [...Array(numShown)].map((k, i) => i + first);
});

const emit = defineEmits(["update:modelValue"]);

const setCurrentPage = (number: Number) => {
  emit("update:modelValue", number);
};

const previous = () => {
  if (currentPage.value === 1) return;
  emit("update:modelValue", currentPage.value - 1);
};

const next = () => {
  if (currentPage.value >= totalPages.value) return;
  emit("update:modelValue", currentPage.value + 1);
};

const goFirstPage = () => {
  if (currentPage.value === 1) return;
  emit("update:modelValue", 1);
};

const goLastPage = () => {
  if (currentPage.value >= totalPages.value) return;
  emit("update:modelValue", totalPages.value);
};
</script>

<style scoped lang="scss">
.pagination-container {
  display: inline-block;
}

.pagination {
  margin: 0px;
  padding: 10px;
  display: inline-block;
  gap: 5px;
  align-items: center;
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  word-wrap: break-word;
  align-content: center;
  border-radius: 14px;
}

.page-item {
  display: inline-block;
  align-content: center;

  cursor: pointer;
  margin-bottom: 0px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.page-link {
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
  &:hover:not(.active-page):not(.disabled .page-link) {
    @apply bg-primary border-none text-white;
  }
  @apply bg-body text-gray-400 m-1 rounded-xl;
}

.active-page {
  color: white !important;
  &:hover {
    border: none;
  }
  @apply bg-primary;
}

.disabled {
  .page-link {
    @apply bg-body;
  }
  cursor: not-allowed;
}
</style>
