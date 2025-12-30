"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import products from "../data/products";
import { useCart } from "../context/cart-context";


export default function Masculine() {
     const masculineProducts= products.filter(product=>product.category==="masculine")
     const{addToCart}=useCart()
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="px-6 mt-30 md:px-12 lg:px-20 py-10">
        <h1 className="text-3xl font-semibold mb-4">Masculine Perfume</h1>

        <p className="text-gray-600 mb-6">Showing 1-12 of 50 products</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {masculineProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>

              <div className="mb-4">
                <span className="text-lg font-semibold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <button onClick={()=>addToCart(product)}className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
