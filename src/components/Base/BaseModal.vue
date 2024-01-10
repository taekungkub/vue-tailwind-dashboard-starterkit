<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut animate__delay-0.7s"
  >
    <div
      v-show="isModal || value"
      @click="close()"
      class="fixed inset-0 w-full h-full"
      style="z-index: 1000 !important; background-color: rgba(0, 0, 0, 0.5)"
    ></div>
  </transition>

  <transition name="custom-classes-transition" enter-active-class="animate__bounceIn" leave-active-class="animate__bounceOut">
    <div class="modal-mask p-2" v-if="isModal || value">
      <div class="modal-wrapper" @click="clickOutSide()">
        <div :class="['modal-container', maxWidth, { active: isActive }]" @click.stop>
          <div class="flex justify-between items-center py-4 px-6 rounded-t border-b" v-if="!hideHeader">
            <h3 class="text-gray300 lg:text-xl">
              <slot name="header"> {{ title }} </slot>
            </h3>
            <button
              type="button"
              class="hover:bg-gray-100 rounded-lg text-gray-400 p-1 ml-auto inline-flex items-center"
              @click="close()"
              v-if="!noClose && !loading"
            >
              <i class="bx bx-x bx-sm"></i>
            </button>
          </div>

          <div class="flex items-center justify-end pr-5 pt-5" v-if="hideHeader">
            <button
              type="button"
              class="hover:bg-gray-100 rounded-lg text-gray-400 p-1 ml-auto inline-flex items-center"
              @click="close()"
              v-if="!noClose && !loading"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <slot name="content"> </slot>
          </div>

          <div class="modal-footer" v-if="withConfirm">
            <div class="flex justify-end items-center px-4 py-3 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600" v-if="withConfirm">
              <button type="button" class="btn btn-label-secondary" @click="close()">Close</button>
              <button type="button" class="btn btn-primary ml-2" @click="confirm()">Confirm</button>
            </div>
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, toRefs, computed } from "@vue/reactivity";

const props = defineProps({
  width: {
    type: String,
    default: "xs",
    validator: (value) => ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
  },
  title: {
    type: String,
  },
  noClose: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  static: {
    type: Boolean,
    default: false,
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  withConfirm: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
});
const isActive = ref(false);
const isModal = ref(false);
const emit = defineEmits(["update:modelValue", "close", "confirm"]);

// options v-model
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

function open() {
  isModal.value = true;
  document.body.classList.add("modal-open");
}

function close() {
  isModal.value = false;
  value.value = false;
  document.body.classList.remove("modal-open");
  emit("close");
}

function confirm() {
  isModal.value = false;
  value.value = false;
  document.body.classList.remove("modal-open");
  emit("confirm");
}

const maxWidth = computed(() => {
  switch (props.width) {
    case "xs":
      return "max-w-lg";
    case "sm":
      return "max-w-xl";
    case "md":
      return "max-w-2xl";
    case "lg":
      return "max-w-3xl";
    case "full":
      return "max-w-full";
  }
});
function clickOutSide() {
  if (props.loading || props.static) {
    if (!isActive.value) {
      isActive.value = true;
    }

    setTimeout(() => {
      isActive.value = false;
    }, 300);
    return;
  }

  close();
}

defineExpose({
  open,
  close,
});
</script>
<style scoped>
.modal-mask {
  position: fixed !important;
  z-index: 1000 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  border-radius: 2px;
  transition: all 0.3s ease;
  border-radius: 13px;

  @apply bg-white border border-gray-300;
}

.modal-container.active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.modal-header-custom {
  padding: 20px 15px 10px 15px;
  @apply border-b border-b-gray-300 dark:border-b-gray-700;
}

.modal-header-custom span {
  font-size: 20px;
  font-weight: 600 !important;
}

/* .modal-body {
  margin: 10px 0;
}

.modal-body {
  position: relative;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  width: 100%;
  will-change: transform;
  direction: ltr;
  word-break: break-all;
} */

.modal-body {
  /* word-break: break-all; */
  margin: 20px 20px;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}

.modal-footer {
  /* border-top: 1px solid red; */
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-close-modal {
  border-radius: 100%;
  padding: 5px;
  @apply bg-gray-900;
}

.btn-close-modal svg {
  @apply fill-gray-700;
}
</style>
