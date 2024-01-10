import { computed } from "vue";

export default function usePagination(itemPerPage = 2, items, currentPage) {
  const rowsPerPage = itemPerPage;

  const paginatedArray = computed(() => {
    var index = currentPage.value * rowsPerPage - rowsPerPage;

    return items.value.slice(index, index + rowsPerPage);
  });

  const totalPages = computed(() => Math.ceil((items.value.length || 0) / rowsPerPage));

  return {
    paginatedArray,
    totalPages,
  };
}
