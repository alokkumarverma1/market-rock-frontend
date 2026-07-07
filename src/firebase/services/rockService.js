import { auth, db } from "../firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { doc, getDocs,setDoc,collection ,deleteDoc } from "firebase/firestore";






//  rock swing stock add
export const SwingStockService = async (swingstock)=>{
try{
    await setDoc(doc(db, "swingstocks", swingstock.stockName),swingstock);
}catch(error){
console.log(error.message)
}
}

// get all swing stock stock function 
export const AllSwingStocksService =async ()=>{
try{
const querySnapshot = await getDocs(collection(db, "swingstocks"));
const stocks = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
 return stocks;   
}catch(error){
console.log("erroe")
console.log(error.message)
}
}

// delete swing stock
export const deleteStock = async (id)=>{
 try{
await deleteDoc(doc(db , "swingstocks" , id))
return true;
 }catch(error){
  return false;
 }
}

// add index data
export const AddIndexData = async ()=>{
  try{

  }catch(error){
    console.log(error.message);
  }
}