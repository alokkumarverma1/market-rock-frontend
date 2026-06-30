import React from "react";
import Navbar from "../others/navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen pt-20">

       {/* Hero Section */}
   <section className="px-5 sm:px-16">
  <div className="relative overflow-hidden rounded-[40px] shape2 px-8 py-20 sm:px-16 shadow-lg">

    {/* Background Shapes */}
    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/30"></div>
    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/20"></div>

    <div className="relative z-10 text-center">

      <span className="inline-block bg-white text-green-400 px-5 py-2 rounded-full text-sm font-semibold shadow">
        ABOUT MARKET ROCK
      </span>

      <h1 className="text-5xl sm:text-7xl font-bold text-white mt-6">
        Learn. Analyze.
        <br />
        Grow Together.
      </h1>

      <p className="text-white/90 mt-6 text-lg max-w-3xl mx-auto leading-8">
        We help learners and investors understand the stock market through
        education, analysis, and practical learning.
      </p>

    

    </div>

  </div>
</section>

        {/* About */}
        <section className="px-5 sm:px-16 py-10">
          <div className="bg-white border-2 border-green-300 rounded-3xl p-10 shadow-md">

            <h2 className="text-3xl font-bold text-green-300 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              Our platform is built to make stock market education easy and
              accessible for everyone. We provide learning resources,
              market analysis, and educational content to help users grow
              their financial knowledge.
            </p>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-5 sm:px-16 py-10">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-green-50 border border-green-300 rounded-3xl p-8 shadow-md">
              <i className="fa-solid fa-bullseye text-4xl text-green-300"></i>

              <h3 className="text-2xl font-bold mt-5 text-green-300">
                Our Mission
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                To make financial education simple, practical, and available
                to everyone.
              </p>
            </div>

            <div className="bg-green-50 border border-green-300 rounded-3xl p-8 shadow-md">
              <i className="fa-solid fa-eye text-4xl text-green-300"></i>

              <h3 className="text-2xl font-bold mt-5 text-green-300">
                Our Vision
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                To build a strong community of learners and informed investors.
              </p>
            </div>

          </div>

        </section>

        {/* Features */}
        <section className="px-5 sm:px-16 py-10">

          <h2 className="text-4xl font-bold text-center text-green-300 mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border border-green-300 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-book-open text-4xl text-green-300"></i>

              <h3 className="text-xl font-semibold mt-5">
                Learning Courses
              </h3>

              <p className="text-gray-600 mt-3">
                Beginner-friendly educational content.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-chart-line text-4xl text-green-300"></i>

              <h3 className="text-xl font-semibold mt-5">
                Market Analysis
              </h3>

              <p className="text-gray-600 mt-3">
                Educational stock analysis and insights.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-users text-4xl text-green-300"></i>

              <h3 className="text-xl font-semibold mt-5">
                Community
              </h3>

              <p className="text-gray-600 mt-3">
                Learn and grow together with other learners.
              </p>
            </div>

          </div>

        </section>

        {/* Footer Section */}
        <section className="px-5 sm:px-16 py-20  text-center">

          <div className="shape2 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-white">
              Start Your Learning Journey Today
            </h2>

            <p className="text-white mt-4">
              Learn, analyze, and grow with us.
            </p>

          </div>

        </section>

      </div>
    </>
  );
}

export default About;