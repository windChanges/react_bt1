import React from "react";

export const HeaderComponent = () => {
  return (
    <div className=" fixed top-0 left-0 w-full flex justify-between items-center pt-4 pb-4 pr-5 pl-5 text-[#9795b9] border-b-2 border-red-500 h-[80px] z-50 bg-white">
      <div className="flex items-center hover:bg-gray-200 pt-1.5 pr-3 pb-1.5 pl-3 rounded cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
        <p>Overview Page</p>
      </div>

      <div className="flex gap-6 text-[#9795b9] items-center">
        <div className="flex items-center justify-center w-15 h-15 rounded-full bg-gray-300 hover:bg-gray-300 cursor-pointer">
          <i className="fa-solid fa-laptop"></i>
        </div>
        <div className="flex items-center justify-center w-15 h-15 rounded-full hover:bg-gray-200 cursor-pointer">
          <i className="fa-solid fa-tablet-screen-button"></i>
        </div>
        <div className="flex items-center justify-center w-15 h-15 rounded-full hover:bg-gray-200 cursor-pointer">
          <i className="fa-solid fa-tablet-button"></i>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hover:bg-gray-200 p-2.5 rounded-lg">
          <i className="fa-brands fa-github text-black text-xl"></i>
        </div>
        <button className="flex items-center gap-1 text-lg text-[#dc392d] bg-red-100 pt-1.5 pb-1.5 pr-3 pl-3 cursor-pointer rounded-sm">
          <i className="fa-solid fa-download"></i>
          Free Download
        </button>
        <div className=" flex items-center justify-center text-xs w-10 h-10 rounded-full hover:bg-gray-200 ">
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
};
