import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  selectedProduct: null,

  fetchProducts: async () => {
    const response = await axios.get("https://dummyjson.com/products");
    set({ products: response.data.products });
  },

  selectProduct: (product) => set({ selectedProduct: product }),
}));

export default useProductStore;
