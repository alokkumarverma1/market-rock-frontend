import React from "react";
import Footer from "../others/footer";

function CourseCard(){
    return(<>
    <div className="coursecard  min-h-50 p-2  gap-3 min-w-65 max-w-65 flex-col flex-wrap sm:flex-nowrap  flex  rounded-2xl shadow-md hover:shadow-xl border-2 border-green-300">
       <div className="image-area h-35 w-full rounded-2xl bg-gray-200 "></div>
       <div className="data mt-2">
        <h1 className="font-semibold text-[20px]">All Candilstic</h1>
        <p>learn all candilastic pattern from basic to advance</p>
       </div>
       <button className="shape w-25 h-9 rounded-2xl border border-white text-white">Explore</button>

    </div>

    </>)
}
export default CourseCard;