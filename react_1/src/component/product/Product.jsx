import React from "react";

export const Product = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-20 mb-15 w-[80%] mx-auto gap-15">
        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-layer-group text-white text-2xl"></i>
          </div>

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            Fresh new layout
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>

        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-cloud-arrow-down text-white text-2xl"></i>
          </div>

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            Free to download
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            As always, Start Bootstrap has a powerful collectin of free
            templates.
          </p>
        </div>

        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-message text-white text-2xl"></i>
          </div>
          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            Jumbotron hero header
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            The heroic part of this template is the jumbotron hero header!
          </p>
        </div>

        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-b text-white text-2xl"></i>
          </div>

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            Feature boxes
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            We've created some custom feature boxes using Bootstrap icons!
          </p>
        </div>

        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-code text-white text-2xl"></i>
          </div>

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            Simple clean code
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            We keep our dependencies up to date and squash bugs as they come!
          </p>
        </div>

        <div className="relative bg-gray-100 pt-12 pb-12 px-10 text-center rounded-lg shadow-sm max-w-md mx-auto">
          {/* Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center shadow-md">
            <i className="fa-solid fa-circle-check text-white text-2xl"></i>
          </div>

          {/* Tiêu đề */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-4">
            A name you trust
          </h3>

          {/* Mô tả */}
          <p className="text-gray-600">
            Start Bootstrap has been the leader in free Bootstrap templates
            since 2013!
          </p>
        </div>
      </div>
    </>
  );
};
