export default function MostPopular(){
    return(
        <section className="w-full py-10">
     <h2 className="text-2xl font-semibold mb-6">
    Most Popular
     </h2>
     <div className="relative">
   <button 
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      onClick="scrollCarousel('popularCarousel', -300)"
    >
    </button>
    <div id="popularCarousel" className="flex gap-6 overflow-x-auto scrollbar-hide px-2">
<div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/givenchy.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>
    <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/valentino.png" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>
  
  <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/alexandar.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

      <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/baccarat.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

    <div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/pradaaa.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

<div className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow">
        <img src="/gucci2.jpg" className="h-40 w-full object-contain mx-auto" />
        <h3 className="mt-4 text-sm font-medium">Armaf Club De Nuit 105ml</h3>
        <p className="text-gray-500 text-sm">₦45,000</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
          Add to Cart
        </button>
      </div>

    </div>

    <button 
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      onClick="scrollCarousel('popularCarousel', 300)"
    >
      &#10095;
    </button>
     </div>
        </section>
    )
}