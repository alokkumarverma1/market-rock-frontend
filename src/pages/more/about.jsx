import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

function About() {
  const features = [
    { icon: "fa-chart-line", title: "Market Insights", text: "Explore market data, trends, and useful insights to understand the stock market better." },
    { icon: "fa-book-open", title: "Learn & Grow", text: "Learn stock market concepts through simple and easy-to-understand resources." },
    { icon: "fa-robot", title: "AI Assistance", text: "Get intelligent assistance with Rock AI to explore stocks and understand market information." },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white dark:bg-[#0b0f0d] text-gray-900 dark:text-white transition-colors duration-300">

        {/* HERO */}
        <section className="px-4 sm:px-8 pt-10 sm:pt-24 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-zinc-900 p-7 sm:p-12 md:p-16">

              <span className="inline-block bg-green-200 dark:bg-white text-emerald-600 dark:text-black font-semibold px-4 py-2 rounded-full text-xs sm:text-sm">
                ABOUT MARKET ROCK
              </span>

              <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Understand the market.
                <span className="block">Make better decisions.</span>
              </h1>

              <p className="mt-6 max-w-3xl dark:text-white text-gray-500 text-base leading-8">
                Market Rock is a modern stock market platform designed to help users explore market information, understand trends, learn investing concepts, and make more informed decisions.
              </p>

            </div>
          </div>
        </section>


        {/* ABOUT MARKET ROCK */}
        <section className="px-4 sm:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold text-sm">
                ABOUT MARKET ROCK
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                Making the stock market easier to understand.
              </h2>

              <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">
                The stock market can feel complicated, especially when you are just getting started. Market Rock brings useful market information, educational resources, and analytical tools together in one simple platform.
              </p>

              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-8">
                Our goal is to make market information easier to understand so that users can learn, research, and explore stocks without unnecessary complexity.
              </p>
            </div>


            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 shadow-md hover:shadow-xl transition duration-300 p-7 sm:p-10">

              <div className="h-16 w-16 rounded-2xl bg-emerald-100 dark:bg-zinc-800 flex items-center justify-center">
                <i className="fa-solid fa-chart-pie text-emerald-500 dark:text-emerald-400 text-2xl"></i>
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
                To create a simple and intelligent platform where anyone can learn about the stock market, explore market trends, and make informed decisions.
              </p>

            </div>

          </div>
        </section>


        {/* FEATURES */}
        <section className="px-4 sm:px-8 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-12">

              <span className="text-emerald-500 dark:text-emerald-400 font-semibold text-sm">
                WHY MARKET ROCK
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                Everything you need to explore the market
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Market Rock combines market information, learning resources, and intelligent tools to create a better stock market experience.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {features.map((item, index) => (
                <div key={index} className="p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:border-emerald-400 dark:hover:border-emerald-500">

                  <div className="h-14 w-14 rounded-2xl bg-emerald-100 dark:bg-zinc-800 flex items-center justify-center">
                    <i className={`fa-solid ${item.icon} text-emerald-500 dark:text-emerald-400 text-xl`}></i>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-500 dark:text-gray-400 leading-7">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* PHILOSOPHY */}
        <section className="px-4 sm:px-8 pb-12">
          <div className="max-w-7xl mx-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 shadow-md hover:shadow-xl transition duration-300 p-7 sm:p-10">

            <div className="flex flex-col sm:flex-row gap-5 items-start">

              <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-lightbulb text-emerald-500 dark:text-emerald-400"></i>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Our Philosophy
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7">
                  Market Rock is built to help users learn and understand the stock market. The information and insights provided on the platform are for educational and informational purposes and should not be considered financial advice.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* CTA */}
        <section className="px-4 sm:px-8 pb-16">
          <div className="max-w-7xl mx-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900 shadow-md hover:shadow-xl transition duration-300 p-8 sm:p-12 text-center">

            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 dark:bg-zinc-800 flex items-center justify-center">
              <i className="fa-solid fa-rocket text-emerald-500 dark:text-emerald-400 text-xl"></i>
            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl font-bold">
              Start exploring the market with Market Rock.
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Learn, explore, analyze, and build a better understanding of the stock market.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;