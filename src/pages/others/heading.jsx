import React from "react";

function Heading({ heading }) {
  return (
    <div className="w-full text-center py-6 sm:py-8 md:py-10 flex items-center justify-center px-4">
      <h2 className="font-extrabold tracking-tight text-slate-900 text-2xl sm:text-3xl md:text-4xl  leading-tight">
        <span className="bg-linear-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent">
          {heading}
        </span>
      </h2>
    </div>
  );
}

export default Heading;