import React from "react";
import useFilterAndSort from "../hooks/useFilterAndSort";

const ItemList = ({ items, searchTerm, sortOption, removeItem }) => {
  const sortedAndFilteredItems = useFilterAndSort(
    items,
    searchTerm,
    sortOption
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredItems.length > 0 ? (
            sortedAndFilteredItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="p-3 text-gray-800">{item.name}</td>
                <td className="p-3 text-gray-800">{item.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-3 text-center text-gray-500">
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;