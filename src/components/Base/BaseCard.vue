<template>
  <div class="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
    <slot name="image">
      <img class="w-full" src="https://picsum.photos/id/1016/384/234" alt="Sunset in the mountains" />
    </slot>
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold text-gray-900"><slot name="title">The Coldest Sunset</slot></div>
      <p class="text-base text-gray-700">
        <slot name="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </slot>
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <slot name="footer">
        <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
        <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
        <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
      </slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
