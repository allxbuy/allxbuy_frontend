"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

// Moved slide data to an array for cleaner, DRY code
const slideData = [
  {
    discount: "30%",
    title: "True Wireless Noise Cancelling Headphone",
    description: "Experience premium sound with our latest noise-cancelling technology. Perfect for commutes and focus time.",
    image: "/images/hero/hero-01.png",
    link: "#", // Replace with actual product link
  },
  {
    discount: "20%",
    title: "Ultra-Thin Smart Watch Series X",
    description: "Track your fitness, stay connected, and look stylish with our slimmest smartwatch yet.",
    image: "/images/hero/hero-01.png", // Replace with a different image
    link: "#",
  },
];

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000, // Slowed down slightly for better reading time
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet !bg-slate-300 !opacity-50 !w-2.5 !h-2.5 !transition-all duration-300",
        bulletActiveClass: "!bg-blue-600 !opacity-100 !w-8 !rounded-full",
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel h-full w-full"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between h-full p-6 sm:p-10 lg:p-14">
            
            {/* Text Content */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center max-w-[420px]">
              
              {/* Discount Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block font-bold text-4xl sm:text-5xl text-blue-600">
                  {slide.discount}
                </span>
                <span className="block text-slate-800 text-sm font-semibold uppercase tracking-wider leading-tight">
                  Sale <br /> Off
                </span>
              </div>

              {/* Title */}
              <h1 className="font-bold text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">
                <Link href={slide.link} className="hover:text-blue-600 transition-colors">
                  {slide.title}
                </Link>
              </h1>

              {/* Description */}
              <p className="text-slate-500 mb-8 leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href={slide.link}
                  className="inline-flex items-center justify-center font-semibold text-white text-sm rounded-lg bg-slate-900 py-3.5 px-8 transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full sm:w-1/2 flex justify-center items-center mb-8 sm:mb-0">
              <div className="relative w-full max-w-[350px] aspect-square flex items-center justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={351}
                  height={358}
                  className="object-contain drop-shadow-2xl"
                  priority={index === 0} // Optimize loading for the first slide
                />
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;