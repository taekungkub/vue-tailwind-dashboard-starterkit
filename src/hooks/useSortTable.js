export default function useSortTable() {
  const updateSort = (list, currentSort, currentSortDir) => {
    return list.sort((a, b) => {
      let modifier = 1;

      let valueA = a[currentSort];
      let valueB = b[currentSort];

      if (typeof valueA === "string") {
        if (currentSortDir === "desc") modifier = -1;
        if (valueA.toLowerCase() < valueB.toLowerCase()) return -1 * modifier;
        if (valueA.toLowerCase() > valueB.toLowerCase()) return 1 * modifier;
        return 0;
      } else if (typeof valueA === "number") {
        if (currentSortDir === "desc") modifier = -1;
        if (valueA < valueB) return -1 * modifier;
        if (valueA > valueB) return 1 * modifier;
        return 0;
      }
    });
  };

  return {
    updateSort,
  };
}
