export default function OnSale(){
    return(
        <section className="w-full py-10">
  <h2 className="text-2xl font-semibold mb-6">On Sale</h2>

  <div className="relative">  
    <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      onClick="scrollCarousel('onSaleCarousel', -300)"
    >
      &#10094;
    </button>
    <div id="onSaleCarousel" className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2"
    >
      <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/replicaa.jpg" className="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

 <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/zara1.jpg" className="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

<div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/opium.jpg" className="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

      <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/versace.jpg" className="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

      <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/boss2.jpg" className="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

      <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/cherry.jpg" class="h-40 w-full object-contain mx-auto" />
        
        <h3 className="mt-4 text-sm font-medium">
          AFNAN 9 PM Elixir Parfum Intense 100ML
        </h3>

        <div className="mt-2"> <p className="text-lg font-semibold">₦41,000.00</p>
          <p className="text-sm text-gray-400 line-through">₦63,000.00</p>
        </div>

        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>
      



    </div>

   
    <button 
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      onClick="scrollCarousel('onSaleCarousel', 300)"
    >
      &#10095;
    </button>
  </div>
</section>
    )
}