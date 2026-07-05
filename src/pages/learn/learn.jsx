import React from "react";
import Navbar from "../others/navbar";
import CourseCard from "./courseCard";
import Footer from "../others/footer";
import Heading from "../others/heading";
import RockHeading from "../rockpage/rockHeading";
import RightArrow from "../others/rightArrow";

function Learn(){
    return(<>
    <Navbar></Navbar>
    <div className="mt-10 sm:mt-20"></div>
    <RockHeading heading={"Learn with rock team"}></RockHeading>
    <div className="learn-with-rock-tema flex justify-center items-center w-full min-h-65 rounded-2xl gap-5 p-5 flex-wrap">
    <p>Comming soon...</p>
    </div> 
    <RockHeading heading={"Free resource"}></RockHeading>
    <div className="free-resource mb-1 flex scroller gap-5 p-3 min-h-30 w-full">
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
    </div>
   <RightArrow></RightArrow>
    <Footer></Footer>
    </>)
}

export default Learn;