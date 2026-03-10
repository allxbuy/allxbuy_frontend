import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";

interface SingleItemProps {
  item: Category;
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {
  return (
    <Link 
      href={`/category/${item.title.toLowerCase().replace(/ /g, '-')}`} 
      className="group flex flex-col items-center justify-center w-full"
    >
      {/* Category Image Bubble */}
      <div className="w-[130px] h-[130px] bg-slate-50 rounded-full flex items-center justify-center mb-5 transition-all duration-300 ease-out border border-transparent group-hover:bg-blue-50 group-hover:shadow-md group-hover:border-blue-100">
        <Image 
          src={item.img} 
          alt={item.title} 
          width={82} 
          height={62} 
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      {/* Category Title */}
      <div className="flex justify-center">
        <h3 className="inline-block font-semibold text-center text-slate-800 bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size,color] duration-300 group-hover:bg-[length:100%_2px] group-hover:text-blue-600">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default SingleItem;