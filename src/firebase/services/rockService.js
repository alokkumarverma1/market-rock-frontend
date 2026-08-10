import { auth, db } from "../firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { doc , addDoc,query, getDocs ,getDoc,setDoc,collection,updateDoc ,deleteDoc, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";



// get all swing stock stock  
export const getAllSwingStocksService = async () => {
  try {
    return (await getDocs(
      query(collection(db, "swingstocks"), orderBy("createdAt", "desc"))
    )).docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
      return null;
  }
};






// get all index price
export const AllIndexPrice =async ()=>{
try{
  const res = await getDocs(query(collection(db,"indexPrice"),orderBy("createdAt", "desc")));
  const data = res.docs.map(doc=>({id:doc.id, ...doc.data()}));
  return data;
}catch(error){
  return [];
}
};


// get index profit in a month
export const IndexMonthProfit =async()=>{
 try{
 const docRef = doc(db, "allprofit","1");
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()){
    return docSnap.data();
  }
  }catch(error){
    return false
  }
}




// get all posts
export const getAllPost = async ()=>{
 try{
  const querySnapshot = await getDocs(query(collection(db, "post"),orderBy("createdAt", "desc")));
  const res = querySnapshot.docs.map( doc =>({id:doc.id,...doc.data()}))
 return res; 
 }catch(error){
  return [];
 }
  
}