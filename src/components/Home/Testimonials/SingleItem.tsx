import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-slate-100 m-1">
      
      {/* 5-Star Rating (Dynamic Array) */}
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src="/images/icons/icon-star.svg"
            alt="Star rating"
            width={16}
            height={16}
          />
        ))}
      </div>

      {/* Review Text (flex-grow ensures it takes up available space) */}
      <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow">
        "{testimonial.review}"
      </p>

      {/* Author Info (mt-auto pins this to the bottom) */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
        
        {/* Author Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>

        {/* Author Details */}
        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">
            {testimonial.authorName}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            {testimonial.authorRole}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SingleItem;