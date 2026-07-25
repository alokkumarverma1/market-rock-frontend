import React from "react";
import Navbar from "../../others/navbar";

function LivePage() {
  const hasAccess = true;

  const info = [
    { icon: "fa-calendar", text: "1 day in week" },
    { icon: "fa-clock", text: "09:00 Am" },
  ];

  const features = [
    "Live Trade Execution",
    "Entry & Exit Planning",
    "Risk Management",
    "Risk Reward",
    "Position Sizing",
    "Trading Discipline",
  ];

  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen mt-10 bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <i className="fa-solid fa-tower-broadcast text-3xl text-green-600"></i>
            <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
            <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500"></span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-5"> Learn in Live Market</h1>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Learn live trade execution, risk management and trading discipline
            in real market conditions.
          </p>
        </div>

        {/* Card */}

        <div className="mt-10 bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
          {/* Top */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Weekly Live Session</h2>
              <div className="grid grid-cols-2 gap-4 mt-6 border rounded-2xl p-3 border-green-300 shadow-md">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center  gap-2">
                    <i  className={`fa-solid ${item.icon} text-green-500`}></i>
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl px-8 py-6 text-center">
              <p className="text-gray-500">Session Fee</p>
              <h1 className="text-5xl font-bold text-green-600 mt-2">₹100 </h1>
            </div>

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
              >
                <i className="fa-solid fa-circle-check text-green-500"></i>

                <span>{item}</span>
              </div>
            ))}

          </div>

          {/* Button */}

          <div className="text-center mt-10">

            {!hasAccess ? (
              <>
                <button className="shape border-white border shadow-md hover:bg-green-600 text-white px-10 py-3 rounded-2xl cursor-pointer font-semibold transition">
                  Unlock for ₹100
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  Access will unlock instantly after successful payment.
                </p>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
                  <i className="fa-solid fa-circle-check"></i>
                  Access Unlocked
                </div>

                <br />
                <a
                  href="https://youtube.com/live/your_live_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mt-5 shape cursor-pointer text-white px-10 py-3 rounded-xl font-semibold transition">
                    <i className="fa-solid fa-video mr-2"></i>
                    Join Live
                  </button>
                </a>
              </>
            )}

          </div>

        </div>

        {/* Disclaimer */}

        <div className="mt-6 bg-green-50 border border-green-100 rounded-2xl p-5 text-sm text-gray-600 leading-6">
          <b className="text-gray-800">Educational Purpose Only</b>
          <br />
          This session is only for learning live trade execution, risk
          management and trading discipline. No guaranteed profits or buy/sell
          recommendations are provided.
        </div>

      </div>

    </div>
    </>
  );
}

export default LivePage;