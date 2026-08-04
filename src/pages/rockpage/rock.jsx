import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import SmallHeading from "../others/smallHeading";
import RockPostCard from "./rockPost/rockPostCard";
import RockIndexCard from "./rockindex/rockIndexCard";
import Heading from "../others/heading";
import IndexPredection from "./rockindex/IndexPredection";
import MyNetWorth from "./rockPnlReport/mynetworth";
import Footer from "../others/footer";
import IpoCard from "./rockIpos/ipoCard";
import RightArrow from "../others/rightArrow";
import SwingStockCard from "./rockSwingStock/swingStockCard";
import { getAllSwingStocksService } from "../../firebase/services/rockService";
import { AllIndexPrice ,getAllPost } from "../../firebase/services/rockService";


function Rock(){


const [swingstock , setSwingstock] = useState([])    
const [indexDirection , setIndexDirection] = useState({})
const [indexPrice , setIndexPrice] = useState([])
const [post , setPost] = useState([])

// firebase functions
useEffect(()=>{

// get all swing stock  
const AllSwingStock = async ()=>{
   try{
     const data = await getAllSwingStocksService();
     setSwingstock(data)
   }catch(error){
    console.log("something wrong")
   }}
 
// get all index prices
const getAllIndexPrice = async ()=>{
   try{
     const data = await AllIndexPrice();
     setIndexPrice(data)
   }catch(error){
    console.log("something wrong")
   }}   

// get all post 
const allRockPost = async()=>{
 try{
   const res =await getAllPost();
  setPost(res)
 }catch(error){
  console.log(error.message);
 }
  
}

// call all function    
AllSwingStock();
getAllIndexPrice()
allRockPost();

},[])



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
<input type="text" name="" className="w-full h-full rounded-[10px] outline-none bg-gray-100 p-3" placeholder="serch stock" />
</div>

<div className="stocks  scroller h-60 gap-7 pt-5 pb-5 ">
  {swingstock.length == 0 ? <div className="h-full w-full flex justify-center items-center text-gray-500"><p>No stock..</p></div>:
    swingstock.map((data , key)=>(
        <SwingStockCard data={data} key={data.id}></SwingStockCard>
    ))
  }
</div>
<RightArrow></RightArrow>

{/* index predection */}
<SmallHeading heading={"Index prediction"}></SmallHeading>
<div className="index-chart h-70 sm:h-100  mb-20 sm:mb-0 mt-2 w-full">
<IndexPredection vlaue={"90"}></IndexPredection>
</div>


{/* rock index card */}
<SmallHeading heading={"Today target price"}></SmallHeading>
 {/* <div className="month-pnl mt-2  h-10  w-full gap-10 flex justify-center items-center sm:w-50 shadow-md border border-gray-300 rounded-2xl">
   <p className="text-[13px]">Month P&L - </p> <p className="font-semibold"> 80%</p>
 </div> */}
 <div className=" w-full min-h-50 pt-5 pb-5 scroller flex gap-5 sm:mb-10">
  {
    indexPrice.length == 0 ? <div className="flex justify-center w-full h-full items-center text-gray-600">No Trades...</div> : indexPrice.map((data ,key)=>(
      <RockIndexCard data={data} key={key}></RockIndexCard>
    ))
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