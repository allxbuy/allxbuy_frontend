import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Reuse the shared Menu type so there's only a single definition
import { Menu } from "@/types/Menu";

interface DropdownProps {
  menuItem: Menu;
  stickyMenu?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ menuItem, stickyMenu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  return (
    <li
      // Toggles on click for touch devices, but relies on 'group-hover' for mouse users
      onClick={() => setDropdownToggler(!dropdownToggler)}
      className="group relative"
    >
      {/* Animated Bottom Border */}
      <span 
        className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 rounded-b-sm transition-all duration-300 z-10 ${
          pathUrl.includes(menuItem.title.toLowerCase()) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>

      {/* Dropdown Trigger */}
      <div
        className={`flex items-center gap-1.5 capitalize cursor-pointer font-medium transition-colors duration-200 hover:text-blue-600 ${
          stickyMenu ? "py-4" : "py-5"
        } ${pathUrl.includes(menuItem.title.toLowerCase()) ? "text-blue-600" : "text-slate-700"}`}
      >
        {menuItem.title}
        
        {/* Chevron Icon with rotate animation */}
        <svg
          className="fill-current w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* */}
      <ul
        className={`absolute left-0 top-full mt-1 w-[220px] bg-white rounded-xl shadow-lg border border-slate-100 p-2 z-50 transition-all duration-300 ease-out transform ${
          dropdownToggler ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
        }`}
      >
        {menuItem.submenu?.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path}
              className={`block w-full text-sm rounded-lg py-2.5 px-4 transition-colors duration-200 ${
                pathUrl === item.path 
                  ? "text-blue-600 bg-blue-50 font-medium" 
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;