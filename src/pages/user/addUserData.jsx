import React, { use, useState } from "react";
import { useLocation } from "react-router-dom";
import { register } from "../service/userSerivce";
import { useNavigate } from "react-router-dom";


function AddUserData() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({id:location.state?.id || "", userName: "", email:location.state?.email || "", number: "", city: "", age: "",about: "" });
    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
         const res = await register(user);
         navigate("/result",{state:{message:"succcess" , value:true, next:"/"}})   
        }catch(error){
         navigate("/result",{state:{message:error.message , value:false , next:"/"}})   
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-100 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Complete Your Profile</h1>
                    <p className="text-gray-500 mt-2">Tell us a little more about yourself</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" name="number" value={user.number} onChange={handleChange} placeholder="Enter phone number" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                            <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Enter your age" min="1" max="100" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="Enter your city" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" required />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">About You</label>
                            <span className="text-xs text-gray-400">Max 50 words</span>
                        </div>

                        <textarea name="about" value={user.about} onChange={handleChange} placeholder="Tell us something about yourself..." rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-green-500" required />
                    </div>

                    <button type="submit" className="w-full py-3.5 bg-linear-to-r from-emerald-500 via-teal-600 to-emerald-700 hover:opacity-95 text-white font-semibold rounded-xl transition duration-200">
                        Continue
                    </button>

                </form>
            </div>
        </div>
    );
}

export default AddUserData;
