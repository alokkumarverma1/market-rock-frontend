import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import Heading from "../others/heading";
import { userProfileData } from "../../firebase/services/profileService";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Oval } from "react-loader-spinner";

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (!currentUser) {
          navigate("/result", {
            state: {
              code: 500,
              value: false,
              next: "/login",
            },
          });
          return;
        }

        const userdata = await userProfileData(currentUser);
        setUser(userdata);
      } catch (error) {
        navigate("/result", {
          state: {
            code: 500,
            value: false,
            next: "/login",
          },
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [navigate]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Oval height={40} width={40} color="#22c55e" />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-8 pb-10">
        {/* Profile Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md border border-green-100 p-8">
          <h1 className="text-3xl font-bold text-green-600">Welcome</h1>
          <p className="text-gray-500 mt-2">
            Continue your stock market learning journey with Market Rock.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {/* Name */}
            <div className="bg-gray-100 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex justify-center items-center">
                  <i className="fa-solid fa-user text-green-600"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500"> Full Name</p>
                  <p className="font-semibold text-gray-800">
                    {user.name || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className=" bg-gray-100 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex justify-center items-center">
                  <i className="fa-solid fa-envelope text-green-600"></i>
                </div>

                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-semibold text-gray-800 break-all">{user.email || "N/A"}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-3xl border border-green-100 shadow-md p-6">
            <p className="text-gray-500">
              Courses
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              0
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Enrolled courses
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-green-100 shadow-md p-6">
            <p className="text-gray-500">
              Certificates
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              0
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Earned certificates
            </p>
          </div>

        </div>

        {/* Courses */}
        <div className="max-w-4xl mx-auto mt-10">

          <Heading heading="Your Courses" />

          <div className="mt-5 bg-white border border-green-100 rounded-3xl shadow-md h-72 flex flex-col items-center justify-center">

            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fa-solid fa-book-open text-3xl text-green-600"></i>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-5">
              No Courses Yet
            </h2>

            <p className="text-gray-500 text-center mt-2 px-6 max-w-md">
              You haven't enrolled in any courses yet. Start learning and build
              your stock market knowledge with Market Rock.
            </p>

          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;