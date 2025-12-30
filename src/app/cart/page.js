"use client"

import Footer from "../components/footer"
import Navbar from "../components/navbar"
import CartDrawer from "./cart-drawer"


export default function Search(){
    return(
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <div className="flex-grow">
    </div>
    <Footer/>
    </div>
    )
}