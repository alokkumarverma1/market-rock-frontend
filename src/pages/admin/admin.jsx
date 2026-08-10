import React from "react";
import ControlCard from "./controlCard";
import Navbar from "../others/navbar";

function Admin(){
    return(<>
    <Navbar></Navbar>
     <div className="admin w-full pt-15 bg-white dark:bg-black min-h-screen grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 gap-5">
        <ControlCard name={"Addstock"} link={"/addStock"}></ControlCard> 
        <ControlCard name={"AddIndex"} link={"/addIndexPrice"}></ControlCard> 
        <ControlCard name={"AddPost"} link={"/addpost"}></ControlCard>  

     </div>
    
    </>)
}

export default Admin;