import React, { useState, useLayoutEffect, useRef } from "react";
import { useItems } from "../context/ItemContext";
import ItemList from "./ItemList";

const ItemManager = () => {
  const { state: items, dispatch } = useItems();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  const searchInputRef = useRef();

  console.log('ren')

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const addItem = () => {
    if (name && description) {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: Date.now(), name, description },
      });
      setName("");
      setDescription("");
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold mb-4 text-gray-700">Item Manager</h1>
  
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        ref={searchInputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  
    <div className="mb-4 space-y-4 md:space-y-0 md:flex md:space-x-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={addItem}
        className="p-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Item
      </button>
    </div>
  
    <div className="mb-4">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="name">Sort by Name</option>
        <option value="description">Sort by Description</option>
      </select>
    </div>
  
    <ItemList
      items={items}
      searchTerm={searchTerm}
      sortOption={sortOption}
      removeItem={removeItem}
    />
  </div>
    );
};

export default ItemManager;