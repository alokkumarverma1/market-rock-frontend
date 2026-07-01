import { auth, db } from "../firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// register user wiht google
export const userRegisterWithGoodle = async ()=>{
  const auth = getAuth();  
  const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    const user = result.user;
    // chek user data
    const docRef = doc(db, "register", user.uid);
    const docSnap = await getDoc(docRef);
    if(!docSnap.exists)
     {
         await setDoc(doc(db, "register", user.uid), {
          uid: user.uid,
          name: user.displayName || "",
          email: user.email || "",
          role: user.email === "rockteamsupport@gmail.com" ? "admin" : "user",
          city: "",
          number: "",
        });
     }
        return user;
}


// user profile data 
 export const userProfileService = async(user)=>{
 const docRef = doc(db, "register", user);
 const docSnap = await getDoc(docRef);
 return docSnap.exists ? docSnap.data() : null;
}