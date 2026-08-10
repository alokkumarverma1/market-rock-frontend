import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTrendingUp,FiBarChart2,FiDollarSign,FiPieChart,FiTarget,FiCalendar,FiSave,} from "react-icons/fi";
import { addSwingStock } from "../service/rockService";
import Navbar from "../others/navbar";
function AddSwingStock() {

  const navigate = useNavigate();

  const [swingStock, setSwingStock] = useState({
    stockName: "",
    date: "",

    currentPrice: "",
    stopLoss: "",
    minTarget: "",
    maxTarget: "",

    yearlyReturn: "",
    halfReturn: "",
    monthReturn: "",
    dayReturn: "",

    peRatio: "",
    marketCap: "",
    bookValue: "",
    roe: "",

    promoter: "",
    fii: "",
    retail: "",
    other: "",

    swingStockProfitDto: {
      firstYearName: "",
      secondYearName: "",
      thirdYearName: "",
      fourthYearName: "",

      firstYearProfit: "",
      secondYearProfit: "",
      thirdYearProfit: "",
      fourthYearProfit: "",
    },
  });
  

  // Normal input
  const handleChange =(e)=>{
    setSwingStock({...swingStock,[e.target.name] : e.target.value})
  }

   const handleProfitChange =(e)=>{
    setSwingStock({...swingStock, swingStockProfitDto:{...swingStock.swingStockProfitDto,[e.target.name]:e.target.value}})
  }

  const AddStock = async(e)=>{
    e.preventDefault();
    try{
        const res = await addSwingStock(swingStock);
        if(res.status === 201){
          navigate("/result" , {state:{value:true,message:"success" ,next:"/"}})
         }else{
              navigate("/result" , {state:{value:false,message:"not add" ,next:"/addStock"}})
         }
    }catch(error){
            navigate("/result" , {state:{value:false,message:"something wrong" ,next:"/addStock"}})
    }
  };
  

  



 
return (
    <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium mb-2">
                        <FiTrendingUp />
                        Rock Analysis
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        Add Swing Stock
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Add stock analysis, returns, holdings and profit information.
                    </p>
                </div>

                <form onSubmit={AddStock} className="space-y-5">

                    {/* Stock Information */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiBarChart2 className="text-green-600" />

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Stock Information
                                </h2>

                                <p className="text-xs text-gray-400">
                                    Basic information about the stock
                                </p>
                            </div>
                        </div>

                        <div className="p-6 grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="text-sm text-gray-600">Stock Name</label>
                                <input name="stockName" placeholder="Enter stock name" value={swingStock.stockName} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Analysis Date</label>

                                <div className="relative mt-1">
                                    <FiCalendar className="absolute left-3 top-3 text-gray-400" />

                                    <input type="date" name="date" value={swingStock.date} onChange={handleChange} className="w-full pl-10 p-2.5 rounded-lg border bg-gray-50" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Rock Analysis */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiTarget className="text-green-600" />

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Rock Analysis
                                </h2>

                                <p className="text-xs text-gray-400">
                                    Entry, stop loss and target levels
                                </p>
                            </div>
                        </div>

                        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div>
                                <label className="text-sm text-gray-600">Current Price</label>
                                <input name="currentPrice" placeholder="Current Price" value={swingStock.currentPrice} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Stop Loss</label>
                                <input name="stopLoss" placeholder="Stop Loss" value={swingStock.stopLoss} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Minimum Target</label>
                                <input name="minTarget" placeholder="Minimum Target" value={swingStock.minTarget} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Maximum Target</label>
                                <input name="maxTarget" placeholder="Maximum Target" value={swingStock.maxTarget} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                        </div>
                    </div>

                    {/* Return Data */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiTrendingUp className="text-green-600" />

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Return Data
                                </h2>

                                <p className="text-xs text-gray-400">
                                    Historical stock returns
                                </p>
                            </div>
                        </div>

                        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div>
                                <label className="text-sm text-gray-600">Yearly Return</label>
                                <input name="yearlyReturn" placeholder="Yearly Return" value={swingStock.yearlyReturn} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">6 Month Return</label>
                                <input name="halfReturn" placeholder="6 Month Return" value={swingStock.halfReturn} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Month Return</label>
                                <input name="monthReturn" placeholder="Month Return" value={swingStock.monthReturn} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Day Return</label>
                                <input name="dayReturn" placeholder="Day Return" value={swingStock.dayReturn} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                        </div>
                    </div>

                    {/* Key Factors */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiBarChart2 className="text-green-600" />
                            <h2 className="font-semibold text-gray-800">
                                Key Factors
                            </h2>
                        </div>
                        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div>
                                <label className="text-sm text-gray-600">P/E Ratio</label>
                                <input name="peRatio" placeholder="P/E Ratio" value={swingStock.peRatio} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Market Cap</label>
                                <input name="marketCap" placeholder="Market Cap" value={swingStock.marketCap} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Book Value</label>
                                <input name="bookValue" placeholder="Book Value" value={swingStock.bookValue} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">ROE</label>
                                <input name="roe" placeholder="ROE" value={swingStock.roe} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                        </div>
                    </div>

                    {/* Holding Pattern */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiPieChart className="text-green-600" />

                            <h2 className="font-semibold text-gray-800">
                                Holding Pattern
                            </h2>
                        </div>

                        <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <div>
                                <label className="text-sm text-gray-600">Promoter</label>
                                <input name="promoter" placeholder="Promoter" value={swingStock.promoter} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">FII</label>
                                <input name="fii" placeholder="FII" value={swingStock.fii} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Retail</label>
                                <input name="retail" placeholder="Retail" value={swingStock.retail} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Other</label>
                                <input name="other" placeholder="Other" value={swingStock.other} onChange={handleChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                            </div>

                        </div>
                    </div>

                    {/* Yearly Profit */}
                    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

                        <div className="px-6 py-4 border-b flex items-center gap-3">
                            <FiDollarSign className="text-green-600" />

                            <div>
                                <h2 className="font-semibold text-gray-800">
                                    Yearly Profit
                                </h2>

                                <p className="text-xs text-gray-400">
                                    Last four years profit
                                </p>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-600">First Year</label>
                                    <input name="firstYearName" placeholder="First Year" value={swingStock.swingStockProfitDto.firstYearName} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">First Year Profit</label>
                                    <input name="firstYearProfit" placeholder="First Year Profit" value={swingStock.swingStockProfitDto.firstYearProfit} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-600">Second Year</label>
                                    <input name="secondYearName" placeholder="Second Year" value={swingStock.swingStockProfitDto.secondYearName} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Second Year Profit</label>
                                    <input name="secondYearProfit" placeholder="Second Year Profit" value={swingStock.swingStockProfitDto.secondYearProfit} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-600">Third Year</label>
                                    <input name="thirdYearName" placeholder="Third Year" value={swingStock.swingStockProfitDto.thirdYearName} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Third Year Profit</label>
                                    <input name="thirdYearProfit" placeholder="Third Year Profit" value={swingStock.swingStockProfitDto.thirdYearProfit} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-600">Fourth Year</label>
                                    <input name="fourthYearName" placeholder="Fourth Year" value={swingStock.swingStockProfitDto.fourthYearName} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Fourth Year Profit</label>
                                    <input name="fourthYearProfit" placeholder="Fourth Year Profit" value={swingStock.swingStockProfitDto.fourthYearProfit} onChange={handleProfitChange} className="w-full mt-1 p-2.5 rounded-lg border bg-gray-50" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Save */}
                    <div className="flex justify-end">
                        <button type="submit" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-7 py-3 rounded-xl">
                            <FiSave />
                            Save Swing Stock
                        </button>
                    </div>

                </form>
            </div>
        </main>
    </>
);


}

export default AddSwingStock;