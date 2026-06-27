import React from "react";
import { motion } from "framer-motion";

function IndexPredection({ value = -50 }) {
  // Clamp value between -100 and 100
  const score = Math.max(-100, Math.min(100, value));

  // -90° to 90°
  const angle = (score / 100) * 90;

  const sentiment =
    score < -20
      ? "CALL SIDE"
      : score > 20
      ? "PUT SIDE"
      : "NEUTRAL";

  const sentimentColor =
    score < -20
      ? "text-green-600"
      : score > 20
      ? "text-red-600"
      : "text-gray-500";

  return (
    <div className="flex justify-center items-center p-4">
      <div className="
        w-full
        max-w-[420px]
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-xl
        p-5
        sm:p-8
      ">
        {/* Gauge */}
        <div className="relative w-full max-w-[320px] aspect-[1.4] mx-auto">

          {/* Gauge SVG */}
          <svg
            viewBox="0 0 320 220"
            className="absolute inset-0 w-full h-full"
          >
            {/* CALL Side */}
            <path
              d="M40 170 A120 120 0 0 1 160 50"
              fill="none"
              stroke="#22c55e"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* PUT Side */}
            <path
              d="M160 50 A120 120 0 0 1 280 170"
              fill="none"
              stroke="#ef4444"
              strokeWidth="18"
              strokeLinecap="round"
            />


            {/* Neutral Text */}
            <text
              x="160"
              y="28"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="14"
              fontWeight="600"
            >
              NEUTRAL
            </text>
          </svg>

          {/* Needle */}
         {/* Needle */}
<motion.div
  animate={{ rotate: angle }}
  transition={{
    duration: 1,
    type: "spring",
    stiffness: 90,
    damping: 12,
  }}
  className="absolute left-1/2 bottom-[15%] origin-bottom z-20"
  style={{
    transform: "translateX(-50%)",
  }}
>
  <div className="relative flex flex-col items-center">

    {/* Arrow Tip */}
    <div className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 bg-slate-900 rounded-sm" />

    {/* Needle */}
    <div className="w-1 sm:w-1.5 h-[38vw] max-h-[10px] min-h-[90px] bg-slate-900 rounded-full shadow-lg" />
  </div>
</motion.div>

          {/* Center Dot */}
         <div
  className="
    absolute
    left-1/2
    bottom-[13%]
    -translate-x-1/2
    w-5 h-5
    sm:w-6 sm:h-6
    rounded-full
    bg-slate-900
    border-4
    border-white
    shadow-lg
  "
/>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 text-green-600 font-semibold text-sm sm:text-lg">
            CALL
          </div>

          <div className="absolute bottom-0 right-0 text-red-600 font-semibold text-sm sm:text-lg">
            PUT
          </div>
        </div>

        {/* Percentage */}
        <div className="text-center mt-4">
          <h1 className="text-2xl sm:text-2xl font-bold text-slate-900">
            {Math.abs(score)}%
          </h1>

          <p className={`mt-2 text-sm sm:text-lg font-semibold ${sentimentColor}`}>{sentiment}</p>
          <p className="text-[14px] text-gray-700 mt-3">22-03-2006</p>
        </div>
      </div>
    </div>
  );
}

export default IndexPredection;