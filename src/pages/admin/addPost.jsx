import React, { useState } from "react";
import Navbar from "../others/navbar";
import { addPost } from "../../firebase/services/rockService";
import { useNavigate } from "react-router-dom";


function AddPost() {
   const navigate = useNavigate();
  const [post, setPost] = useState({
    date: "",
    heading: "",
    details: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Firebase Function
    const addRockPosts = async ()=>{
    try{
     const res = await addPost(post);
     navigate("/result" , {state:{code:200 , value:true , next:"/rock"}})
    }catch(error){
     navigate("/result" , {state:{code:400 , value:false , next:"/rock"}}) 
    }
    }

    addRockPosts(post)
    }



  return (
   <>
   <Navbar></Navbar>
    <div className="min-h-screen mt-20 bg-slate-100 flex justify-center items-center p-6">

      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Add Blog Post
        </h1>

        <p className="text-gray-500 mt-2">
          Publish market news, stock analysis and educational content.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-8"
        >

          {/* Date */}

          <div>
            <label className="block font-semibold mb-2">
              Publish Date
            </label>

            <input
              type="date"
              name="date"
              value={post.date}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Heading */}

          <div>
            <label className="block font-semibold mb-2">
              Heading
            </label>

            <input
              type="text"
              name="heading"
              value={post.heading}
              onChange={handleChange}
              placeholder="Enter Blog Heading..."
              className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Details */}

          <div>
            <label className="block font-semibold mb-2">
              Details
            </label>

            <textarea
              rows={12}
              name="details"
              value={post.details}
              onChange={handleChange}
              placeholder="Write your complete article here..."
              className="w-full border rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Buttons */}

          <div className="flex gap-4">

            <button
              type="submit"
              className="shape  text-white px-8 py-3 rounded-xl font-semibold"
            >
              Publish Post
            </button>

            <button
              type="reset"
              onClick={() =>
                setPost({
                  date: "",
                  heading: "",
                  details: "",
                })
              }
              className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-xl font-semibold"
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
   </>
  );
}

export default AddPost;