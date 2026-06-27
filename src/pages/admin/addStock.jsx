import React, { useState } from "react";
import { db } from "../../firebase/firebaseinit";

function AddStock() {
  const [stock, setStock] = useState({
    name: "",
    date: "",
    price: "",
  });

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value,
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stock);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Stock
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Stock Name */}
          <div>
            <label className="block mb-2 font-medium">
              Stock Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter stock name"
              value={stock.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>


          {/* Date */}
          <div>
            <label className="block mb-2 font-medium">
              Purchase Date
            </label>
            <input
              type="date"
              name="date"
              value={stock.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">
              Buy Price (₹)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={stock.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            Add Stock
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddStock;