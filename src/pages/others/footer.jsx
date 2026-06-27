import React from "react";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="metal-green">Market Rock</span>
            </h2>

            <p className="text-zinc-400 mt-4 text-sm leading-6">
              Learn stock market strategies, trading psychology,
              risk management, and investing techniques from
              practical real-world experience.
            </p>

            <div className="flex gap-4 mt-6 text-xl">
              <a href="#"><i className="fa-brands fa-instagram hover:text-green-400 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-youtube hover:text-green-400 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin hover:text-green-400 duration-300"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter hover:text-green-400 duration-300"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li><a href="/">Home</a></li>
              <li><a href="/rock">Rock</a></li>
              <li><a href="/learn">Learn</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Courses
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Stock Market Basics</li>
              <li>Price Action Trading</li>
              <li>Risk Management</li>
              <li>Advanced Trading</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex gap-3">
                <i className="fa-solid fa-envelope mt-1"></i>
                <span>support@marketrock.com</span>
              </div>

              <div className="flex gap-3">
                <i className="fa-solid fa-phone mt-1"></i>
                <span>+91 8172984928</span>
              </div>

              <div className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <span>India</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-zinc-500 text-sm">
            © 2026 Market Rock. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-zinc-500">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;