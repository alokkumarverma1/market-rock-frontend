import React from "react";
import Navbar from "../others/navbar";
import CourseCard from "./courseCard";
import Footer from "../others/footer";
import Heading from "../others/heading";

function Learn(){
    return(<>
    <Navbar></Navbar>
    <div className="mt-10 sm:mt-20"></div>
    <Heading heading={"All Course"}></Heading>
    <div className="learn w-full min-h-screen flex justify-center items-center gap-5 p-5 flex-wrap">
    <p>No course</p>



    </div>
    <Footer></Footer>
    </>)
}

export default Learn;