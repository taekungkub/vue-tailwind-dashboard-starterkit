<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "default";
const { currentRoute } = useRouter();
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`);
</script>

<template>
  <component :is="layout"> </component>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Public Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray300;
}
</style>
