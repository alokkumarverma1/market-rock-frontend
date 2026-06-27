import React from "react";
import Navbar from "../../others/navbar";
import { useLocation } from "react-router-dom";
import Footer from "../../others/footer";

function FullDetailsPost() {
  const location = useLocation();

  const { heading, details, date } = location.state || {};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100  pt-24 px-4 pb-20">
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
              <h2 className="font-semibold text-lg text-gray-900">
                Rock Community
              </h2>
              <p className="text-sm text-gray-500">
                {date}
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {heading}
          </h1>

          {/* Divider */}
          <div className="h-[1px] bg-gray-300 mb-8"></div>

          {/* Details */}
          <p className="text-[15px] sm:text-[20px] leading-7 text-gray-700 whitespace-pre-line">
            {details}
          </p>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FullDetailsPost;