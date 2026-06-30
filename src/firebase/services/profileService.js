import { db } from "../firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


// user profile data 
 export const userProfileService = async(user)=>{
 const docRef = doc(db, "register", user);
 const docSnap = await getDoc(docRef);
 return docSnap.exists ? docSnap.data() : null;
}