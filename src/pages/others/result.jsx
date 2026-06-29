import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;

  useEffect(() => {
    if (!data) return;

    const timer = setTimeout(() => {
      navigate(data.next);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, data]);

  if (!data) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-white">
        <h1 className="text-2xl font-bold">
          No Data Found
        </h1>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-3xl p-10 text-center shadow-2xl">

        {data.value ? (
          <div className="text-green-500 text-7xl mb-5">
            ✓
          </div>
        ) : (
          <div className="text-red-500 text-7xl mb-5">
            ✕
          </div>
        )}

        <h1
          className={`text-3xl font-bold ${
            data.value ? "text-green-400" : "text-red-400"
          }`}
        >
          {data.message}
        </h1>

        <p className="text-gray-400 mt-4">
          Redirecting...
        </p>

        <div className="mt-6 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Result;