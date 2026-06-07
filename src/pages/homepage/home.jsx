import React from "react";
import Navbar from "../others/navbar";
import Homecard from "../others/homecard";


function Home(){
    return(<>
    <Navbar></Navbar>
   <div className="home h-screen w-full">

    {/* \hero section  */}
   <div className="relative h-screen flex flex-col justify-center items-center w-full overflow-hidden">
    <div className="data flex flex-col mb-15 justify-center items-center w-full">
           <h1 className="font-bold sm:text-9xl text-5xl sm:block flex flex-col justify-center items-center"><span className=" font-bold metal-green"> MARKET</span> <span className="text-white">ROCK</span></h1>
           <p className="text-center text-[16px] sm:pr-60 sm:pl-60 p-3">The stock market is more than a game of numbers—it's a game of insight. Track real-time market data, uncover hidden opportunities, master investing from beginner to advanced, and make smarter buy and sell decisions with powerful analysis.</p>
    </div>
   <video autoPlay muted loop playsInline className="h-80 absolute -bottom-10 -z-20 w-full">
  <source src="homevideo.mp4" type="video/mp4"/>
    </video>
   </div>

    {/* other section  */}
    <div className="cardsection h-50 w-full flex justify-around items-center">
    <Homecard  number={"100+"} data={"Active user"}></Homecard>
    <Homecard number={"23%"} data={"Grow last year"}></Homecard>
    <Homecard number={"#1"} data={"Stock market learning"}></Homecard>
    </div>

    </div>
   </>)
}

export default Home;