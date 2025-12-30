"use client"

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useCart } from "../context/cart-context";
import products from "../data/products";
import Ccarousel from "./ccarousel";

export default function AllBrands(){
    const{addToCart}=useCart()
    function filterByLetter(start, end){
        return products.filter(product=>{

           return product.name.toLowerCase()[0]>= start.toLowerCase()&& product.name.toLowerCase()[0]<= end.toLowerCase
        })
    }
    const AtoH=filterByLetter("a","h")
    const ItoP= filterByLetter("i","p")
    const QtoZ= filterByLetter("q","z")
    return(
<div className="bg-pink-50">
    <Navbar/>
    <Ccarousel/>
    <div className="mx-20">
    <section className="w-full py-10">
     <h2 className="text-2xl font-semibold mb-6 text-gray-600">
    BRANDS A-H
     </h2>
     <div className="relative">
   <button 
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
    >
    </button>
    <div id="popularCarousel" className="flex gap-6 overflow-x-auto scrollbar-hide px-2 items-center">
{AtoH.map((product) => (
            <div
              key={product.id}
              className="border h-100 p-4 rounded-lg hover:shadow-md transition "
            >
              <div className="w-60 flex justify-center">
                <img
                src={product.image}
                alt={product.name}
                className="w-50 h-50 object-contain mb-4"
              />
              </div>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>

              <div className="mb-4">
                <span className="text-lg font-semibold">₦{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₦{product.oldPrice}
                  </span>
                )}
              </div>
              <button onClick={()=>addToCart(product)} className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}

    </div>

    <button 
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
    >
      &#10095;
    </button>
     </div>
        </section>




<section className="w-full py-10">
     <h2 className="text-2xl font-semibold mb-6 text-gray-600">
    BRANDS I-P
     </h2>
     <div className="relative">
   <button 
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
    >
    </button>
    <div id="popularCarousel" className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
{ItoP.map((product) => (
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
                <span className="text-lg font-semibold">₦{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₦{product.oldPrice}
                  </span>
                )}
              </div>
              <button onClick={()=>addToCart(product)} className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}
    </div>

    <button 
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
    >
      &#10095;
    </button>
     </div>
        </section>

        <section className="w-full py-10">
     <h2 className="text-2xl font-semibold mb-6 text-gray-600">
    BRANDS Q-Z
     </h2>
     <div className="relative">
   <button 
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      onClick="scrollCarousel('popularCarousel', -300)"
    >
    </button>
    <div id="popularCarousel" className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
{QtoZ.map((product) => (
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
                <span className="text-lg font-semibold">₦{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₦{product.oldPrice}
                  </span>
                )}
              </div>
              <button onClick={()=>addToCart(product)} className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}
{/* <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/alexandar.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div> */}
    </div>

    <button 
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
    >
      &#10095;
    </button>
     </div>
        </section>
       
         </div>

<Footer/>
</div>
    )
}