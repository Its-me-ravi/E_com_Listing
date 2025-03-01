import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="block border border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105 bg-gray-900"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 sm:h-56 object-cover"
      />

      <div className="p-4 bg-gray-800">
        <p className="text-white font-bold flex items-center">
          ⭐ {product.rating}
        </p>

        <h3 className="text-lg font-bold mt-2 text-white">{product.title}</h3>

        <p className="text-white text-sm mt-1">
          {truncateDescription(product.description, 50)}
        </p>

        <p className="text-xl font-semibold mt-2 text-white">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
