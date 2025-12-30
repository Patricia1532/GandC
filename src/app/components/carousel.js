"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <div className="relative">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      navigation={{
        prevEl: ".previousBtn",
        nextEl: ".nextBtn",
      }}
      autoplay={{ delay: 4000 }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className="relative"
    >
      <SwiperSlide>
        <div className="flex w-full h-[70vh]  lg:h-[80vh] bg-[url('/dior56.png')]   bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 ml-12">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Miss Dior
            </h1>

            <p className="text-xl font-medium drop-shadow-md">
              Eau de Parfum — Strong, Elegant & Timeless
            </p>

            <button className="mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full   h-[50vh] lg:h-[80vh] bg-[url('/zara54.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 ml-12">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              lait de coco
            </h1>

            <p className="text-xl font-medium drop-shadow-md">
              Eau de Parfum — Strong, Elegant & Timeless
            </p>

            <button className="mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full h-[50vh] lg:h-[80vh] bg-[url('/blue4.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 ml-12">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              dior savage
            </h1>

            <p className="text-xl font-medium drop-shadow-md">
              Eau de Parfum — Strong, Elegant & Timeless
            </p>

            <button className="mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full  h-[50vh] lg:h-[80vh] bg-[url('/prada22.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4 ml-12">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              valentino
            </h1>

            <p className="text-xl font-medium drop-shadow-md">
              Eau de Parfum — Strong, Elegant & Timeless
            </p>

            <button className="mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold shadow-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className="w-full flex justify-between items-center absolute left-0 top-1/2 z-80">
<button  className="flex text-blue items-center text-3xl px-4 hover:bg-pink-300 previousBtn"><img src="/reall.png"></img></button>
<button className="flex text-blue items-center text-3xl px-4 hover:bg-pink-300 nextBtn"><img src="/realr.png"></img></button>
    </div>
    </div>
  );
}
