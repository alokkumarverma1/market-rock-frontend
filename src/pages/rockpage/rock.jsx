import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import RockHeading from "./rockHeading";
import RockPostCard from "./rockPost/rockPostCard";
import RockIndexCard from "./rockindex/rockIndexCard";
import Heading from "../others/heading";
import IndexPredection from "./rockindex/IndexPredection";
import MyNetWorth from "./rockPnlReport/mynetworth";
import Footer from "../others/footer";
import IpoCard from "./rockIpos/ipoCard";
import RightArrow from "../others/rightArrow";
import SwingStockCard from "./rockSwingStock/swingStockCard";
import { AllSwingStocksService } from "../../firebase/services/rockService";
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
     const data = await AllSwingStocksService();
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
  const res =await getAllPost();
  setPost(res)
  
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
<div className="rockPage mt-10">

{/* stock suggestion section  */}
<RockHeading heading={"Swing Stock"}></RockHeading>

<div className="stocks  scroller h-60 gap-10 p-5">
  {swingstock.length == 0 ? <div className="h-full w-full flex justify-center items-center text-gray-500"><p>loading...</p></div>:
    swingstock.map((data , key)=>(
        <SwingStockCard data={data} key={data.id}></SwingStockCard>
    ))
  }
</div>
<RightArrow></RightArrow>


{/* index suggestion section  */}
<RockHeading heading={"Today index anlaysis"}></RockHeading>
<div className="all-index w-full mb-10 flex p-3 gap-2 scroller">
     <div className="factor h-15 min-w-30 border-green-300 border flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75"><h1 className="text-[12px]">BANKNIFTY</h1><p className="font-extralight">58700</p></div>
     <div className="factor h-15 min-w-30 border-green-300 border flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75"><h1 className="text-[12px]">NIFTY</h1><p className="font-extralight">26400</p></div>
     <div className="factor h-15 min-w-30 border-green-300 border flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75"><h1 className="text-[12px]">SENSEX</h1><p className="font-extralight">68500</p></div>

</div>

<div className="index-chart h-70 sm:h-100  mb-20 sm:mb-0 mt-2 w-full">
<IndexPredection vlaue={"60"}></IndexPredection>
</div>
</div>

{/* rock index card */}
<RockHeading heading={"Today tagete price"}></RockHeading>
<div className=" w-full h-60 p-5 scroller flex gap-5 sm:mb-10">
  {
    indexPrice.length == 0 ? <div className="flex justify-center w-full h-full items-center text-gray-600">Loading...</div> : indexPrice.map((data ,key)=>(
      <RockIndexCard data={data} key={key}></RockIndexCard>
    ))
  }
</div>
<RightArrow></RightArrow>

{/* most popular ipo*/}
<RockHeading heading={"Best upcoming ipos"}></RockHeading>
<div className="ipo-details w-full h-55 justify-center items-center p-5  flex scroller gap-3">
<h1 className="text-gray-600">Comming soon...</h1>
</div>
<RightArrow></RightArrow>

{/* personal pnl of rock team */}
<RockHeading heading={"Monthly profits"}></RockHeading>
<div className="mynetworthcart  w-full p-2 mb-25 sm:mb-5 flex justify-center items-center">
    <MyNetWorth data={netWorthData}></MyNetWorth>
</div>


{/* rock post for update */}
<Heading heading={"All Post"}></Heading>
<div className="rockpost mt-10 h-100 mb-20 sm:mb-5 w-full flex p-3 scroller flex-col gap-5">
{
  post.map((data , key)=>(
    <RockPostCard data={data} key={key}></RockPostCard>
  ))
}
</div>

<Footer></Footer>

 
    
    </>)
}

export default Rock;