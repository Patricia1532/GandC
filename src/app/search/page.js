"use client"

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useSearch } from "../context/search.context"

export default function Search(){
    const{searchResults}= useSearch()
    return(
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="mt-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          { searchResults.length !==0? searchResults.map ((product) => (
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
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          )):(<div className="h-[100vh] flex justify-center items-center"><p className="text-4xl text-black">no search result</p></div>)}

        </div>
    <Footer/>
    </div>
    )
}
