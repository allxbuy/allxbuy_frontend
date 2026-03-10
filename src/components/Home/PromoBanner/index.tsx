import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        
        {/* */}
        <div className="group relative z-0 overflow-hidden rounded-2xl bg-[#F5F5F7] py-12 lg:py-16 xl:py-20 px-6 sm:px-10 lg:px-16 mb-8 transition-shadow duration-300 hover:shadow-md">
          
          {/* Text Content (z-10 to stay above image) */}
          <div className="relative z-10 max-w-[550px] w-full pb-48 md:pb-0">
            <span className="block font-semibold text-lg text-slate-800 mb-2 uppercase tracking-wider">
              Apple iPhone 14 Plus
            </span>

            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-5 leading-tight">
              UP TO <span className="text-blue-600">30% OFF</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 max-w-[400px]">
              iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro.
              A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-semibold text-sm text-white bg-blue-600 py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              Buy Now
            </Link>
          </div>

          {/* Absolute Image with Hover Zoom */}
          <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 z-0 w-[200px] sm:w-[240px] md:w-[274px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-2">
            <Image
              src="/images/promo/promo-01.png"
              alt="Apple iPhone 14 Plus promo"
              width={274}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          
          {/* */}
          <div className="group relative z-0 overflow-hidden rounded-2xl bg-[#DBF4F3] py-10 px-6 sm:px-10 transition-shadow duration-300 hover:shadow-md min-h-[300px] flex items-center justify-end">
            
            {/* Absolute Image */}
            <div className="absolute bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-[-20px] sm:left-4 z-0 w-[180px] sm:w-[241px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:translate-x-2">
              <Image
                src="/images/promo/promo-02.png"
                alt="Motorised Treadmill"
                width={241}
                height={241}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-right w-full sm:w-1/2 pb-48 sm:pb-0">
              <span className="block font-semibold text-sm text-slate-700 mb-2 uppercase tracking-wider">
                Motorised Treadmill
              </span>

              <h2 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-3 leading-tight">
                Workout At Home
              </h2>

              <p className="font-bold text-lg text-teal-600 mb-6">
                Flat 20% off
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-semibold text-sm text-white bg-teal-500 py-2.5 px-8 rounded-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-md hover:-translate-y-1"
              >
                Grab Now
              </Link>
            </div>
          </div>

          {/* */}
          <div className="group relative z-0 overflow-hidden rounded-2xl bg-[#FFECE1] py-10 px-6 sm:px-10 transition-shadow duration-300 hover:shadow-md min-h-[300px] flex items-center">
            
            {/* Absolute Image */}
            <div className="absolute bottom-0 right-[-20px] sm:right-4 z-0 w-[150px] sm:w-[200px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-2">
              <Image
                src="/images/promo/promo-03.png"
                alt="Apple Watch Ultra"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 w-full sm:w-2/3 pb-48 sm:pb-0">
              <span className="block font-semibold text-sm text-slate-700 mb-2 uppercase tracking-wider">
                Apple Watch Ultra
              </span>

              <h2 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-3 leading-tight">
                Up to <span className="text-orange-500">40%</span> off
              </h2>

              <p className="text-sm text-slate-600 mb-6 max-w-[240px] leading-relaxed">
                The aerospace-grade titanium case strikes the perfect balance of everything.
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-semibold text-sm text-white bg-orange-500 py-2.5 px-8 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-md hover:-translate-y-1"
              >
                Buy Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;