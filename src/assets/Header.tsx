import { IoNotifications } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="fixed w-full bg-[#faf8f4] shadow-sm flex items-center z-[101] left-0 top-0 h-[56px] md:h-[100px]">
    <div className="flex items-center justify-between w-full max-w-[90%] md:max-w-[85%] mx-auto">
      {/* Branding and Logo */}
      <div className="flex items-center">
        <img src="/src/assets/img/logo-black.svg" alt="Logo" className="md:w-20 w-16" />
        <span className="text-lg font-semibold ml-2"></span>
      </div>
      
      {/* Navbar */}
      <nav className="flex items-center gap-4">
        <ul className="flex gap-7 font-mullish text-lg">
          <li className="text-primary hover:text-red-400 hover:underline cursor-pointer">
            Dashboard
          </li>
          <li className="hover:text-red-400 hover:underline cursor-pointer">My Favorites</li>
          <li className="hover:text-red-400 hover:underline cursor-pointer">Upcoming Events</li>
        </ul>
  
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <IoNotifications size={20} className="text-[#A9A9A9]" />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2"></span>
          </button>
  
          <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-100 rounded-full">
            <RxHamburgerMenu size={20} className="text-black font-bold" />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-base font-semibold">
            S
          </button>
        </div>
  
          <button className="p-2">
            <GrLanguage />
          </button>
        </div>
      </nav>
    </div>
  </header>
  
    
  );
};

export default Header;
