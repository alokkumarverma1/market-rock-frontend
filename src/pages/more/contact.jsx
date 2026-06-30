import React from "react";
import Navbar from "../others/navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-16 px-4 sm:px-10">

        {/* HERO */}
        <div className="max-w-7xl mx-auto shape2 rounded-3xl p-6 sm:p-10 mb-16 sm:mb-20">

          <span className="bg-white/90 font-semibold text-green-400 px-4 py-2 rounded-full text-xs sm:text-sm ">
            Contact Us
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl text-white font-bold mt-5 sm:mt-6 leading-tight">
            Let's build something
            <span className="block sm:inline"> together.</span>
          </h1>

          <p className="text-white/90 mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-7 sm:leading-8">
            Have questions, feedback, or business inquiries? Our team is
            always ready to help and connect with you.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* LEFT INFO */}
          <div className="space-y-8 sm:space-y-10">

            {[
              {
                icon: "fa-envelope",
                title: "Email Address",
                value: "support@marketrock.com",
              },
              {
                icon: "fa-phone",
                title: "Phone Number",
                value: "+91 XXXXX XXXXX",
              },
              {
                icon: "fa-location-dot",
                title: "Location",
                value: "Uttar Pradesh, India",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 sm:gap-5">

                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <i className={`fa-solid ${item.icon} text-green-400 text-lg sm:text-xl`}></i>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Send a message
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">

              <input
                type="text"
                placeholder="First Name"
                className="bg-green-50 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-green-300"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-green-50 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:ring-2 focus:ring-green-300"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-green-50 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 mb-4 sm:mb-5 outline-none focus:ring-2 focus:ring-green-300"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-green-50 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 mb-4 sm:mb-5 outline-none focus:ring-2 focus:ring-green-300"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-green-50 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 resize-none outline-none focus:ring-2 focus:ring-green-300"
            />

            <button className="mt-6 sm:mt-8 w-full sm:w-auto shape text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:scale-[1.02] transition">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;