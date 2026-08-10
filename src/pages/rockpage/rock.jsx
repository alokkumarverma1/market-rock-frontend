import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import SmallHeading from "../others/smallHeading";
import RockPostCard from "./rockPost/rockPostCard";
import RockIndexCard from "./rockindex/rockIndexCard";
import Heading from "../others/heading";
import MyNetWorth from "./rockPnlReport/mynetworth";
import Footer from "../others/footer";
import IpoCard from "./rockIpos/ipoCard";
import RightArrow from "../others/rightArrow";
import SwingStockCard from "./rockSwingStock/swingStockCard";
import { getAllSwingStocksService, } from "../../firebase/services/rockService";
import { AllIndexPrice ,getAllPost } from "../../firebase/services/rockService";
import { IndexMonthProfit } from "../../firebase/services/rockService";

function Rock(){


const [swingstock , setSwingstock] = useState([])    
const [indexDirection , setIndexDirection] = useState({})
const [indexPrice , setIndexPrice] = useState([])
const [post , setPost] = useState([])
const[search,setSearch] = useState("")
const [filteredStocks, setFilteredStocks] = useState([]);
const [profit,setProfit] = useState("");

// firebase functions
useEffect(()=>{

// get all swing stock  
const AllSwingStock = async ()=>{
     const data = await getAllSwingStocksService();
     setSwingstock(data);
     setFilteredStocks(data)
}
 
// get all index prices
const getAllIndexPrice = async ()=>{
     const data = await AllIndexPrice();
     setIndexPrice(data)
}  

// get index total month profit 
 const allProfit =async()=>{
   const res =await IndexMonthProfit();
   setProfit(res.total)
   }


// get all post 
const allRockPost = async()=>{
   const res =await getAllPost();
  setPost(res)
}

// call all function    
AllSwingStock();
getAllIndexPrice()
allRockPost();
allProfit();

},[])

// filter stock 
 useEffect(()=>{
 const filter = ()=>{
    let stocks = swingstock.filter((e)=> e.stockName.toLowerCase().includes(search.toLowerCase()));
    setFilteredStocks(stocks)
  }
 filter();
 },[search])



    const netWorthData = [
  { month: "Jan", worth: 10000 },
  { month: "Feb", worth: 120000 },
  { month: "Mar", worth: 15000 },
  { month: "Apr", worth: 180000 },
  { month: "Jan", worth: 10000 },
  { month: "Feb", worth: 120000 },
  { month: "Mar", worth: 15000 },
  { month: "Apr", worth: 180000 },
  { month: "Jan", worth: 10000 },
  { month: "Feb", worth: 120000 },
  { month: "Mar", worth: 15000 },
  { month: "Apr", worth: 180000 },
];



return(<>
 <Navbar></Navbar>
<div className="rockPage bg-gray-50 dark:bg-black mt-10 p-2 sm:p-4">

{/* swing stock suggestion section  */}
<SmallHeading heading={"Swing Stock"}></SmallHeading>

<div className="swing-search w-full h-9 mb-2 ">
<input type="text" name="" className="w-full h-full rounded-[10px] outline-none bg-gray-200 dark:text-white dark:bg-zinc-800 p-3" placeholder="serch stock" onChange={(e) => setSearch(e.target.value)} />
</div>

<div className="stocks  scroller h-40  gap-4 pt-5 pb-5 ">
  {filteredStocks.length == 0 ? <div className="h-full w-full flex justify-center items-center text-gray-500"><p>No stock..</p></div>:
    filteredStocks.map((data , key)=>(<SwingStockCard data={data} key={data.id}></SwingStockCard>))
  }
</div>
<RightArrow></RightArrow>

{/* rock index card */}
<SmallHeading heading={"Index price"}></SmallHeading>
 <div className="month-pnl mt-2 bg-white dark:border-none dark:bg-zinc-800 dark:text-white  h-10  w-full gap-10 flex justify-center items-center sm:w-50 shadow-md border border-gray-300 rounded-2xl">
   <p className="text-[13px] text-black dark:text-white font-bold">Month P&L - </p> <p className={` font-semibold ${profit > 0 ? "text-green-600" : "text-red-500"}`}>{profit} %</p>
 </div>
 <div className=" w-full min-h-50 pt-5 pb-5 scroller flex gap-5 sm:mb-10">
  {
    indexPrice.length == 0 ? <div className="flex justify-center w-full h-full items-center text-gray-600">No Trades...</div> 
    : indexPrice.map((data ,key)=>(<RockIndexCard data={data} key={key}></RockIndexCard>))
  }
</div>
<RightArrow></RightArrow>

{/* most popular ipo*/}
<SmallHeading heading={"Best upcoming ipos"}></SmallHeading>
<div className="ipo-details w-full h-55 justify-center items-center p-5  flex scroller gap-3">
<h1 className="text-gray-600">Comming soon...</h1>
</div>
<RightArrow></RightArrow>

{/* personal pnl of rock team */}
<SmallHeading heading={"Monthly profit"}></SmallHeading>
<div className="mynetworthcart  w-full sm:mb-5 flex justify-center items-center">
    <MyNetWorth data={netWorthData}></MyNetWorth>
</div>


{/* rock post for update */}
<Heading heading={"All Post"}></Heading>
<div className="rockpost mt-10 min-h-100 mb-20  sm:mb-5 w-full flex p-3 scroller flex-col gap-5">
{
  post.length === 0 ? <div className="w-full h-full  flex justify-center items-center"><p className="text-gray-700">No post...</p></div> : post.map((data , key)=>(
    <RockPostCard data={data} key={key}></RockPostCard>
  )) 
}
</div>

 {/* end */}

</div>
<Footer></Footer>
 
    
    </>)
}

export default Rock;