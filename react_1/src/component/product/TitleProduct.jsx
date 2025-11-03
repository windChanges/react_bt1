import React from "react";

export const TitleProduct = () => {
  return (
    <>
      <div className="bg-[#f8f9fa] w-[80%] mx-auto mt-15 rounded-lg text-center p-25">
        <h1 className="font-bold text-[55px] mt-5">A warm welcome!</h1>
        <p className="text-3xl">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="text-2xl text-white pt-4 pb-4 bg-blue-500 hover:bg-blue-800 cursor-pointer pl-6 pr-6 mt-5 rounded-xl">Call to action</button>
      </div>
    </>
  );
};
