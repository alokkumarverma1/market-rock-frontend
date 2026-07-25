import React, { useState } from "react";
import Navbar from "../others/navbar";
import {addSwingStockService } from "../../firebase/services/rockService";
import { useNavigate } from "react-router-dom";


function AddSwingStock(){

const navigate = useNavigate();
const [active , setActive] = useState(true);
const [swingStock, setSwingStock] = useState({
  stockName: "",
  date: "",

  rockAnalysis: {
    currentPrice: "",
    minTarget: "",
    maxTarget: "",
    support: "",
    confidence: ""
  },

  returnData: {
    lastYear: "",
    last6Month: "",
    lastWeek: "",
    lastDay: ""
  },

  keyFactors: {
    peRatio: "",
    roe: "",
    eps: "",
    marketCap: "",
    bookValue: ""
  },

  year: {
      year1: "",
      year2: "",
      year3: "",
      year4: ""
    },
  profit: {
      year1: "",
      year2: "",
      year3: "",
      year4: ""
  },
  profitType:{
    type:"",
  },

  holding: {
    promoter: "",
    fii: "",
    dii: "",
    public: ""
  },
});

const handleNestedChange = (section, e) => {
  setSwingStock({
    ...swingStock,
    [section]: {
      ...swingStock[section],
      [e.target.name]: e.target.value,
    },
  });
};

// add stock fucntion 
const handleSummit = async (e)=>{
    e.preventDefault();
  try{
    await addSwingStockService(swingStock);
    navigate("/result" , {state:{code:200 , value:true , next:"/"}})
  }catch(error){
    console.log(error.message)
  }
}


  return(<>
  <Navbar></Navbar>
<div className="adswingstock flex  justify-center items-center w-full min-h-screen pt-20 pb-30">
  <form className="shadow-md w-[80%] min-h-100 p-4 space-y-6" onSubmit={handleSummit}>
  {/* Stock Basic Info */}
  <div className="space-y-2">
    <input
      type="text"
      name="stockName"
      placeholder="Stock Name"
      value={swingStock.stockName}
      onChange={(e) =>
        setSwingStock({ ...swingStock, stockName: e.target.value })
      }
      className="w-full border border-green-300 p-2 rounded"
    />

    <input
      type="date"
      name="date"
      value={swingStock.date}
      onChange={(e) =>
        setSwingStock({ ...swingStock, date: e.target.value })
      }
      className="w-full border border-green-300 p-2 rounded"
    />
  </div>

  {/* Rock Analysis */}
  <div className="border p-3 rounded border-green-300 space-y-2">
    <h2 className="font-semibold">Rock Analysis</h2>

    <input name="currentPrice" placeholder="Current Price"
      value={swingStock.rockAnalysis.currentPrice}
      onChange={(e) => handleNestedChange("rockAnalysis", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="minTarget" placeholder="Min Target"
      value={swingStock.rockAnalysis.minTarget}
      onChange={(e) => handleNestedChange("rockAnalysis", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="maxTarget" placeholder="Max Target"
      value={swingStock.rockAnalysis.maxTarget}
      onChange={(e) => handleNestedChange("rockAnalysis", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="support" placeholder="stop loss"
      value={swingStock.rockAnalysis.support}
      onChange={(e) => handleNestedChange("rockAnalysis", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="confidence" placeholder="Confidence"
      value={swingStock.rockAnalysis.confidence}
      onChange={(e) => handleNestedChange("rockAnalysis", e)}
      className="w-full border border-green-300 p-2 rounded"
    />
  </div>

  {/* Return Data */}
  <div className="border p-3 rounded border-green-300 space-y-2">
    <h2 className="font-semibold">Return Data</h2>

    <input name="lastYear" placeholder="Last Year"
      value={swingStock.returnData.lastYear}
      onChange={(e) => handleNestedChange("returnData", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="last6Month" placeholder="Last 6 Month"
      value={swingStock.returnData.last6Month}
      onChange={(e) => handleNestedChange("returnData", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="lastWeek" placeholder="Last month"
      value={swingStock.returnData.lastWeek}
      onChange={(e) => handleNestedChange("returnData", e)}
      className="w-full border border-green-300 p-2 rounded"
    />

    <input name="lastDay" placeholder="Last week"
      value={swingStock.returnData.lastDay}
      onChange={(e) => handleNestedChange("returnData", e)}
      className="w-full border border-green-300 p-2 rounded"
    />
  </div>

  {/* key fector */}
  {/* Key Factors */}
<div className="border p-3 rounded border-green-300 space-y-2">
  <h2 className="font-semibold">Key Factors</h2>

  <input
    name="peRatio"
    placeholder="P/E Ratio"
    value={swingStock.keyFactors.peRatio}
    onChange={(e) => handleNestedChange("keyFactors", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="roe"
    placeholder="ROE"
    value={swingStock.keyFactors.roe}
    onChange={(e) => handleNestedChange("keyFactors", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="eps"
    placeholder="EPS"
    value={swingStock.keyFactors.eps}
    onChange={(e) => handleNestedChange("keyFactors", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="marketCap"
    placeholder="Market Cap"
    value={swingStock.keyFactors.marketCap}
    onChange={(e) => handleNestedChange("keyFactors", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="bookValue"
    placeholder="Book Value"
    value={swingStock.keyFactors.bookValue}
    onChange={(e) => handleNestedChange("keyFactors", e)}
    className="w-full border border-green-300 p-2 rounded"
  />
</div>

{/* year section  */}
{/* Year Data */}
<div className="border p-3 rounded border-green-300 space-y-2">
  <h2 className="font-semibold">Year Data</h2>

  <input
    name="year1"
    placeholder="Year 1"
    value={swingStock.year.year1}
    onChange={(e) => handleNestedChange("year", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year2"
    placeholder="Year 2"
    value={swingStock.year.year2}
    onChange={(e) => handleNestedChange("year", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year3"
    placeholder="Year 3"
    value={swingStock.year.year3}
    onChange={(e) => handleNestedChange("year", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year4"
    placeholder="Year 4"
    value={swingStock.year.year4}
    onChange={(e) => handleNestedChange("year", e)}
    className="w-full border border-green-300 p-2 rounded"
  />
</div>

{/* profit section  */}
{/* Profit Data */}
<div className="border p-3 rounded border-green-300 space-y-2">
  <h2 className="font-semibold">Profit Data</h2>

  <input
    name="year1"
    placeholder="Profit Year 1"
    value={swingStock.profit.year1}
    onChange={(e) => handleNestedChange("profit", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year2"
    placeholder="Profit Year 2"
    value={swingStock.profit.year2}
    onChange={(e) => handleNestedChange("profit", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year3"
    placeholder="Profit Year 3"
    value={swingStock.profit.year3}
    onChange={(e) => handleNestedChange("profit", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="year4"
    placeholder="Profit Year 4"
    value={swingStock.profit.year4}
    onChange={(e) => handleNestedChange("profit", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

   <input
    name="type"
    placeholder="Profit type"
    value={swingStock.profitType.type}
    onChange={(e) => handleNestedChange("profitType", e)}
    className="w-full border border-green-300 p-2 rounded"
  />
</div>


{/* Holding Data */}
<div className="border p-3 rounded border-green-300 space-y-2">
  <h2 className="font-semibold">Holding Data</h2>

  <input
    name="promoter"
    placeholder="Promoter Holding"
    value={swingStock.holding.promoter}
    onChange={(e) => handleNestedChange("holding", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="fii"
    placeholder="FII Holding"
    value={swingStock.holding.fii}
    onChange={(e) => handleNestedChange("holding", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="dii"
    placeholder="retail"
    value={swingStock.holding.dii}
    onChange={(e) => handleNestedChange("holding", e)}
    className="w-full border border-green-300 p-2 rounded"
  />

  <input
    name="public"
    placeholder="other"
    value={swingStock.holding.public}
    onChange={(e) => handleNestedChange("holding", e)}
    className="w-full border border-green-300 p-2 rounded"
  />
</div>
<div className="button h-15 w-full flex justify-center items-center">
<button type="submit"  className={`min-w-20 pointer-coarse: pr-3 pl-3 text-white h-10 rounded-2xl shape ${active ? "block" : ""}`}>{active ? "Add stock" : "wait.."}</button>
</div>
</form>
  </div>
  </>)
}
export default AddSwingStock;