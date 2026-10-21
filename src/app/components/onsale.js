
import { useRef } from "react";

export default function OnSale() {
  const carouselRef = useRef(null);

  const scrollCarousel = (amount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const products = [
    { img: "/replicaa.jpg", name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
    { img: "/zara1.jpg",    name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
    { img: "/opium.jpg",    name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
    { img: "/versace.jpg",  name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
    { img: "/boss2.jpg",    name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
    { img: "/cherry.jpg",   name: "AFNAN 9 PM Elixir Parfum Intense 100ML", price: "₦41,000.00", oldPrice: "₦63,000.00" },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-semibold mb-6">On Sale</h2>

      <div className="relative">
        <button
          type="button"
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          onClick={() => scrollCarousel(-300)}
        >
          &#10094;
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2"
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="min-w-[250px] snap-start bg-white p-4 rounded-lg shadow"
            >
              <img src={p.img} alt={p.name} className="h-40 w-full object-contain mx-auto" />

              <h3 className="mt-4 text-sm font-medium">{p.name}</h3>

              <div className="mt-2">
                <p className="text-lg font-semibold">{p.price}</p>
                <p className="text-sm text-gray-400 line-through">{p.oldPrice}</p>
              </div>

              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
          onClick={() => scrollCarousel(300)}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}