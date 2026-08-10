import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

function About() {
  return (
    <>
      <Navbar />

    <div className="bg-white dark:bg-black min-h-screen p-3 pt-20">
         {/* Hero Section */}
      <div className="hero-section flex flex-col gap-3 justify-center items-center w-full p-3 rounded-2xl bg-white shadow-md dark:bg-zinc-800 mb-5">
        <div className="h-10 w-30 bg-zinc-200 dark:bg-black dark:text-white flex justify-center items-center rounded-2xl font-extrabold sm:font-bold"><h1>About us</h1></div>
      <h1 className="text-2xl text-center sm:text-4xl md:text-5xl font-extrabold sm:font-bold dark:text-white">Learn. Analyze Grow Together.</h1>
      <p className="text-gray-500 dark:text-zinc-300 text-center"> We help learners and investors understand the stock market through
        education, analysis, and practical learning.
      </p>
      </div>   


        {/* About */}
        <section className="px-5 sm:px-16 py-10">
          <div className="bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-5 shadow-md">
            <h2 className="text-2xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-8 text-lg">
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

            <div className=" dark:bg-zinc-800 dark:text-white rounded-3xl p-8 shadow-md">
              <i className="fa-solid fa-bullseye text-4xl text-green-300"></i>
              <h3 className="text-2xl font-bold mt-5 "> Our Mission</h3>
              <p className="text-gray-600 dark:text-zinc-300 mt-4 leading-7">
                To make financial education simple, practical, and available
                to everyone.
              </p>
            </div>

            <div className="dark:bg-zinc-800 dark:text-white  rounded-3xl p-8 shadow-md">
              <i className="fa-solid fa-eye text-4xl text-green-300"></i>
              <h3 className="text-2xl font-bold mt-5"> Our Vision</h3>
              <p className="text-gray-600 dark:text-zinc-300 mt-4 leading-7">
                To build a strong community of learners and informed investors.
              </p>
            </div>

          </div>

        </section>

        {/* Features */}
        <section className="px-5 sm:px-16 py-10">
          <h2 className="text-[25px] font-bold text-center mb-5">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-book-open text-4xl text-green-300"></i>
              <h3 className="text-xl font-semibold mt-5">
                Learning Courses
              </h3>
              <p className="text-gray-600 dark:text-zinc-300 mt-3">
                Beginner-friendly educational content.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-chart-line text-4xl text-green-300"></i>
              <h3 className="text-xl font-semibold mt-5">
                Market Analysis
              </h3>
              <p className="text-gray-600 dark:text-zinc-300 mt-3">
                Educational stock analysis and insights.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <i className="fa-solid fa-users text-4xl text-green-300"></i>
              <h3 className="text-xl font-semibold mt-5">
                Community
              </h3>
              <p className="text-gray-600 dark:text-zinc-300 mt-3">
                Learn and grow together with other learners.
              </p>
            </div>
          </div>

        </section>

        {/* last Section */}
          <div className=" rounded-3xl p-10 flex justify-center shadow-md flex-col items-center dark:bg-zinc-800">
            <h2 className="text-3xl font-bold dark:text-white">Start Your Learning Journey Today </h2>
            <p className="dark:text-white mt-4">Learn, analyze, and grow with us.</p>
          </div>


      </div>
      <Footer></Footer>
    </>
  );
}

export default About;