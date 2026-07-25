import React from "react";
import ControlCard from "./controlCard";
import Navbar from "../others/navbar";

function Admin(){
    return(<>
    <Navbar></Navbar>
    <div className="admin flex w-full min-h-screen justify-start gap-10 p-3 mt-20">
        <ControlCard name={"Addstock"} link={"/addStock"}></ControlCard> 
        <ControlCard name={"AddIndex"} link={"/addIndexDirection"}></ControlCard> 
        <ControlCard name={"AddPost"} link={"/addpost"}></ControlCard>   
    </div>
    
    </>)
}

export default Admin;