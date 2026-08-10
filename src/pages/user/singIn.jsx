import React from "react";
import { userSingIn } from "../../firebase/services/userServiceFb";
import { useNavigate } from "react-router-dom";

function SingIn() {

  const navigate = useNavigate();

  const handleGoogleSignIn = async() => {
   try{
     const res = await userSingIn();
    if(!res.value){
      navigate("/addUserData" , {state:{id:res.uid, email:res.email}});
      return;
    }
    navigate("/")
   }catch(error){
    navigate("/result",{state:{code:500, value:false }})
   }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl  flex items-center justify-center">
            <span className="text-white text-2xl font-bold"><img src="/logo.png" alt="" /></span>
          </div>

          <p className="text-gray-500 mt-2 text-sm">
            Sign in to continue to your Market Rock account
          </p>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />

          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          By continuing, you agree to Market Rock's terms and privacy policy.
        </p>

      </div>
    </div>
  );
}

export default SingIn;