import { useMemo } from "react";

const useFilterAndSort = (items, searchTerm, sortOption) => {
  return useMemo(() => {
    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortOption !== "name") {
        return a.description.localeCompare(b.description);
      }
      return a.name.localeCompare(b.name);
    });

    return sortedItems;
  }, [items, searchTerm, sortOption]);
};

export default useFilterAndSort;
