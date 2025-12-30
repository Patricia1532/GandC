"use client"

import { useCart } from "../context/cart-context"
import CartItem from "./cart-item"

export default function CartDrawer({close}){
    const {cartItems, increment, decrement, removeFromCart, totalPrice}= useCart()
    return(
        <div className="h-screen right-0 z-50 lg:w-[30vw] md:w-[50vw] w-[60vw] flex flex-col fixed top-0 text-black bg-[#f5f5f3]">
      <div className="flex justify-center text-x1 items-center w-full border-b px-4 py-2">
        <p className="text-lg font-semibold">Shopping Cart</p>
        <button className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-xl" onClick={close}>X</button>
      </div>
      <div>
        {cartItems.map(item=> (
            <CartItem key={item.id}
            name={item.name} 
price={item.price} 
initialPrice={item.initialPrice} 
image={item.image}
remove={()=> removeFromCart(item.id)}
    incrementQuantity={()=>increment(item.id)}
decrementQuantity={()=>decrement(item.id)}
quantity={item.quantity}        
            
            />
        ))}
      </div>
      <div className="flex items-center justify-between text-gray-700 mb-6 p-8">
        <span className="font-medium">Subtotal</span>
        <span className="font-medium">{totalPrice}</span>
      </div>
      <p className="text-center text-sm text-gray-500 mb-4">
        Have an account?
      </p>
      <button className=" bg-pink-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-pink-500 transition mx-8">
        Checkout
      </button>
      <p className="text-center mt-4 text-sm text-gray-700 cursor-pointer">
        Go to cart
      </p>
    </div>
    )
}