import React from "react";
import Navbar from "../others/navbar";
import Heading from "../others/heading";

function Profile() {
  const user = {
    name: "Alok",
    email: "alok@gmail.com",
    number: "9876543210",
    city: "Lucknow",
    role: "User",
  };

 

  return (
  <>
  <Navbar />

  <div className="user sm:pr-20 mb-10 sm:pl-20 relative p-4">

    {/* Top Profile Banner */}
    <div className="profile w-full relative mt-20 h-40 flex justify-center items-center rounded-t-3xl bg-gradient-to-r from-green-200 via-green-100 to-green-200 shadow-md">

      {/* Avatar */}
      <div className="image absolute top-20 rounded-full h-24 w-24 bg-white border-4 border-green-300 shadow-lg flex items-center justify-center text-2xl font-bold text-green-600">
        {user.name.charAt(0)}
      </div>

    </div>

    {/* Info Section */}
    <div className="shape2 w-full bg-green-50 pt-24 pb-10 rounded-b-3xl flex flex-col sm:flex-row gap-6 justify-around items-center shadow-lg">

      {/* Card 1 */}
      <div className="box1 h-24 w-60 bg-white rounded-2xl shadow-md border border-green-100 flex flex-col justify-center items-center">
        <p className="text-sm text-gray-500">Name</p>
        <p className="font-semibold text-gray-800">{user.name}</p>
      </div>

      {/* Card 2 */}
      <div className="box1 h-24 w-60 bg-white rounded-2xl shadow-md border border-green-100 flex flex-col justify-center items-center">
        <p className="text-sm text-gray-500">Email</p>
        <p className="font-semibold text-gray-800">{user.email}</p>
      </div>

      {/* Card 3 */}
      <div className="box1 h-24 w-60 bg-white rounded-2xl shadow-md border border-green-100 flex flex-col justify-center items-center">
        <p className="text-sm text-gray-500">City</p>
        <p className="font-semibold text-gray-800">{user.city}</p>
      </div>

    </div>

  </div>

  {/* Course area */}
  <Heading heading={"Your Course"} />
  <div className="corse min-h-50 w-full"></div>
</>
  );
}

export default Profile;