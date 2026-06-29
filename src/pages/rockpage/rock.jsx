import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import StockCard from "./rockStocks/StockCard,";
import RockHeading from "./rockHeading";
import RockPostCard from "./rockPost/rockPostCard";
import RockIndexCard from "./rockindex/rockIndexCard";
import Heading from "../others/heading";
import IndexPredection from "../others/IndexPredection";
import MyNetWorth from "./rockPnlReport/mynetworth";
import Footer from "../others/footer";

// firebase 
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Rock(){

// firebase data
const [stock , setStock] = useState([])    


// firebase

useEffect(()=>{
const res = async ()=>{
     const querySnapshot =  await getDocs(collection(db, "stocks"));
     const datas = querySnapshot.docs.map((doc) => ({
     id:doc.id,
      ...doc.data(),
    }));
     setStock(datas)
  }
res();
},[])


    // networt

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
    <div className="rockPage mt-20">


{/* stock suggestion section  */}
<RockHeading heading={"Trending Stock"}></RockHeading>
<div className="stocks scroller h-60 gap-10 p-5">
{
    stock.map((data , key)=>(
        <StockCard name={data.name} price={data.price} date={data.data} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>
    ))
}
</div>


{/* index suggestion section  */}
<RockHeading heading={"Index Update"}></RockHeading>
<div className="index h-80 sm:h-120 mb-20 sm:mb-2 mt-2 w-full">
<IndexPredection vlaue={"60"}></IndexPredection>
</div>


</div>
<RockHeading heading={"Today tagete price"}></RockHeading>
<div className=" w-full p-5 scroller flex gap-5 mb-20">
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} direction={true}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} direction={true}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} direction={true}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} direction={true}></RockIndexCard>

</div>

{/* personal pnl of rock team */}
<RockHeading heading={"Monthly profits"}></RockHeading>
<div className="mynetworthcart  w-full p-2 mb-25 sm:mb-5 flex justify-center items-center">
    <MyNetWorth data={netWorthData}></MyNetWorth>
</div>


{/* rock post for update */}
<Heading heading={"All Post"}></Heading>
<div className="rockpost mt-10 h-100 mb-20 sm:mb-5 w-full flex p-3 scroller flex-col gap-5">
    
     <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
    <RockPostCard date={"18-06-2026"} heading={"adani enterpricthe most important "} details={"this is one of the best adani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most importantadani enterpricthe most important"}></RockPostCard>
  
      
       


</div>

<Footer></Footer>

 
    
    </>)
}

export default Rock;