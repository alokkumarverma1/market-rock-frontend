import React from "react";
import ControlCard from "./controlCard";
import Navbar from "../others/navbar";

function Admin(){
    return(<>
    <Navbar></Navbar>
    <div className="admin flex justify-start gap-10 p-3 mt-20">
        <ControlCard name={"Addstock"} link={"/addStock"}></ControlCard>       
    </div>
    
    </>)
}

export default Admin;