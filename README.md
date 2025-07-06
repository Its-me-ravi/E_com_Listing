E-Commerce Product Listing (React + Vite)

This is a simple e-commerce frontend built using React (Vite) and TailwindCSS. It fetches product data from a dummy API and displays products in a structured layout. Users can view product details and adjust quantity.

<a href="https://e-com-listing.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
    Live Demo
  </button>
</a>

🚀 Features

Product Listing Page (/product)

Fetch and display product categories & products from API

Click on a product to open the details page

Product Details Page (/products/:id)

Show full product details

Increase/decrease quantity

Navigate back to product list

There is also a filter option where you can filter products by category.

State Management with Zustand/Redux

Styled with TailwindCSS

🏗 Tech Stack

Frontend: React (Vite), TailwindCSS

State Management: Zustand/Redux

Routing: React Router

API: DummyJSON

🛠 Installation

Clone the repository:

git clone https://github.com/Its-me-ravi/E_com_Listing.git
cd ecommerce-vite

Install dependencies:

npm install
# or
yarn install

Start the development server:

npm run dev
# or
yarn dev

📌 API Integration

Products are fetched from https://dummyjson.com/products.



📱 Screens

Product List Page: Displays a list of products with rating, title, description (trimmed), and price.

Product Details Page: Shows full product details with quantity controls.
