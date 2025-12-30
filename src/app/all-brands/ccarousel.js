"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Ccarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      navigation={{
        prevEl: ".previousBtn",
        nextEl: ".nextBtn",
      }}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className="relative"
    >
      <SwiperSlide>
        <div className="flex w-full h-[70vh]  lg:h-[80vh] bg-[url('/col.png')]   bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4">
          </div>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="flex w-full h-[70vh]  lg:h-[80vh] bg-[url('/collection.png')]   bg-cover bg-center bg-no-repeat">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white space-y-4">
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
  )
}