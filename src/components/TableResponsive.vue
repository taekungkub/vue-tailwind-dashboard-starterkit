<template>
  <div class="p-5 bg-white shadow-lg rounded-lg">
    <table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Company</th>
          <th>City</th>
          <th>Progress</th>
          <th>Created</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in itemsPaginated" :key="client.id">
          <td class="border-b-0 lg:w-6 before:hidden">
            <UserAvatar :username="client.name" class="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
          </td>
          <td data-label="Name">
            {{ client.name }}
          </td>
          <td data-label="Company">
            {{ client.company }}
          </td>
          <td data-label="City">
            {{ client.city }}
          </td>
          <td data-label="Progress" class="lg:w-32">
            <progress class="flex w-2/5 self-center lg:w-full" max="100" :value="client.progress">
              {{ client.progress }}
            </progress>
          </td>
          <td data-label="Created" class="lg:w-1 whitespace-nowrap">
            <small class="text-gray-500 dark:text-slate-400" :title="client.created">{{ client.created }}</small>
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <div class="flex gap-1">
              <button type="button" class="btn btn-sm btn-icon btn-label-primary"><i class="bx bx-show-alt bx-xs"></i></button>

              <button type="button" class="btn btn-sm btn-icon btn-label-danger"><i class="bx bx-trash-alt bx-xs"></i></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
      <div class="flex justify-between">
        <div>
          <BaseButton
            v-for="page in pagesList"
            :key="page"
            :active="page === currentPage"
            :label="page + 1"
            :color="page === currentPage ? 'lightDark' : 'whiteDark'"
            small
            @click="currentPage = page"
          />
        </div>
        <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import ClientJson from "../assets/js/clients.json";
import UserAvatar from "../components/UserAvatar.vue";

const items = ref([]);

const perPage = ref(5);

const currentPage = ref(0);

const itemsPaginated = computed(() => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1)));

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

function getItems() {
  items.value = ClientJson.data;
  console.log(items.value);
}

onMounted(() => {
  getItems();
});
</script>

<style lang="scss" scoped>
table {
  @apply w-full;
}

thead {
  @apply hidden lg:table-header-group;
}

tr {
  @apply max-w-full block relative border-b-4 border-gray-100
      lg:table-row lg:border-b-0 dark:border-slate-800;
}

tr:last-child {
  @apply border-b-0;
}

td:not(:first-child) {
  @apply lg:border-l lg:border-t-0 lg:border-r-0 lg:border-b-0 lg:border-gray-100 lg:dark:border-slate-700;
}

th {
  @apply lg:text-left lg:p-3;
}

td {
  @apply flex justify-between text-right py-3 px-4 align-top border-b border-gray-100
      lg:table-cell lg:text-left lg:p-3 lg:align-middle lg:border-b-0 dark:border-slate-800;
}

td:last-child {
  @apply border-b-0;
}

tbody tr,
tbody tr:nth-child(odd) {
  @apply lg:hover:bg-gray-100 lg:dark:hover:bg-slate-700/70;
}

tbody tr:nth-child(odd) {
  @apply lg:bg-gray-100/50 lg:dark:bg-slate-800/50;
}

td:before {
  content: attr(data-label);
  @apply font-semibold pr-3 text-left lg:hidden;
}
</style>
