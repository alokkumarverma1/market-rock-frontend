import React from "react";
import Navbar from "../others/navbar";
import Homecard from "../others/homecard";
import Heading from "../others/heading";
import Footer from "../others/footer";
import ReviewCard from "../others/reviewCard";
import IndexPredection from "../others/IndexPredection";




function Home(){
    return(<>
    <Navbar></Navbar>
   <div className="home min-h-screen w-full">

  {/* hero section */}
  <div className="relative min-h-screen flex  lg:flex-row justify-center lg:justify-around flex-col-reverse items-center w-full overflow-hidden px-4 py-10">
    {/* LEFT SECTION */}
    <div className="first w-full lg:w-137.5 p-2 lg:p-10 text-center lg:text-left">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 font-bold metal-green">
        MARKET ROCK
      </h1>

      <p className="text-sm md:text-base">
        The stock market is more than a game of numbers—it's a game of insight.
        Track real-time market data, uncover hidden opportunities, master investing
        from beginner to advanced, and make smarter buy and sell decisions with powerful analysis.
      </p>

      <button className="h-10 w-28 text-white shape rounded-2xl mt-5 shadow-md shadow-gray-300 border border-white">
        Start
      </button>
    </div>

    {/* RIGHT SECTION */}
    <div className="secend relative flex justify-center items-center lg:mt-0">

      <div className="sm:h-52 sm:w-52 h-40 w-40 md:h-64 md:w-64 lg:h-70 lg:w-70 rounded-full border-8 border-green-200 flex justify-center items-center">
        <div className="h-full w-full rounded-full border-8 border-green-300 flex justify-center items-center">
          <div className="h-full w-full rounded-full border-8 border-green-400 relative">
            {/* bottom card */}
            <div className="shape bg-white border border-gray-200 shadow-md h-15 w-25 sm:h-24 sm:w-40 md:h-28 md:w-48 rounded-2xl absolute -bottom-5 -left-15 sm:-left-24 md:-left-30">
              <img src="hero1.png" className="w-full h-full rounded-2xl object-cover" alt="" />
            </div>

            {/* top card */}
            <div className="shape bg-white border border-gray-200 shadow-md h-15 w-25 sm:h-24 sm:w-40 md:h-28 md:w-48 rounded-2xl absolute -top-5 -right-15 sm:-right-24 md:-right-30">
              <img src="hero2.png" className="w-full h-full rounded-2xl object-cover" alt="" />
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>

</div>

     {/* other section  */}
    <div className="cardsection h-40 gap-2 w-full flex justify-around items-start">
    <Homecard  number={"100+"} data={"Active user"}></Homecard>
    <Homecard number={"23%"} data={"Grow last year"}></Homecard>
    <Homecard number={"#1"} data={"Stock market learning"}></Homecard>
    </div>

    {/* today index update */}
    <Heading heading1={"Today"} heading2={"Index"}></Heading>
    <div className="index h-120 w-full">
    <IndexPredection vlaue={"60"}></IndexPredection>
    </div>

      {/* learn section of home page */}
       <Heading heading={"Learn basic to advance"}></Heading>
      <div className="learn h-100 mt-10 w-full flex justify-start flex-col items-center">
        <div className="top w-full min-h-20 flex sm:flex-row flex-col justify-around items-center gap-4">
            <div className="left text-center">
                <h1 className="font-bold text-[15px]">All concept</h1>
                <p>learn all important concept</p>
            </div>
            <div className="right text-center">
                <h1 className="font-bold text-[15px]">live market </h1>
                <p>anlaysis is live market</p>
            </div>
        </div>

        <div className="middle h-40 w-full flex justify-center items-center">
           <div className="middle h-40 w-60 rounded-2xl">
            <img src="learn-home1.png" className="h-full w-full" alt="" />
           </div>
        </div>

           <div className="top w-full h-20  flex sm:flex-row flex-col justify-around items-center gap-4">
            <div className="left text-center">
                <h1 className="font-bold text-[15px] ">Proper discipline</h1>
                <p>Know how to manage discipline</p>
            </div>
            <div className="right text-center">
                <h1 className="font-bold text-[15px]">Discuss with us</h1>
                <p>proper doubt clear in market</p>
            </div>
        </div>
      </div>


      {/* cirtificate area */}
       <Heading heading={"Get certificate"}></Heading>
      <div className="certificate gap-4 p-5 min-h-100 w-full flex sm:flex-row flex-col justify-around items-center">
        <div className="left min-w-50 max-w-200 p-2 text-center">
            <p>This certificate is proudly presented by Market Rock in recognition of the successful completion of the course with outstanding performance, exceptional dedication, continuous effort, and a commitment to excellence in learning and professional growth.</p>
        </div>

       <div className="right min-w-50 h-full flex justify-center items-center">
         <div className="min-h-40 max-h-50 min-w-60 max-w-70 rounded-2xl bg-gray-300"></div>
       </div>

      </div>

      {/* review section */}
 <Heading heading={"Some reviews"}></Heading>

<div className="review w-full mb-20 mt-10  scroller p-3 gap-10 bg-gray-50">
<ReviewCard
  name={"Rahul Sharma"}
  review={"Market Rock helped me understand market trends easily. The interface is simple and clean."}
/>
<ReviewCard
  name={"Priya Singh"}
  review={"Amazing platform for beginners. The market insights are very useful."}
/>
<ReviewCard
  name={"Aman Verma"}
  review={"The UI looks modern and the stock information is easy to understand."}
/>
<ReviewCard
  name={"Sneha Gupta"}
  review={"I check Market Rock every day. The experience is smooth and fast."}
/>
<ReviewCard
  name={"Rohit Kumar"}
  review={"Excellent platform for tracking market movements and learning new concepts."}
/>
<ReviewCard
  name={"Anjali Mishra"}
  review={"The dashboard design is beautiful and the features are very helpful."}
/>
<ReviewCard
  name={"Vikas Patel"}
  review={"Market Rock makes market analysis simple and accessible for everyone."}
/>
<ReviewCard
  name={"Neha Yadav"}
  review={"Very responsive website with useful insights and a great user experience."}
/>
<ReviewCard
  name={"Arjun Tiwari"}
  review={"The platform provides clear information and helps me stay updated."}
/>
<ReviewCard
  name={"Karan Saxena"}
  review={"One of the best platforms for understanding market trends and data."}
/>


      </div>



      {/* footer */}
      <Footer></Footer>
   </>)
}

export default Home;