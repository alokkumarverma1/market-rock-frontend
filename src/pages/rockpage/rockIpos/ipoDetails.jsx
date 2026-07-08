import React from "react";
import Navbar from "../../others/navbar";

function IpoDetails() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-5">

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row justify-between gap-5">

            <div className="flex gap-5">
              <img
                src="https://placehold.co/80x80"
                className="w-20 h-20 rounded-xl"
                alt=""
              />

              <div>
                <h1 className="text-3xl font-bold">
                  Tata Capital IPO
                </h1>

                <p className="text-gray-500 mt-2">
                  Financial Services • Mainboard IPO
                </p>

                <div className="flex gap-3 mt-4 flex-wrap">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    OPEN
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Market Rock Rating 8.8/10
                  </span>

                </div>

              </div>
            </div>

            <button className="bg-green-600 text-white px-7 py-3 rounded-xl">
              Apply IPO
            </button>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {/* IPO Overview */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5">
                  IPO Overview
                </h2>

                <div className="grid md:grid-cols-3 gap-5">

                  <Card title="Price Band" value="₹620 - ₹650" />
                  <Card title="Lot Size" value="23 Shares" />
                  <Card title="Issue Size" value="₹3200 Cr" />
                  <Card title="Face Value" value="₹10" />
                  <Card title="Fresh Issue" value="₹2500 Cr" />
                  <Card title="Offer For Sale" value="₹700 Cr" />
                  <Card title="Retail Quota" value="35%" />
                  <Card title="QIB" value="50%" />
                  <Card title="NII" value="15%" />

                </div>

              </div>

              {/* Timeline */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-6">
                  IPO Timeline
                </h2>

                <div className="grid md:grid-cols-4 gap-5">

                  <TimeCard title="Open" value="10 Jul" />
                  <TimeCard title="Close" value="14 Jul" />
                  <TimeCard title="Allotment" value="16 Jul" />
                  <TimeCard title="Listing" value="18 Jul" />

                </div>

              </div>

              {/* About */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5">
                  About Company
                </h2>

                <p className="text-gray-600 leading-8">
                  Tata Capital Limited is one of India's leading financial
                  service companies providing consumer loans, business loans,
                  housing finance, wealth management and investment banking
                  solutions. The company has a strong presence across India
                  with millions of customers.
                </p>

              </div>

              {/* Business */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5">
                  Business Segments
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  <Business title="Consumer Loans" />
                  <Business title="Housing Finance" />
                  <Business title="Commercial Finance" />
                  <Business title="Wealth Management" />
                  <Business title="Insurance" />
                  <Business title="Investment Banking" />

                </div>

              </div>

              {/* Financial */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5">
                  Financial Highlights
                </h2>

                <div className="grid md:grid-cols-4 gap-4">

                  <Card title="Revenue" value="₹18500 Cr" />
                  <Card title="Profit" value="₹3200 Cr" />
                  <Card title="ROE" value="18%" />
                  <Card title="ROCE" value="15%" />
                  <Card title="Debt" value="Medium" />
                  <Card title="EPS" value="₹18" />
                  <Card title="Book Value" value="₹220" />
                  <Card title="Net Worth" value="₹21000 Cr" />

                </div>

              </div>

              {/* Strength */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5">
                  Strengths
                </h2>

                <ul className="space-y-3 list-disc ml-5 text-gray-600">
                  <li>Strong Tata Brand</li>
                  <li>Growing Revenue</li>
                  <li>Experienced Management</li>
                  <li>Diversified Loan Portfolio</li>
                  <li>Strong Customer Base</li>
                </ul>

              </div>

              {/* Risks */}

              <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-semibold mb-5 text-red-600">
                  Risks
                </h2>

                <ul className="space-y-3 list-disc ml-5 text-gray-600">
                  <li>Interest Rate Risk</li>
                  <li>High Competition</li>
                  <li>Economic Slowdown</li>
                  <li>Regulatory Changes</li>
                </ul>

              </div>

            </div>

            {/* Sidebar */}

            <div>

              <div className="sticky top-24 bg-white rounded-2xl shadow p-6">

                <h2 className="text-xl font-semibold mb-6">
                  Quick Info
                </h2>

                <Info title="Current GMP" value="₹120" />
                <Info title="Expected Listing" value="+18%" />
                <Info title="Minimum Investment" value="₹14950" />
                <Info title="Registrar" value="Link Intime" />
                <Info title="Exchange" value="NSE/BSE" />
                <Info title="Industry" value="Finance" />
                <Info title="Risk Level" value="Medium" />
                <Info title="Recommendation" value="Apply" />

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

function Card({ title, value }) {
  return (
    <div className="border rounded-xl p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="font-bold mt-2">{value}</h3>
    </div>
  );
}

function TimeCard({ title, value }) {
  return (
    <div className="bg-green-50 rounded-xl p-5 text-center">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{value}</p>
    </div>
  );
}

function Business({ title }) {
  return (
    <div className="border rounded-xl p-5 font-semibold">
      {title}
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="flex justify-between py-3 border-b">
      <span>{title}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

export default IpoDetails;