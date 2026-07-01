import React from "react";

function ReviewCard({name , review}){
    return(<>
    <div className="reviewcard p-3 min-w-60 flex justify-center items-center flex-col text-center shadow-md rounded-2xl ">
     <div className="image h-13 w-13 rounded-full bg-gray-300 flex justify-center items-center text-4xl"> <i className="fa-solid fa-user text-gray-500 text-xl"></i></div>
     <h1>{name}</h1>
     <p className="text-[13px] mt-4">{review}</p>
     <p className="text-yellow-500"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>




    </div>
    </>)
}

export default ReviewCard;