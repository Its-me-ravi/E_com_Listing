import { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedCategory]);

  const categories = ["fragrances", "beauty", "furniture", "groceries"];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          🛍️ Product List
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition font-semibold shadow-md 
                ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
          <button
            className="px-5 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-full font-semibold shadow-md transition"
            onClick={() => setSelectedCategory("")}
          >
            Show All
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
