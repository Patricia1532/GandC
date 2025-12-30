"use client";
import { useState, createContext, useContext, useEffect } from "react";
import products from "../data/products";

const SearchContext = createContext();
export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const savedResults = localStorage.getItem("search");
    if (savedResults) {
      return setSearch(savedResults);
    }
  }, []);
  function getSearchText(e) {
    const text = e.target.value;
    setSearch(text);
    localStorage.setItem("search", text);
  }
  const searchResults =
    search.trim() === ""
      ? []
      : products.filter((product) => {
          return product.name.toLowerCase().includes(search.toLowerCase());
        });
  return (
    <SearchContext.Provider value={{ getSearchText, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
}
export function useSearch() {
  return useContext(SearchContext);
}
