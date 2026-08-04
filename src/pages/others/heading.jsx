import React from "react";

function Heading({ heading }) {
  return (
    <div className="w-full flex text-center items-center justify-center px-4 py-6 sm:py-8 md:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white">
        {heading}
      </h2>
    </div>
  );
}

export default Heading;