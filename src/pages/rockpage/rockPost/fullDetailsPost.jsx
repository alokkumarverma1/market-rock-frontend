import React from "react";
import Navbar from "../../others/navbar";
import { useLocation } from "react-router-dom";
import Footer from "../../others/footer";

function FullDetailsPost() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50  dark:bg-black dark:text-white  pt-24 px-4 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Profile Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-semibold text-lg ">
                Rock Community
              </h2>
              <p className="text-sm text-gray-500">
                {data.date}
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold  leading-tight">
            {data.heading}
          </h1>

          {/* Divider */}
          <div className="h-[1px] bg-gray-300 mb-8"></div>

          {/* Details */}
          <p className="mt-8 text-lg leading-8  whitespace-pre-liney">
            {data.details}
          </p>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FullDetailsPost;