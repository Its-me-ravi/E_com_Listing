import { useParams, useNavigate } from "react-router-dom";
import useProductStore from "../store/useProductStore";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProductStore();
  const [quantity, setQuantity] = useState(1);

  // Find the selected product from Zustand store
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found, show loading or error
  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-gray-300">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto p-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          ← Back
        </button>

        <div className="w-full flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-200">{product.title}</h2>
          <p className="text-xl text-yellow-400 font-semibold">
            ${product.price}
          </p>
          <p className="mt-2 text-gray-400">{product.description}</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} left
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-300 mb-2">Gallery</h3>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Product"
                className="w-24 h-24 object-cover rounded-md border border-gray-600"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center mt-6">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
          >
            -
          </button>
          <span className="mx-6 text-lg font-semibold text-gray-300">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
          >
            +
          </button>
        </div>

        <button
          className="mt-6 bg-blue-500 text-white px-4 py-3 rounded-md w-full text-lg font-semibold hover:bg-blue-600 transition"
          onClick={() => toast.success("Added to cart")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
