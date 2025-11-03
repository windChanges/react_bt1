import React from "react";

export const NavigationHeaderComponent = () => {
  return (
    <div className="flex items-center mt-[80px] bg-black h-[70px]">
      <div className="flex items-center justify-between w-[80%] mx-auto text-white line-clamp-">
        <a className="text-3xl">Start Bootstrap</a>
        <nav className="flex items-center justify-between text-2xl list-none gap-5 text-gray-400">
          <li className="text-white cursor-pointer ">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
        </nav>
      </div>
    </div>
  );
};
