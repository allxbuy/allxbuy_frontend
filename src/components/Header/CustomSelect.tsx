"use client";
import React, { useState, useEffect, useRef } from "react";

// Define the shape of our options array
interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  
  // Ref for the "click outside" detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false); // Explicitly close on selection
  };

  useEffect(() => {
    // Robust React pattern for closing modals/dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); 

  return (
    <div ref={dropdownRef} className="relative z-50 min-w-[130px] md:min-w-[150px]">
      
      {/* Select Trigger Area */}
      <div
        className="flex items-center justify-between w-full cursor-pointer text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 select-none py-1"
        onClick={toggleDropdown}
      >
        <span className="truncate pr-2">{selectedOption.label}</span>
        
        {/* Animated Chevron Icon */}
        <svg
          className={`fill-current w-4 h-4 text-slate-400 transition-transform duration-300 ease-out flex-shrink-0 ${
            isOpen ? "-rotate-180 text-blue-600" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6921 7.09327C3.91674 6.83119 4.31116 6.80084 4.57324 7.02548L9.99997 11.6768L15.4267 7.02548C15.6888 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74977 16.24 7.97441L10.3829 12.9944C10.1558 13.189 9.84413 13.189 9.61705 12.9944L3.75994 7.97441C3.49786 7.74977 3.46751 7.35535 3.6921 7.09327Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Floating Dropdown Menu */}
      <div
        className={`absolute left-0 top-full mt-4 w-[200px] bg-white rounded-xl shadow-lg border border-slate-100 p-1.5 transition-all duration-200 origin-top-left ${
          isOpen
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-95 -translate-y-2"
        }`}
      >
        <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`block w-full text-left text-sm rounded-lg py-2.5 px-3 mb-0.5 cursor-pointer transition-colors duration-200 last:mb-0 ${
                selectedOption.value === option.value
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CustomSelect;