import React, { useState, useEffect } from "react";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Explicitly close on selection
  };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".custom-select")) {
        setIsOpen(false); // Force close to prevent state toggling bugs
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Added isOpen dependency so the event listener always has fresh state

  return (
    <div className="dropdown-content custom-select relative" style={{ width: "200px" }}>
      <div
        className={`select-selected whitespace-nowrap cursor-pointer ${
          isOpen ? "select-arrow-active" : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedOption.label}
      </div>
      <div className={`select-items absolute w-full bg-white z-50 shadow-md ${isOpen ? "" : "hidden"}`}>
        {/* Changed slice(1, -1) to map to prevent missing categories */}
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`select-item cursor-pointer p-2 hover:bg-gray-100 ${
              selectedOption === option ? "same-as-selected font-bold" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;