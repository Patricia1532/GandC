"use client";
import { useState } from "react";
import PopUp from "../search/pop-Up";
import CartDrawer from "../cart/cart-drawer";
import { useCart } from "../context/cart-context";

export default function Navbar() {
  const [popUp, setPopUp] = useState(false);
  function ShowPopUp() {
    setPopUp(true);
  }
  function HidePopUp() {
    setPopUp(false);
  }

  const [cartDrawer, setCartDrawer] = useState(false);
  function ShowCartDrawer(){
    setCartDrawer(true);
  }
  function HideCartDrawer(){
    setCartDrawer(false);
  }
 
  const{cartItems}= useCart();
  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7x1 mx-auto px-6 py-4">
        <div className="backdrop-blur-x1 bg-white border border-white/20 rounded-full px-6 py-3 flex itens-center justify-between shadow-lg">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/MAIN PERFUME LOGO 2.jpg" className="h-10 w-10" />
          </div>
          <ul className="md:flex items-center space-x-6 font-medium text-orange hidden">
            <li className="relative group">
              <a
                href="/"
                className="hover:underline px-4 py-2 relative z-10 text-pink-500"
              >
                HOME
              </a>
              <span className="absolute inset-0 rounded-full ground-hover:opacity-100 transition"></span>
            </li>
            <li className="relative group">
              <a href="#" className="px-4 py-2 relative z-10 text-pink-500">
                ABOUT US
              </a>
              <span className="absolute inset-0 rounded-full ground-hover:opacity-100 transition"></span>
            </li>
            <li className="relative group">
              <a
                href="/all-brands"
                className=" hover:underline px-4 py-2 relative z-10 text-pink-500"
              >
                ALL BRANDS
              </a>
              <span className="hidden py-8 group-hover:flex justify-center item-center absolute inset-0  ground-hover:opacity-100 transition">
                <div className="bg-white h-30 w-max p-4">
                  <p>dropdown</p>
                </div>
              </span>
            </li>
            <li className="relative group">
              <a
                href="/feminine"
                className="hover:underline px-4 py-2 relative z-10 text-pink-500"
              >
                FEMININE
              </a>
              <span className="absolute inset-0 rounded-full ground-hover:opacity-100 transition"></span>
            </li>
            <li className="relative group">
              <a
                href="/masculine"
                className="hover:underline px-4 py-2 relative z-10 text-pink-500"
              >
                MASCULINE
              </a>
              <span className="absolute inset-0 rounded-full ground-hover:opacity-100 transition"></span>
            </li>
          </ul>
          <div className="items-center flex gap-2">
            
              <button className="relative" onClick={ShowPopUp}>
                <img className="w-6" src="/search2.png" />
              </button>
            
            <a href="/login">
              <button className="relative">
                <img className="w-6 hidden lg:block" src="/profile2.png" />
              </button>
            </a>
            {/* <a href="/cart"> */}
              <button className="relative" onClick={ShowCartDrawer}>
                <img className="w-6 " src="/cart2.png" />
              </button>
              <p className="">{cartItems.length}</p>
            {/* </a> */}
          </div>
        </div>
      </div>
      {popUp && <PopUp close={HidePopUp} />}
      {cartDrawer && <CartDrawer close={HideCartDrawer}/>}
    </nav>
  );
}
