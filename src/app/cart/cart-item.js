export default function CartItem({
image, 
    name, 
    price, 
    initialPrice,
     remove,
     quantity,
     incrementQuantity,
     decrementQuantity,


}){
    return(
       <div className="w-full bg-white rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-center gap-6">
  <div className="flex items-center gap-4 flex-1">
    <img src={image} className="w-16 h-20 object-contain rounded-md"
    />
    <div>
      <h3 className="font-medium text-gray-900">
        {name}<br />
        <span className="text-sm text-gray-500">For Women EDP 100ML</span>
      </h3>
{initialPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₦{initialPrice}
                  </span>
                )}
      <p className="mt-2 font-semibold text-gray-900">₦{price}</p>
    </div>
  </div>
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center border border-gray-300 rounded-md">
      <button onClick={decrementQuantity} className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100">-</button>
      <span className="px-4 py-1">{quantity}</span>
      <button onClick={incrementQuantity} className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100">+</button>
    </div>
    <button onClick={remove} className="text-lg text-pink-400 hover:text-red-500">
        Delete
    </button>
  </div>
  {/* <div className="bg-gray-50 rounded-lg px-6 py-4 text-center min-w-[140px]">
    <p className="text-sm text-gray-500">{}</p>
    <p className="font-semibold text-gray-900 mt-1">₦{initialPrice}</p>
  </div> */}

</div>
    )
}