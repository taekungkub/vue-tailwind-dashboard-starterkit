<template>
  <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="overlay"></div>

  <div
    ref="SidebarRef"
    class="sidebar"
    :class="[isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in', isCollapse === true ? 'sidebar-collapse ' : '']"
    @mouseover="addClass"
    @mouseleave="removeClass"
  >
    <div class="inner-sidebar">
      <ul class="menu-list">
        <router-link class="menu-item" :class="[$route.name === 'Dashboard' ? activeClass : '']" to="/">
          <div class="flex items-center">
            <span><i class="bx bx-home-alt"></i></span>
            <span class="ml-4 title">Dashboard </span>
          </div>
        </router-link>

        <div
          class="menu-item justify-between items-center"
          :class="[$route.fullPath.split('/')[1] === 'components' ? activeClass : '']"
          to="/buttons"
          @click="isDropdownComponent = !isDropdownComponent"
        >
          <div class="flex items-center">
            <span><i class="bx bx-joystick-button"></i> </span>
            <span class="mx-4 title">Components</span>
          </div>
          <div class="arrow">
            <i class="bx bx-chevron-right" v-if="!isDropdownComponent"></i>
            <i class="bx bx-chevron-down" v-if="isDropdownComponent"></i>
          </div>
        </div>

        <ul class="sub-item" v-if="isDropdownComponent">
          <div>
            <router-link class="menu-sub" :class="[$route.name === 'Accordion' ? activeClass : '']" to="/components/accordion">
              <div class="flex items-center">
                <span class="ml-11">Accordion</span>
              </div>
            </router-link>
            <router-link class="menu-sub" :class="[$route.name === 'Buttons' ? activeClass : '']" to="/components/buttons">
              <div class="flex items-center">
                <span class="ml-11">Buttons</span>
              </div>
            </router-link>
            <router-link class="menu-sub" :class="[$route.name === 'Modals' ? activeClass : '']" to="/components/modals">
              <div class="flex items-center">
                <span class="ml-11">Modals</span>
              </div>
            </router-link>
            <router-link class="menu-sub" :class="[$route.name === 'Tables' ? activeClass : '']" to="/components/tables">
              <div class="flex items-center">
                <span class="ml-11">Tables</span>
              </div>
            </router-link>
          </div>
        </ul>

        <router-link class="menu-item" :class="[$route.name === 'Login' ? activeClass : '']" to="/login">
          <div class="flex items-center">
            <span><i class="bx bx-lock-open-alt"></i></span>
            <span class="ml-4 title">Login </span>
          </div>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === '404' ? activeClass : '']" to="/404">
          <div class="flex items-center">
            <span><i class="bx bx-error-alt"></i></span>
            <span class="ml-4 title">404 </span>
          </div>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === 'Form' ? activeClass : '']" to="/form">
          <div class="flex items-center">
            <span><i class="bx bx-edit"></i></span>
            <span class="ml-4 title">Form </span>
          </div>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === 'Profile' ? activeClass : '']" to="/profile">
          <div class="flex items-center">
            <span><i class="bx bx-user"></i></span>
            <span class="ml-4 title">Profile </span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script setup>
import useSidebar from "../hooks/useSidebar";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const { isOpen, isCollapse } = useSidebar();
const activeClass = ref("active");
const isDropdownComponent = ref(false);
const isDropdownAuth = ref(false);

const route = useRoute();
const SidebarRef = ref("");
const activeCollapse = ref(false);

watch(isCollapse, (newVal) => {
  // if (newVal) activeCollapse.value = true;
  // else if (!newVal) activeCollapse.value = false;
});

function addClass(e) {
  if (isCollapse.value) {
    SidebarRef.value.classList.remove("sidebar-collapse");
    activeCollapse.value = true;
  }
}
function removeClass(e) {
  if (isCollapse.value) {
    SidebarRef.value.classList.add("sidebar-collapse");
    activeCollapse.value = false;
  }
}

watch(route, (newVal) => {
  isDropdownComponent.value = route.fullPath.split("/")[1] === "components" ? true : false;
});
</script>

<style scoped>
.sidebar {
  z-index: 4;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @apply fixed inset-y-0 left-0 z-30   overflow-y-auto transition-all duration-300 transform  lg:translate-x-0 lg:static lg:inset-0;
}

.sidebar.sidebar-collapse {
  @apply lg:w-[85px];
}

.sidebar .inner-sidebar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  height: 100%;
  padding: 16px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @apply bg-white;
}

.menu-list {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0;
  overflow: auto;
  margin-top: 4px;
  padding: 0 16px;
}

.menu-item {
  margin: 4px 0;
  border-radius: 8px;
  padding: 10px 16px;
  @apply flex  transform transition duration-200 text-base cursor-pointer text-center text-[#697a8d];
}

.menu-item i {
  @apply text-xl;
}

.menu-item:hover {
  @apply bg-gray-300 bg-opacity-25;
}

.menu-item.active {
  @apply bg-opacity-25 text-primary bg-[rgba(105,108,255,.16)];
}

li {
  list-style: none;
}

.menu-sub {
  margin: 4px 0;
  border-radius: 8px;
  padding: 10px 10px;
  @apply flex transform transition duration-200 text-base cursor-pointer text-center text-[#697a8d];
}

.menu-sub i {
  @apply text-xl;
}

.menu-sub:hover {
  @apply bg-gray-300 bg-opacity-25;
}

.menu-sub.active {
  @apply text-primary;
}

.overlay {
  @apply fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden;
}

.sidebar.sidebar-collapse .menu-item .title,
.sidebar.sidebar-collapse .menu-item .arrow,
.sidebar.sidebar-collapse .sub-item {
  @apply lg:hidden;
}
</style>
