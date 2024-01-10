<template>
	<div class="flex flex-col mt-8">
		<div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 z-10">
			<div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 sm:rounded-lg dark:border-gray-700">
				<table class="min-w-full">
					<thead>
						<tr>
							<th
								class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200"
								v-for="item in field"
								:key="item.key"
							>
								<div v-if="item.label" class="flex items-center">
									<div class="mr-2">
										{{ item.label }}
									</div>
									<span v-if="item.sort === true">
										<img :src="getImageSort(item.key)" @click="handleSort(item.key)" />
									</span>
								</div>
							</th>
						</tr>
					</thead>

					<tbody class="bg-white dark:bg-gray-600">
						<tr v-for="(item, index) in paginatedArray" :key="index" :class="[index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : '']">
							<slot name="default" :row="item">
								<td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap dark:border-gray-700" v-for="(u, i) in field" :key="i">
									<div class="text-sm font-medium leading-5 text-gray-900 mr-1 dark:text-gray-200">
										{{ item[field[i].key] }}
									</div>
								</td>
							</slot>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div class="flex justify-center mt-3">
		<pagination-component v-model="currentPage" :totalPages="totalPages"></pagination-component>
	</div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import BaseDropdown from './BaseDropdown.vue';
import BaseDropdownItem from './BaseDropdownItem.vue';

import usePagination from '../../hooks/usePagination';
import PaginationComponent from '../../components/PaginationComponent.vue';

const props = defineProps({
	tableParameter: Array,
	field: Array,
	sortBy: String,
});

let currentSort = ref(props.sortBy);
let sortBy = ref('asc');
function handleSort(sortName) {
	currentSort.value = sortName;

	if (sortName === currentSort.value) {
		sortBy.value = sortBy.value === 'asc' ? 'desc' : 'asc';
	}
	currentSort.value = sortName;
}

const tableFilter = computed(() => {
	if (currentSort.value && sortBy.value) {
		return props.tableParameter.sort((a, b) => {
			let modifier = 1;

			let valueA = a[currentSort.value];
			let valueB = b[currentSort.value];

			if (typeof valueA === 'string') {
				if (sortBy.value === 'desc') modifier = -1;
				if (valueA.toLowerCase() < valueB.toLowerCase()) return -1 * modifier;
				if (valueA.toLowerCase() > valueB.toLowerCase()) return 1 * modifier;
				return 0;
			} else if (typeof valueA === 'number') {
				if (sortBy.value === 'desc') modifier = -1;
				if (valueA < valueB) return -1 * modifier;
				if (valueA > valueB) return 1 * modifier;
				return 0;
			}
		});
	}

	return props.tableParameter;
});

const statusSort = computed(() => {});

function getImageSort(sortName) {
	const imagePath = (image) => {
		return new URL(`../../assets/Icons/${image}`, import.meta.url).href;
	};

	if (sortName === currentSort.value && sortBy.value === 'asc') {
		return imagePath('sort-up.svg');
	} else if (sortName === currentSort.value && sortBy.value === 'desc') {
		return imagePath('sort-down.svg');
	} else {
		return imagePath('sort.svg');
	}
}
const currentPage = ref(1);
const { paginatedArray, totalPages } = usePagination(10, tableFilter, currentPage);

console.log(paginatedArray.value);
</script>

<style lang="scss" scoped></style>
