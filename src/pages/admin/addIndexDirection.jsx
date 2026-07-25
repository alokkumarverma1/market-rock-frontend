import React, { useState } from "react";
import Navbar from "../others/navbar";
import { AddDirection } from "../../firebase/services/rockService";
import { AddIndexPrice } from "../../firebase/services/rockService";
import { useNavigate } from "react-router-dom";


function AddIndexDirection() {
   
  const navigate = useNavigate();  
  const [indexDirection, setIndexDirection] = useState({
    direction:0,
    date: "",
  });

  const [indexPrice, setIndexPrice] = useState({
    name: "",
    price: "",
    direction: "",
    sl:"",
    entry:"",
    minTarget:"",
    maxTarget:"",
    time: "",
    date: "",
  });

  // Add Overall Index Direction
  const IndexDirection = async (e) => {
    e.preventDefault();
    try{
    const res = await AddDirection(indexDirection);
    navigate("/result" , {state:{code:200 , value:true , next:"/rock"}})
    }catch(erroe){
     console.log(error.message)   
    navigate("/result" , {state:{code:400 , value:false , next:"/rock"}})
    }

  };

  // Add Trending Price
  const addTrendingPrice = async (e) => {
    e.preventDefault();
    try{
    const res = await AddIndexPrice(indexPrice);
    navigate("/result" , {state:{code:200 , value:true , next:"/rock"}})
    }catch(erroe){
     console.log(error.message)   
    navigate("/result" , {state:{code:400 , value:false , next:"/rock"}})
    }
  };

  return (<>
    <Navbar></Navbar>
    <div className="p-6 space-y-8 mt-20">

      {/* Overall Index Direction */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-5">
          Overall Index Direction
        </h2>

        <form onSubmit={IndexDirection} className="grid md:grid-cols-2 gap-4" >
          <input type="number" className="border p-3 rounded-lg" value={indexDirection.direction}  onChange={(e) => setIndexDirection({...indexDirection,direction: e.target.value,})}  />
          <input type="date" className="border p-3 rounded-lg" value={indexDirection.date} onChange={(e) =>setIndexDirection({...indexDirection, date: e.target.value,})}
          />
          <button type="summit" className="shape text-white py-3 rounded-lg md:col-span-2">Save Direction</button>
        </form>
      </div>


      {/* Trending Index Price */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-5">
          Trending Index Price
        </h2>

        <form
          onSubmit={addTrendingPrice}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Index Name"
            className="border p-3 rounded-lg"
            value={indexPrice.name}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Current Price"
            className="border p-3 rounded-lg"
            value={indexPrice.price}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                price: e.target.value,
              })
            }
          />

           <input
            type="number"
            placeholder="Current sl"
            className="border p-3 rounded-lg"
            value={indexPrice.sl}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                sl: e.target.value,
              })
            }
          />

           <input
            type="number"
            placeholder="Current entry"
            className="border p-3 rounded-lg"
            value={indexPrice.entry}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                entry: e.target.value,
              })
            }
          />

           <input
            type="number"
            placeholder="Current minTarget"
            className="border p-3 rounded-lg"
            value={indexPrice.minTarget}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                minTarget: e.target.value,
              })
            }
          />
           <input
            type="number"
            placeholder="Current MaxTarget"
            className="border p-3 rounded-lg"
            value={indexPrice.maxTarget}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                maxTarget: e.target.value,
              })
            }
          />

          <select
            className="border p-3 rounded-lg"
            value={indexPrice.direction}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                direction: e.target.value,
              })
            }
          >
            <option value="">Price Direction</option>
            <option value="call">call</option>
            <option value="put">put</option>
          </select>

          <input
            type="time"
            className="border p-3 rounded-lg"
            value={indexPrice.time}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                time: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="border p-3 rounded-lg md:col-span-2"
            value={indexPrice.date}
            onChange={(e) =>
              setIndexPrice({
                ...indexPrice,
                date: e.target.value,
              })
            }
          />

          <button className="shape text-white py-3 rounded-lg md:col-span-2" >
            Save Index Price
          </button>
        </form>
      </div>

    </div>
  </>);
}

export default AddIndexDirection;