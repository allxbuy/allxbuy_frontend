"use client";
import React, { useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call/subscription success
      setIsSubscribed(true);
      setEmail("");
      
      // Reset button state after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="overflow-hidden py-10 lg:py-16">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        
        {/* Main Wrapper with rounded-2xl to match premium feel */}
        <div className="relative z-0 overflow-hidden rounded-2xl shadow-md">
          
          {/* Background Image (Using 'fill' and 'object-cover' for perfect scaling) */}
          <div className="absolute inset-0 -z-20 w-full h-full">
            <Image
              src="/images/shapes/newsletter-bg.jpg"
              alt="Newsletter background"
              fill
              className="object-cover"
              priority // Prioritize loading since it's a large background element
            />
          </div>
          
          {/* Optional Dark Overlay to guarantee text readability regardless of the bg image */}
          <div className="absolute inset-0 -z-10 bg-slate-900/60 mix-blend-multiply"></div>

          {/* User's original gradient class (kept in case you have custom CSS tied to it) */}
          <div className="absolute -z-10 max-w-[523px] max-h-[243px] w-full h-full right-0 top-0 bg-gradient-1 opacity-50"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 xl:px-16 py-12 lg:py-16">
            
            {/* Text Content */}
            <div className="max-w-[491px] w-full">
              <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Don&apos;t Miss Out On Latest Trends & Offers
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Register to receive news about the latest offers, exclusive deals, and discount codes.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-[477px] w-full">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 relative">
                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-white/95 border border-transparent outline-none rounded-lg text-slate-800 placeholder:text-slate-400 py-3.5 px-5 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`inline-flex items-center justify-center py-3.5 px-8 font-semibold text-white rounded-lg transition-all duration-300 shadow-sm active:scale-95 ${
                      isSubscribed 
                        ? "bg-emerald-500 hover:bg-emerald-600 cursor-default" 
                        : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    {isSubscribed ? "Subscribed! ✓" : "Subscribe"}
                  </button>
                  
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;