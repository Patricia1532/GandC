export default function ByBrands(){
    return(
        <section className="w-full py-12">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-semibold">Shop By Brands</h2>
    <a href="#" className="text-sm text-gray-600 hover:underline">All Brands</a>
  </div>

  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img  src="/yveslogo.png"  alt="YSL" className=" w-fullmax-h-12 object-contain"
      />
    </div>
 <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img src="/versacelogo.png" alt="Essenza" className="w-full max-h-12 object-contain"
      />
    </div>

    <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img src="/valogo2.png"  alt="Fenty"  className=" w-full max-h-12 object-cover"
      />
    </div>

    <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img  src="/gucci3.png" alt="Amouage" className=" w-full max-h-12 object-contain"
      />
    </div>

    <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img  src="/diorlogo3.png" alt="Tom Ford" className="w-full max-h-12 object-contain "
      />
    </div>

    <div className="border rounded-lg h-28 flex items-center justify-center hover:shadow-sm transition">
      <img src="/burberrylogo.jpg" alt="Clinique" className="max-h-12 object-contain"
      />
    </div>

  </div>
</section>
    )
}