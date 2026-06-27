import React from "react";
import Footer from "../others/footer";

function CourseCard(){
    return(<>
    <div className="coursecard  min-h-50 sm:h-60 gap-3 w-full flex-wrap sm:flex-nowrap p-5 flex justify-around items-center rounded-2xl shadow-md hover:shadow-xl border-gray-50">
        <div className="left bg-gray-300 border h-50 sm:h-full w-50 rounded-2xl"></div>
        <div className="right min-h-10  w-full sm:w-[60%]">
            <h1 className="font-bold mb-3">Learn basic to advance</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero natus et nisi numquam soluta unde iste illum! Assumenda iste sunt molestiae voluptatum. Aspernatur earum facilis, at doloremque sed placeat odit.</p>
            <button className="h-9 w-25 mt-3 rounded-2xl shape text-white">Explore</button>
        </div>

    </div>

    </>)
}
export default CourseCard;