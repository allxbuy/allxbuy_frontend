  "use client";
  import React, { useEffect, useState } from "react";
  import HeroCarousel from "./HeroCarousel";
  import HeroFeature from "./HeroFeature";
  import Image from "next/image";
  import Link from "next/link"; // Imported Link for Next.js routing
  import { getHomepageBanners } from "@/services/bannerService";

  const Hero = () => {
 const [bannerData, setBannerData] = useState<any[]>([]);
 const [slideData, setSlideData] = useState<any[]>([]);
  const [error,setError] = useState("");


useEffect(() => {
  const loadBanners = async () => {
    try {
      const data = await getHomepageBanners();

      const sortedBanners = data.data.sideBanners.sort(
        (a: any, b: any) => a.position - b.position
      );

      setBannerData(sortedBanners);

    } catch (err) {
      console.log("Error loading banners:", err);
      setError("something went wrong while loading banners");
    }
  };

  loadBanners();
}, []);
{console.log("bannerData", )}



    return (
      <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">

          
            {/* Main Carousel Area */}
            <div className="w-full lg:w-2/3 xl:max-w-[757px]">
              <div className="relative z-1 h-full rounded-2xl bg-white shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md">
                {/* */}
                <Image
                  src="/images/hero/hero-bg.png"
                  alt="hero bg shapes"
                  className="absolute right-0 bottom-0 -z-1 opacity-80"
                  width={534}
                  height={520}
                />
                <HeroCarousel />
              </div>
            </div>

            {/* Side Promo Cards Area */}
            <div className="w-full lg:w-1/3 xl:max-w-[393px]">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-5 h-full">
                
                {/* Promo Card 1 */}
                <div className="group relative w-full flex-1 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-center border border-transparent hover:border-blue-100">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider text-white bg-red-500 rounded-full">
                        {bannerData[0]?.label || "Sale"}
                        </span>
                        <h2 className="max-w-[140px] font-semibold text-slate-900 text-lg leading-tight mb-4 transition-colors duration-200 group-hover:text-blue-600">
                          <Link href="#">
                          {bannerData[0]?.title || ""}
                          </Link>
                        </h2>
                      </div>

                      <div>
                        <p className="font-medium text-slate-400 text-xs mb-1 uppercase tracking-wider">
                          Limited Time
                        </p>
                        <div className="flex items-center gap-2.5">
                          <span className="font-bold text-xl text-red-500">
                          {bannerData[0]?.price ? `$${bannerData[0].price}` : ""}
                          </span>
                          <span className="font-medium text-sm text-slate-400 line-through">
                        {bannerData[0]?.oldPrice ? `$${bannerData[0].oldPrice}` : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={bannerData[0]?.image || "/images/hero/hero-01.png"}
                        alt={bannerData[0]?.title || "iPhone 14 Plus & 14 Pro Max"}
                        width={123}
                        height={161}
                        className="object-contain drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Promo Card 2 */}
                <div className="group relative w-full flex-1 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-center border border-transparent hover:border-blue-100">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-1 mb-3 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-500 rounded-full">
                          {bannerData[1]?.label || "Featured"}
                        </span>
                        <h2 className="max-w-[140px] font-semibold text-slate-900 text-lg leading-tight mb-4 transition-colors duration-200 group-hover:text-blue-600">
                          <Link href="#">
                            {bannerData[1]?.title || ""}
                          </Link>
                        </h2>
                      </div>

                      <div>
                        <p className="font-medium text-slate-400 text-xs mb-1 uppercase tracking-wider">
                          Limited Time
                        </p>
                        <div className="flex items-center gap-2.5">
                          <span className="font-bold text-xl text-red-500">
                            {bannerData[1]?.price ? `$${bannerData[1].price}` : ""}
                          </span>
                          <span className="font-medium text-sm text-slate-400 line-through">
                            {bannerData[1]?.oldPrice ? `$${bannerData[1].oldPrice}` : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={bannerData[1]?.image || "/images/hero/hero-02.png"}
                        alt={bannerData[1]?.title || "Product"}
                        width={123}
                        height={161}
                        className="object-contain drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="mt-8">
          <HeroFeature />
        </div>
      </section>
    );
  };

  export default Hero;