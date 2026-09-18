import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

function Contact() {
  const contactInfo = [
    { icon: "fa-envelope", title: "Email Address", value: "rockteamsupport@gmail.com" },
    { icon: "fa-location-dot", title: "Location", value: " ballia Uttar Pradesh, India" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white dark:bg-[#0b0f0d] text-gray-900 dark:text-white transition-colors duration-300">

        {/* HERO */}
        <section className="px-4 sm:px-8 pt-10 sm:pt-24 pb-12 ">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl  bg-white dark:bg-zinc-900 border-gray-200 dark:border-white/10  p-7 sm:p-12 md:p-16">
              <span className="inline-block bg-green-200 dark:bg-white text-emerald-600 dark:text-black font-semibold px-4 py-2 rounded-full text-xs sm:text-sm">CONTACT US</span>

              <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Let's build something
                <span className="block">great together.</span>
              </h1>

              <p className="mt-6 max-w-2xl dark:text-white text-gray-500 text-[16px]  text-base  leading-8">
                Have a question, feedback, or business inquiry? Feel free to reach out to us. We would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION */}
        <section className="px-4 sm:px-8 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Get in touch</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-7">
                If you have any questions, feedback, or business inquiries, feel free to contact us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="p-6 shadow-md hover:shadow-xl transition duration-300 sm:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 hover:border-emerald-400 dark:hover:border-emerald-500 hover:-translate-y-1 ">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 dark:bg-zinc-900 flex items-center justify-center">
                    <i className={`fa-solid ${item.icon} text-emerald-500 dark:text-emerald-400 text-xl`}></i>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-10 text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center">
                <i className="fa-solid fa-comments text-emerald-500 dark:text-emerald-400 text-xl"></i>
              </div>

              <h2 className="mt-5 text-2xl sm:text-3xl font-bold">We're here to help.</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-400">Have something in mind? Let's talk about it.</p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;