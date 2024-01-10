<template>
  <div class="flex flex-col">
    <div class="py-2 overflow-x-auto">
      <div class="inline-block min-w-full overflow-hidden align-middle shadow bg-white rounded-lg">
        <table class="table-auto min-w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="cursor-pointer">
                <div class="flex justify-between items-center">
                  <span> </span>
                </div>
              </th>

              <th class="cursor-pointer" @click="handleSort('name')">
                <div class="flex justify-between items-center">
                  <span>Name </span>
                  <div class="flex flex-col">
                    <i class="bx bx-chevron-up bx-xs text-gray-300" :class="[currentSort === 'name' && currentSortDir === 'asc' ? activeClass : '']"></i>
                    <i class="bx bx-chevron-down bx-xs text-gray-300" :class="[currentSort === 'name' && currentSortDir === 'desc' ? activeClass : '']"></i>
                  </div>
                </div>
              </th>
              <th class="cursor-pointer" @click="handleSort('email')">
                <div class="flex justify-between items-center">
                  <span>Email </span>
                  <div class="flex flex-col">
                    <i class="bx bx-chevron-up bx-xs text-gray-300" :class="[currentSort === 'email' && currentSortDir === 'asc' ? activeClass : '']"></i>
                    <i class="bx bx-chevron-down bx-xs text-gray-300" :class="[currentSort === 'email' && currentSortDir === 'desc' ? activeClass : '']"></i>
                  </div>
                </div>
              </th>
              <th class="">Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in paginatedArray" :key="index">
              <td><input type="checkbox" class="form-checkbox" :id="item" :name="item" v-model="checkedUser" /></td>
              <td>{{ item.name }}</td>
              <td>
                <div>{{ item.email }}</div>
              </td>
              <td>
                <div>{{ item.phone }}</div>
              </td>
              <td>
                <span class="bg-green-500 text-gray-50 p-1 px-4 rounded-3xl" v-if="item.tx_status === 'Success'">{{ item.tx_status }}</span>
                <span class="badge badge-label-success" v-else>Active</span>
              </td>
              <td>
                <div class="flex">
                  <button type="button" class="btn btn-sm btn-icon btn-label-primary"><i class="bx bx-show-alt bx-xs"></i></button>
                  <button type="button" class="btn btn-sm btn-icon btn-label-warning mx-2"><i class="bx bxs-edit bx-xs"></i></button>

                  <button type="button" class="btn btn-sm btn-icon btn-label-danger"><i class="bx bx-trash-alt bx-xs"></i></button>
                  <base-dropdown>
                    <template #button>
                      <button type="button" class="btn btn-sm btn-icon btn-label-secondary ml-2">
                        <i class="bx bx-dots-vertical-rounded bx-xs"></i>
                      </button>
                    </template>
                    <base-dropdown-item>Report</base-dropdown-item>
                    <base-dropdown-item>Download</base-dropdown-item>
                    <base-dropdown-item>Export</base-dropdown-item>
                  </base-dropdown>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="px-6 flex justify-end items-center">
          <pagination-component :totalPages="totalPages" v-model="currentPage"></pagination-component>
        </div>
      </div>
    </div>
  </div>

  <div class="text-base text-center mt-8 text-gray-300" v-if="items.length === 0">No result to display</div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import usersList from "../assets/js/users.js";
import useSort from "../hooks/useSortTable";
import usePagination from "../hooks/usePagination";

const items = ref("");
const activeClass = ref("active");
const { updateSort } = useSort();
const currentPage = ref(1);
const { paginatedArray, totalPages } = usePagination(5, items, currentPage);

let currentSort = ref("");
let currentSortDir = ref("asc");

const checkedUser = ref([]);

function handleSort(s) {
  if (s === currentSort.value) {
    currentSortDir.value = currentSortDir.value === "asc" ? "desc" : "asc";
  }
  currentSort.value = s;
  console.log(s);
  updateSort(items.value, currentSort.value, currentSortDir.value);
}

onMounted(() => {
  items.value = usersList;
  updateSort(items.value, currentSort.value, currentSortDir.value);
});
</script>
<style scoped>
table thead th {
  @apply px-6 py-4 text-xs font-medium leading-4 tracking-wider text-left text-gray300 uppercase;
}
table tbody td {
  @apply px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray300;
}

table tbody tr {
  @apply border-b border-gray-200;
}

.active {
  @apply text-gray-900;
}
</style>
