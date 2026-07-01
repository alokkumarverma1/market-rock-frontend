import React from "react";
import Navbar from "../others/navbar";
import Homecard from "./homecard";
import Heading from "../others/heading";
import Footer from "../others/footer";
import ReviewCard from "./reviewCard";
import IndexPredection from "../rockpage/rockindex/IndexPredection";
import { Link } from "react-router-dom";




function Home(){
    return(<>
    <Navbar></Navbar>
   <div className="home min-h-screen w-full">

  {/* hero section */}
  <div className="relative h-screen  flex lg:flex-row justify-center md:justify-around  flex-col-reverse items-center w-full overflow-hidden">
    {/* LEFT SECTION */}
    <div className="first mt-20   w-full lg:w-137.5 p-2 lg:p-10 text-center lg:text-left">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 sm:mb-5 font-bold metal-green">MARKET ROCK</h1>
      <p className="text-sm md:text-base">
        The stock market is more than a game of numbers—it's a game of insight.
        Track real-time market data, uncover hidden opportunities, master investing
        from beginner to advanced, and make smarter buy and sell decisions with powerful analysis.
      </p>
       <Link to={"/rock"}> <button className="h-10 cursor-pointer w-28 text-white shape rounded-2xl mt-5 shadow-md shadow-gray-300 border border-white">Start</button></Link>
      <div className="iconsarea border-2 border-green-300 mt-8 flex justify-around items-center text-green-700 text-[20px]  h-10  sm:mt-10 sm:w-50  rounded-2xl w-full">
              <a href="#"><i className="fa-brands  fa-instagram hover:text-green-600 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-youtube hover:text-green-400 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp hover:text-green-400 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-telegram hover:text-green-400 duration-300"></i></a>
      </div>
    </div>

    {/* RIGHT SECTION */}
<div className="secend mt-10 relative flex justify-center items-center">

  {/* Outer Ring */}
  <div className="outer-circle sm:h-60 sm:w-60 h-50 w-50 md:h-70 md:w-70 lg:h-[300px] lg:w-[300px] rounded-full flex justify-center items-center">
    {/* Middle Ring */}
    <div className="middle-circle h-[85%] w-[85%] rounded-full flex justify-center items-center">
      {/* Inner Ring */}
      <div className="inner-circle h-[85%] w-[85%] rounded-full flex  justify-center items-center relative z-20">
        <img src="logo.png" alt="" className="mt-9"/>
      </div>
    </div>
  </div>
</div>
  </div>
</div>


     {/* other section  */}
    <div className="cardsection h-40 mb-10 gap-2 w-full flex justify-around items-start">
    <Homecard  number={"100+"} data={"Active user"}></Homecard>
    <Homecard number={"23%"} data={"Grow last year"}></Homecard>
    <Homecard number={"#1"} data={"Stock market learning"}></Homecard>
    </div>


{/* rock ai section  */}
<div className="relative w-[90%] border-gray-200 shadow-md h-44 m-auto mb-20 rounded-2xl p-[2px] overflow-hidden">
  {/* animated border */}
  <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(#22c55e,#bbf7d0,#22c55e,#22c55e)]"></div>
  {/* inner card */}
   <div className="relative gap-3 h-full w-full bg-white rounded-2xl flex flex-col justify-center items-center">
    <div className="absolute w-40 h-40 bg-green-300 rounded-full blur-3xl top-[-20px] left-[-20px] animate-pulse opacity-70"></div>
    <div className="absolute w-40 h-40 bg-green-300 rounded-full blur-3xl bottom-[-20px] right-[-20px] animate-pulse opacity-60"></div>
    <div className="absolute w-2 h-2 bg-green-500 rounded-full top-8 left-16 animate-ping"></div>
    <div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full bottom-10 right-20 animate-bounce"></div>
    <h1 className="relative font-semibold  sm:text-2xl text-gray-800">
      Analysis with <span className="metal-green">Rock AI</span>
    </h1>
    <button className="relative px-6 py-2 shape text-white border rounded-xl
      hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105">
      <Link to={"/rockAi"}>Explore</Link>
    </button>
  </div>
</div>

      {/* learn section of home page */}
       <Heading heading={"First invest your time not money"}></Heading>
      <div className="learn h-140 sm:h-100 mt-10  w-full flex justify-start flex-col items-center">
      
        <div className="top w-full min-h-20 flex sm:flex-row flex-col justify-around items-center gap-4">
            <div className="left text-center w-[90%] sm:w-60 bg-green-50 border-2 border-green-700 rounded-2xl p-3 ">
                <h1 className="font-bold text-[15px]">All concept</h1>
                <p>learn all important concept</p>
            </div>
            <div className="right text-center w-[90%] sm:w-60 bg-green-50 border-2 border-green-700 rounded-2xl p-3">
                <h1 className="font-bold text-[15px]">live market </h1>
                <p>anlaysis is live market</p>
            </div>
        </div>

        <div className="middle h-40 w-full flex justify-center items-center">
           <div className="middle h-40 w-60 rounded-2xl">
            <img src="learn-home1.png" className="h-full w-full" alt="" />
           </div>
        </div>

           <div className="top w-full h-20  flex sm:flex-row flex-col justify-around items-center gap-4">
            <div className="left text-center w-[90%] sm:w-60 bg-green-50 border-2 border-green-700 rounded-2xl p-3">
                <h1 className="font-bold text-[15px] ">Proper discipline</h1>
                <p>Know how to manage discipline</p>
            </div>
            <div className="right text-center w-[90%] sm:w-60 bg-green-50 border-2 border-green-700 rounded-2xl p-3">
                <h1 className="font-bold text-[15px]">Discuss with us</h1>
                <p>proper doubt clear in market</p>
            </div>
        </div>

      </div>


  {/* cirtificate area */}
  <Heading heading={"Show your experience with certificate"}></Heading>   
<div className="certificate min-h-90  mb-10 p-5 minh-90 w-full flex sm:flex-row flex-col gap-5 justify-around items-center">
   {/* left side */}
<div className="left w-full  sm:w-1/2 flex flex-col gap-4 border-green-300 border-2 p-5 rounded-2xl bg-white shadow-xl">
  {/* Card 1 */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
    <i className="fa-solid fa-certificate text-blue-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Course Completion</h2>
      <p className="text-sm text-gray-500">Successfully completed rock course</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
    <i className="fa-solid fa-laptop-code text-green-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Practical </h2>
      <p className="text-sm text-gray-500">practis in live market with rock team</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
    <i className="fa-solid fa-diagram-project text-purple-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Clear doubts</h2>
      <p className="text-sm text-gray-500">Clear all doubts and learn more things</p>
    </div>
  </div>
</div>
   {/* right side */}
 <div className="right min-w-50 h-full flex justify-center items-center">
 <div className="min-h-40 max-h-50 min-w-60 max-w-70 rounded-2xl bg-gray-300"><img src="certificate.png" alt="" /></div>
   </div>
</div>    

  {/* review section */}
 <Heading heading={"Some reviews"}></Heading>
<div className="review w-full mb-20 mt-10  scroller p-3 gap-10 bg-gray-50">
<ReviewCard
  name={"Rahul Sharma"}
  review={"Market Rock helped me understand market trends easily. The interface is simple and clean."}
/>
<ReviewCard
  name={"Priya Singh"}
  review={"Amazing platform for beginners. The market insights are very useful."}
/>
<ReviewCard
  name={"Aman Verma"}
  review={"The UI looks modern and the stock information is easy to understand."}
/>
<ReviewCard
  name={"Sneha Gupta"}
  review={"I check Market Rock every day. The experience is smooth and fast."}
/>
<ReviewCard
  name={"Rohit Kumar"}
  review={"Excellent platform for tracking market movements and learning new concepts."}
/>
<ReviewCard
  name={"Anjali Mishra"}
  review={"The dashboard design is beautiful and the features are very helpful."}
/>
<ReviewCard
  name={"Vikas Patel"}
  review={"Market Rock makes market analysis simple and accessible for everyone."}
/>
<ReviewCard
  name={"Neha Yadav"}
  review={"Very responsive website with useful insights and a great user experience."}
/>
<ReviewCard
  name={"Arjun Tiwari"}
  review={"The platform provides clear information and helps me stay updated."}
/>
<ReviewCard
  name={"Karan Saxena"}
  review={"One of the best platforms for understanding market trends and data."}
/>


      </div>



      {/* footer */}
      <Footer></Footer>
   </>)
}

export default Home;