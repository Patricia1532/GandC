
"use client";

import { useRef } from "react";

export default function MostPopular() {
  const carouselRef = useRef(null);

  const scrollCarousel = (amount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const products = [
    { img: "/givenchy.jpg",  name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
    { img: "/valentino.png", name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
    { img: "/alexandar.jpg", name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
    { img: "/baccarat.jpg",  name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
    { img: "/pradaaa.jpg",   name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
    { img: "/gucci2.jpg",    name: "Armaf Club De Nuit 105ml", price: "₦45,000" },
  ];

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-semibold mb-6">Most Popular</h2>

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
              <img
                src={p.img}
                alt={p.name}
                className="h-40 w-full object-contain mx-auto"
              />
              <h3 className="mt-4 text-sm font-medium">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.price}</p>
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