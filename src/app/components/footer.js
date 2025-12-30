export default function Footer(){
    return(
   <footer className="bg-black text-gray-300 py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <h2 className="text-xl font-semibold text-white">G&C PERFUMES</h2>
      <p className="mt-4 text-sm leading-relaxed">
        Crafting luxury fragrances with exceptional quality. Discover a world of scents curated for elegance and style.
      </p>

      <div className="flex items-center gap-4 mt-6">
       
        <a href="#" className="text-gray-300 hover:text-white text-xl">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-xl">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-white">New Arrivals</a></li>
        <li><a href="" className="hover:text-white">Most Popular</a></li>
        <li><a href="/feminine" className="hover:text-white">Feminine</a></li>
        <li><a href="/masculine" className="hover:text-white">Masculine</a></li>
        <li><a href="#" className="hover:text-white">On Sales</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-white">Lagos, Nigeria</a></li>
        <li><a href="#" className="hover:text-white">Call Us: 0902378643</a></li>
          <li><a href="#" className="hover:underline">Email: info@gandc.gmail</a></li>
      </ul>
    </div>

  
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
      <p className="text-sm mb-4">Subscribe to receive exclusive offers and fragrance tips.</p>

      <input type="email" 
        placeholder="Your email address"
        className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded mb-3 outline-none"
      />

      <button className="w-full bg-pink-600 hover:bg-pink-500 text-black font-medium py-3 rounded flex items-center justify-center gap-2">
        <i className="fa-regular fa-envelope"></i>
        Subscribe
      </button>
    </div>
  </div>

 
  <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
    <p>© 2025 G&C Perfumes. All rights reserved.</p>

    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms of Service</a>
    </div>
  </div>
</footer>
    )
}