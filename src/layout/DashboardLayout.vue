<template>
  <div class="flex h-screen">
    <TheSidebar />

    <div class="flex-1 flex flex-col overflow-hidden bg-body">
      <TheHeader />
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="mx-auto px-6 py-2">
          <h1 class="text-3xl leading-tight mb-2">{{ $route.name }}</h1>

          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import TheSidebar from "./TheSidebar.vue";
import TheHeader from "./TheHeader.vue";
</script>
<style scoped></style>
