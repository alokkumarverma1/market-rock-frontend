import React from "react";
import Navbar from "../others/navbar";
import Homecard from "./homecard";
import Heading from "../others/heading";
import Footer from "../others/footer";
import ReviewCard from "./reviewCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import {BookOpen,ChartCandlestick,ShieldCheck,MessageCircleMore,} from "lucide-react";
import HeroSection from "./hero-section";


function Home(){
    return(<>
    <Navbar></Navbar>
<div className="home-page min-h-screen w-full bg-gray-50  dark:bg-black dark:text-white">
  {/* hero section */}
   <HeroSection></HeroSection>

  {/* icon area */}
 <div className="icon-area mb-10 w-full max-w-xl mx-auto px-4">
      <div className="bg-white border flex-col sm:flex-row border-slate-200/80 shadow-lg shadow-slate-200/50 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 backdrop-blur-md">
        {/* Text Section */}
        <div className="text-left">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600"> Join Community</p>
          <p className="text-slate-800 text-xs sm:text-sm font-semibold"> Connect with Traders</p>
        </div>
        {/* Social Icons Section */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* WhatsApp */}
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer"aria-label="WhatsApp Community"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1 active:scale-95 shadow-xs">
            <FaWhatsapp className="text-xl sm:text-2xl" />
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram Profile"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1 active:scale-95 shadow-xs" >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>
          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube Channel"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1 active:scale-95 shadow-xs">
            <FaYoutube className="text-xl sm:text-2xl" />
          </a>
         <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram Channel"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-200 transform hover:-translate-y-1 active:scale-95 shadow-xs">
            <FaTelegramPlane className="text-lg sm:text-xl pr-0.5" />
          </a>

        </div>
      </div>
    </div>

  {/* other content */}
  <div className="other-content w-full px-3">
    
  {/* rock ai section  */}
   <div className="rock-ai relative overflow-auto flex flex-col justify-center shadow-md items-center gap-5 h-45 rounded-2xl bg-white dark:bg-zinc-800 w-[90%] m-auto">
     <div className="absolute r-10 left-0 h-30 w-30 rounded-full  bg-emerald-200 dark:bg-zinc-500 blur-3xl animate-pulse" />
     <div className="absolute  right-0 h-30 w-30 rounded-full  bg-emerald-200 dark:bg-zinc-500 blur-3xl animate-pulse" />
   <h1 className="text-2xl font-extrabold">Anlaysis with Ai</h1>
   <Link to={"/rockai"}>
   <button className="px-10  py-2.5 rounded-xl text-white font-bold text-sm tracking-wider shadow-lg shadow-emerald-600/20 bg-linear-to-r from-emerald-500 via-teal-600 to-emerald-700 hover:opacity-95 transition-all cursor-pointer">
            EXPLORE
   </button>
   </Link>

   </div>


  {/* Learn Section */}
<Heading heading={"First invest your time, not money"} />
    <div className="grid md:grid-cols-2 gap-6  ">
      {/* Card 1 */}
      <div className="group bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="h-14 w-14 rounded-2xl  flex items-center justify-center mb-5 group-hover:bg-green-200 dark:group-hover:bg-zinc-700 transition">
          <BookOpen size={30} className="text-green-700" />
        </div>
        <h2 className="text-[20px] font-bold">Learn Every Concept</h2>
        <p className="dark:text-gray-400 mt-3 leading-7">
          Master stock market basics, technical analysis, candlestick patterns,
          investing strategies and risk management from beginner to advanced.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="h-14 w-14 rounded-2xl  flex items-center justify-center mb-5 group-hover:bg-green-200 dark:group-hover:bg-zinc-700 transition">
         <ChartCandlestick size={30} className="text-green-700" />
        </div>
        <h2 className="text-[20px] font-bold ">Live Market Analysis</h2>
        <p className="dark:text-gray-400 mt-3 leading-7">
          Watch live market movements and understand the logic behind every
          trade with real-time examples.
        </p>
      </div>
      

      {/* Card 3 */}
      <div className="group bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="h-14 w-14 rounded-2xl  flex items-center justify-center mb-5 group-hover:bg-green-200 dark:group-hover:bg-zinc-700 transition">
           <ShieldCheck size={30} className="text-green-700" />
        </div>
        <h2 className="text-[20px] font-bold">Proper Discipline</h2>
        <p className="dark:text-gray-400 mt-3 leading-7">
          Develop the right mindset, patience and discipline required to become
          a successful long-term investor.
        </p>
      </div>
   

      {/* Card 4 */}
         <div className="group bg-white dark:bg-zinc-800 dark:text-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="h-14 w-14 rounded-2xl  flex items-center justify-center mb-5 group-hover:bg-green-200 dark:group-hover:bg-zinc-700 transition">
           <MessageCircleMore size={30} className="text-green-700" />
        </div>
        <h2 className="text-[20px] font-bold">Discuss With Us</h2>
        <p className="dark:text-gray-400 mt-3 leading-7">
           Connect with our community, ask your doubts and learn together through
          meaningful discussions.
        </p>
      </div>
      
    </div>

  {/* cirtificate area */}
  <Heading heading={"Learn & Get Certified"}></Heading>   
  <div className="certificate min-h-90  shadow-xl  bg-white dark:bg-zinc-800  mb-10 rounded-2xl p-1 minh-90 w-full flex sm:flex-row flex-col gap-5 justify-around items-center">
   {/* left side */}
 <div className="left w-full  sm:w-1/2 flex flex-col gap-4 p-2 rounded-2xl ">
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-zinc-900  transition">
    <i className="fa-solid fa-certificate text-blue-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Course Completion</h2>
      <p className="text-sm text-gray-500">Successfully completed rock course</p>
    </div>
  </div>
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-zinc-900  transition">
    <i className="fa-solid fa-laptop-code text-green-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Practical </h2>
      <p className="text-sm text-gray-500">practis in live market with rock team</p>
    </div>
  </div>
  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-zinc-900 transition">
    <i className="fa-solid fa-diagram-project text-purple-500 text-xl"></i>
    <div>
      <h2 className="font-semibold">Clear doubts</h2>
      <p className="text-sm text-gray-500">Clear all doubts and learn more things</p>
    </div>
  </div>
</div>
   {/* right side */}
 <div className="right min-w-50 h-full p-3 flex justify-center items-center">
 <div className="min-h-40  max-h-50 min-w-55 max-w-70 rounded-2xl bg-gray-300"><img src="certificate.png" className="rounded-2xl" alt="" /></div>
   </div>
</div>   

  {/* review section */}
 <Heading heading={"Some reviews"}></Heading>
<div className="review w-full   scroller p-3 gap-10 ">
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



  </div>
</div>
      {/* footer */}
      <Footer></Footer>
   </>)
}

export default Home;