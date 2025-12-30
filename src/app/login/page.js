"use client"

import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Login(){
    return(
        <div>
            <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-10">Customer Login</h1>

        <form className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-1">Email address*</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-pink-600  text-white px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
              Login
            </button>

            <a className="text-pink-600 text-sm hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </form>

        <p className="mt-6 text-sm">
          New Customer?
          <a className="text-pink-600 hover:underline" href="/signup">
            Sign up
          </a>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
    )
}