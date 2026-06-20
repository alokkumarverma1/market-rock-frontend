import React from "react";
import Navbar from "../others/navbar";
import StockCard from "./rockStocks/StockCard,";
import RockHeading from "./rockHeading";
import RockPostCard from "./rockPost/rockPostCard";
import RockIndexCard from "./rockindex/rockIndexCard";
import Heading from "../others/heading";
import IndexPredection from "../others/IndexPredection";


function Rock(){
    return(<>
    <Navbar></Navbar>
    <div className="rockPage mt-20">


{/* stock suggestion section  */}
<RockHeading heading={"Trending Stock"}></RockHeading>
<div className="stocks scroller h-60 gap-10 p-5">
<StockCard name={"Adani"} price={"1423"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>
<StockCard color={"#ecaaaa"}></StockCard>
<StockCard name={"Adani"} price={"1423"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>
<StockCard name={"Adani"} price={"1423"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>
<StockCard name={"Adani"} price={"1423"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>
<StockCard name={"Adani"} price={"1423"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></StockCard>

</div>


{/* index suggestion section  */}
<RockHeading heading={"Index Update"}></RockHeading>
<div className="index h-80 sm:h-120 border mt-2 w-full">
<IndexPredection vlaue={"60"}></IndexPredection>
</div>


</div>
<RockHeading heading={"Today tagete price"}></RockHeading>
<div className=" w-full p-5 scroller flex gap-5 mb-20">
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>
<RockIndexCard name={"Adani"} price={"45500 put"} date={"18-6-2026"} time={"9:30 Am"} color={"#7ce0c0"}></RockIndexCard>

</div>

{/* personal pnl of rock team */}



{/* rock post for update */}
<Heading heading={"AllPost"}></Heading>
<div className="rockpost h-100 w-full flex p-3 scroller flex-col gap-5">
    
      <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
  <RockPostCard></RockPostCard>
     <RockPostCard></RockPostCard>
      <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
        <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
  <RockPostCard></RockPostCard>
     <RockPostCard></RockPostCard>
      <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
        <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
  <RockPostCard></RockPostCard>
     <RockPostCard></RockPostCard>
      <RockPostCard></RockPostCard>
       <RockPostCard></RockPostCard>
       


</div>




 
    
    </>)
}

export default Rock;