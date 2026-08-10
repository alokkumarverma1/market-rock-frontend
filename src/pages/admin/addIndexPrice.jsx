import React, { useState } from "react";
import Navbar from "../others/navbar";
import { AddIndexData } from "../service/rockService";
import { useNavigate } from "react-router-dom";

function AddIndexPrice() {

    const [index, setIndex] = useState({ indexName: "", indexPrice: "",entryPrice: "", minTarget: "", maxTarget: "", stopLoss: "", direction: "", });
     const navigate = useNavigate();
    const handleData = (e) => {
        setIndex({ ...index, [e.target.name]: e.target.value });
    };

    const addIndex = async (e) => {
        e.preventDefault();
        try{
         let res = await AddIndexData(index);
         if(res.status == 201){
               navigate("/result" , {state:{value:true,message:"add success" ,next:"/"}})
         }else{
                navigate("/result" , {state:{value:false,message:"something wrong" ,next:"/addIndexPrice"}})
         }
        }catch(error){
              navigate("/result" , {state:{value:false,message:"something wrong" ,next:"/addIndexPrice"}})
        }
    };

    return (
        <>
            <Navbar></Navbar>

            <div className="addindexprice pt-20 w-full min-h-screen bg-gray-50 dark:bg-black p-6">

                <div className="max-w-5xl mx-auto">

                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Add Index Price</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Add index price and trading analysis</p>
                    </div>
                  {/* form  */}
                    <form onSubmit={addIndex} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Index Analysis</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Enter index trading information</p>
                        </div>

                        <div className="p-6 grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Index Name</label>
                                <select name="indexName" value={index.indexName} onChange={handleData} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <option value="">Select Index</option>
                                    <option value="NIFTY">NIFTY</option>
                                    <option value="BANKNIFTY">BANKNIFTY</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Index Price</label>
                                <input name="indexPrice" value={index.indexPrice} onChange={handleData} placeholder="Enter index price" className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Entry Price</label>
                                <input name="entryPrice" value={index.entryPrice} onChange={handleData} placeholder="Enter entry price" className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Minimum Target</label>
                                <input name="minTarget" value={index.minTarget} onChange={handleData} placeholder="Enter minimum target" className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Maximum Target</label>
                                <input name="maxTarget" value={index.maxTarget} onChange={handleData} placeholder="Enter maximum target" className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Stop Loss</label>
                                <input name="stopLoss" value={index.stopLoss} onChange={handleData} placeholder="Enter stop loss" className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Direction</label>
                                <select name="direction" value={index.direction} onChange={handleData} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                    <option value="">Select Direction</option>
                                    <option value="BUY">BUY</option>
                                    <option value="SELL">SELL</option>
                                </select>
                            </div>

                        </div>

                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                            <button type="submit" className="px-6 py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-violet-700">Add Index</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    );
}

export default AddIndexPrice;