import React, { useEffect, useState } from "react";
import Heading from "../others/heading";
import { userProfileData } from "../../firebase/services/userServiceFb";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Oval } from "react-loader-spinner";
import Navbar from "../others/navbar";

function Profile() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, async (currentUser) => {
            try {  if (!currentUser) { navigate("/result", { state: { message: "Please login first", value: false, next: "/login" } });
                    return;
                     }
                const userdata = await userProfileData(currentUser);
                setUser(userdata || {});
            } catch (error) {
                navigate("/result", { state: { message: error.message, value: false, next: "/login" } });
            } finally {
                setLoading(false);
            }
        });
        return () => unsub();
    }, [navigate]);

    if (loading) {
        return (
            <div className="w-full h-dvh flex justify-center items-center bg-gray-50 dark:bg-black">
                <Oval height={45} width={45} color="#22c55e" />
            </div>
        );
    }

    return (
       <>
       <Navbar></Navbar>
        <div className="min-h-dvh bg-gray-50 dark:bg-black pt-20 px-4 sm:px-8 pb-10">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-zinc-950 rounded-3xl shadow-md border border-green-100 dark:border-zinc-800 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                        <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-950 flex justify-center items-center">
                            <i className="fa-solid fa-user text-4xl text-green-600"></i>
                        </div>

                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{user.userName || "User"}</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">{user.email || "N/A"}</p>
                            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-100 dark:bg-green-950 text-green-600 text-sm font-medium">{user.role || "USER"}</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-5">
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="font-semibold text-gray-800 dark:text-white mt-1">{user.number || "N/A"}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-5">
                            <p className="text-sm text-gray-500">City</p>
                            <p className="font-semibold text-gray-800 dark:text-white mt-1">{user.city || "N/A"}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-5">
                            <p className="text-sm text-gray-500">Age</p>
                            <p className="font-semibold text-gray-800 dark:text-white mt-1">{user.age || "N/A"}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-5">
                            <p className="text-sm text-gray-500">Account</p>
                            <p className="font-semibold text-green-600 mt-1">Active</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gray-50 dark:bg-zinc-900 rounded-2xl p-5">
                        <p className="text-sm text-gray-500">About</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2 leading-6">{user.about || "No information available."}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <Heading heading="Your Learning" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mt-5">
                    <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-green-100 dark:border-zinc-800 shadow-md p-6">
                        <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-950 flex justify-center items-center">
                            <i className="fa-solid fa-book-open text-green-600 text-xl"></i>
                        </div>
                        <p className="text-gray-500 mt-5">Courses</p>
                        <h2 className="text-3xl font-bold text-green-600 mt-1">0</h2>
                        <p className="text-sm text-gray-400 mt-1">Enrolled courses</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-green-100 dark:border-zinc-800 shadow-md p-6">
                        <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-950 flex justify-center items-center">
                            <i className="fa-solid fa-certificate text-green-600 text-xl"></i>
                        </div>
                        <p className="text-gray-500 mt-5">Certificates</p>
                        <h2 className="text-3xl font-bold text-green-600 mt-1">0</h2>
                        <p className="text-sm text-gray-400 mt-1">Earned certificates</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Profile;