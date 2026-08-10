import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc , getDoc ,setDoc } from "firebase/firestore";
import { db } from "../firebase";


// google singin 
export const userSingIn =async ()=>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    // chek user exict or not 
    const userRef = doc(db,"user" , user.uid);
    const userData = await getDoc(userRef);
    return {value:userData.exists() , email:user.email , uid:user.uid}
}  


// user profile data 
 export const userProfileData = async(user)=>{
 const docRef =await doc(db, "user", user.uid);
 const docSnap = await getDoc(docRef);
 const data = docSnap.data();
 return docSnap.exists() ? docSnap.data() : null;
}
 
    
