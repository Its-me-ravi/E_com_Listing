import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-black p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">E-Commerce</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => navigate("/")}
            className="hover:text-white text-white bg-gray-900 transition"
          >
            Home
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white bg-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 shadow-md transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/");
          }}
          className="hover:text-gray-300 transition"
        >
          Home
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
