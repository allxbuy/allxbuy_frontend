"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect } from "react";
import testimonialsData from "./testimonialsData";
import Image from "next/image";
import SingleItem from "./SingleItem";

// Import Swiper styles
import "swiper/css";

const Testimonials = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.init();
    }
  }, []);

  return (
    <section className="overflow-hidden py-16 lg:py-24 bg-slate-50">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          
          {/* Section Header */}
          <div>
            <span className="flex items-center gap-2.5 font-semibold text-blue-600 mb-2 uppercase tracking-wider text-sm">
              <Image
                src="/images/icons/icon-08.svg"
                alt="Testimonial Icon"
                width={17}
                height={17}
                className="opacity-80"
              />
              Testimonials
            </span>
            <h2 className="font-bold text-3xl lg:text-4xl text-slate-900">
              User Feedback
            </h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev} 
              className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-md active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="fill-current w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"/>
              </svg>
            </button>

            <button 
              onClick={handleNext} 
              className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:shadow-md active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="fill-current w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!pb-6" 
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto"> {/* Critical for height matching */}
                <SingleItem testimonial={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;