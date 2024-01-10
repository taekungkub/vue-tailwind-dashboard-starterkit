<template>
  <header class="flex items-center justify-between shadow px-6 py-4 bg-white m-4 rounded-lg">
    <div class="flex items-center">
      <button type="button" class="hidden lg:block">
        <i class="bx bx-left-indent bx-sm" @click="isCollapse = !isCollapse"></i>
      </button>

      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="flex items-end">
      <div class="mr-3">
        <DropdownNotification />
      </div>
      <BaseDropdown left id="test">
        <template #button>
          <div class="text-primary flex items-center">
            <i class="bx bx-user bx-sm mr-2"></i>
            <span>Kieattisak Suparit</span>
          </div>
        </template>
        <BaseDropdownItem>
          <div class="flex items-center">
            <i class="bx bx-user bx-xs mr-3"></i>
            <span>My Profile</span>
          </div>
        </BaseDropdownItem>
        <BaseDropdownItem>
          <div class="flex items-center">
            <i class="bx bx-cog bx-xs mr-3"></i>
            <span>Settings</span>
          </div>
        </BaseDropdownItem>
        <BaseDropdownItem divider>
          <div class="flex items-center">
            <i class="bx bx-power-off bx-xs mr-3"></i>
            <span>Logout</span>
          </div>
        </BaseDropdownItem>
      </BaseDropdown>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import useSidebar from "../hooks/useSidebar";

import DropdownNotification from "../components/DropdownNotification.vue";

const { isOpen, isCollapse } = useSidebar();
</script>

<style scoped>
.nav-item {
  @apply text-[#697a8d] inline-flex;
}
</style>
