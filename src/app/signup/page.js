import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Signup(){
    return(
        <div>
            <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-40">
            <div className="w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-10">Create Account</h1>

        <form className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-1">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-black"
            />
          </div>

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

          <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm">
          <a className="text-pink-600 hover:underline" href="/login">
            Login
          </a>
        </p>
      </div>
        </div>
        <Footer/>
        </div>
    )
}