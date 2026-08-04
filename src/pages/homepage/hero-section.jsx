import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative  bg-gray-50 dark:bg-black dark:text-white  w-full flex items-center justify-center overflow-hidden   pt-16 pb-12">
      
      {/* Background Grid & Ambient Glow */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-green-200 dark:bg-gray-600 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-100 dark:bg-gray-600 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Floating Animated Badges (Safely positioned on sides) */}
      
      {/* Indian Rupee Badge */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-4 xl:left-12 bg-white/90 border border-slate-200/80 p-3 rounded-2xl shadow-lg shadow-slate-200/40 backdrop-blur-md hidden lg:flex items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
          ₹
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Market Index</p>
          <p className="text-xs font-bold text-emerald-600">+1.45% ▲</p>
        </div>
      </motion.div>

      {/* USD Badge */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-4 xl:right-12 bg-white/90 border border-slate-200/80 p-3 rounded-2xl shadow-lg shadow-slate-200/40 backdrop-blur-md hidden lg:flex items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
          $
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Global Tech</p>
          <p className="text-xs font-bold text-slate-800">$2,480.50</p>
        </div>
      </motion.div>

      {/* AI Insight Badge */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-55 left-4 xl:left-30 bg-white/90 border border-slate-200/80 p-3 rounded-2xl shadow-lg shadow-slate-200/40 backdrop-blur-md hidden lg:flex items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-base">
          📈
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">AI Insight</p>
          <p className="text-xs font-bold text-slate-800">Bullish Trend</p>
        </div>
      </motion.div>

      {/* AI Model Status Badge (Fixed position to avoid overlap with cards) */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-55 right-4 xl:right-30 bg-white/90 border border-slate-200/80 p-3 rounded-2xl shadow-lg shadow-slate-200/40 backdrop-blur-md hidden lg:flex items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-base">
          📈
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">AI Insight</p>
          <p className="text-xs font-bold text-slate-800">Bullish Trend</p>
        </div>
      </motion.div>

      {/* Background Decorative Line Charts */}
      <div className="absolute bottom-20 left-0  hidden xl:block pointer-events-none opacity-20">
        <svg width="180" height="90" viewBox="0 0 200 100" fill="none">
          <path d="M0 80 Q 50 20, 100 60 T 200 10" stroke="#10b981" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-0 hidden xl:block pointer-events-none opacity-20">
        <svg width="180" height="90" viewBox="0 0 200 100" fill="none">
          <path d="M0 20 Q 50 80, 100 40 T 200 90" stroke="#059669" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mt-20 w-full max-w-4xl text-center px-4">
        {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-900 dark:bg-linear-to-r dark:from-emerald-400 dark:via-teal-500 dark:to-emerald-600  bg-clip-text text-transparent leading-[1.08]">
       MARKET ROCK
      </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-5 max-w-2xl mx-auto  dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Learn the stock market with confidence. Access real-time market insights, educational resources, and practical analysis designed to help beginners and experienced traders make informed investment decisions.
        </p>

        {/* EXPLORE Button */}
        <div className="mt-4">
          <button className="px-10  py-2.5 rounded-xl text-white font-bold text-sm tracking-wider shadow-lg shadow-emerald-600/20 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 hover:opacity-95 transition-all cursor-pointer">
            EXPLORE
          </button>
        </div>

        {/* Compact Stats Cards */}
        <div className="w-full max-w-3xl mx-auto mt-10 dark:text-gray-300">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* Card 1 */}
            <div className="bg-white dark:border-none  dark:bg-zinc-800 border border-slate-300 shadow-xs rounded-xl py-4 px-3 flex flex-col justify-center items-center text-center">
              <p className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl tracking-tight">
                1,550+
              </p>
              <p className=" font-medium text-xs sm:text-sm mt-1">
                Active Traders
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border dark:border-none  dark:bg-zinc-800  border-slate-300 shadow-xs rounded-xl py-4 px-3 flex flex-col justify-center items-center text-center">
              <p className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl tracking-tight">
                #1
              </p>
              <p className="font-medium text-xs sm:text-sm mt-1">
                Learning Platform
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border dark:border-none  dark:bg-zinc-800 border-slate-200/80 shadow-xs rounded-xl py-4 px-3 flex flex-col justify-center items-center text-center">
              <p className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl tracking-tight">
                24/7
              </p>
              <p className=" dark:text-gray-300 font-medium text-xs sm:text-sm mt-1">
                Market update
              </p>
            </div>

             {/* Card 4 */}
            <div className="bg-white border dark:border-none  dark:bg-zinc-800 border-slate-200/80 shadow-xs rounded-xl py-4 px-3 flex flex-col justify-center items-center text-center">
              <p className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-900 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl tracking-tight">
                23%
              </p>
              <p className=" font-medium text-xs sm:text-sm mt-1">
              Annual Return
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}