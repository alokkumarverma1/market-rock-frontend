import { auth, db } from "../firebase";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { doc , addDoc,query, getDocs,setDoc,collection,updateDoc ,deleteDoc, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";






//  rock swing stock add
export const addSwingStockService = async (swingstock) => {
  try {
    await addDoc(collection(db, "swingstocks"), {
      ...swingstock,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error.message);
  }
};


// get all swing stock stock function 
export const getAllSwingStocksService =async ()=>{
try{
 const q = query(
      collection(db, "swingstocks"),
      orderBy("createdAt", "desc")
    );

 const querySnapshot = await getDocs(q);
const stocks = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
 return stocks;   
}catch(error){
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
export const AddDirection = async (data)=>{
  try{
  const stockRef = await doc(db, "indexDirection", "1");  
  const res = await updateDoc(stockRef , data);
  }catch(error){
    console.log("update is faild")
  }
}

// add index prices 
export const AddIndexPrice =  async(data)=>{
try{
  const res = await addDoc(collection(db, "indexPrice"), {...data,  createdAt: serverTimestamp()});
}catch(error){
  console.log(error.message)
}
}

// get all index price
export const AllIndexPrice =async ()=>{
try{
const querySnapshot = await getDocs(collection(db, "indexPrice"));
if(querySnapshot == null) return null;
const prices = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
 return prices;   
}catch(error){
console.log(error.message)
}
}


// add ipos 

// get all ipos 

// add posts 
export const addPost = async(data)=>{
  try{
   const res = await addDoc(collection(db, "post") ,{...data ,  createdAt: serverTimestamp()})
   console.log("res")
  }catch(error){
    console.log(error.message)
  }
}

// get all posts
export const getAllPost = async ()=>{
 try{
  const querySnapshot = await getDocs(collection(db, "post"));
if(querySnapshot == null) return null;
const post = querySnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));
 return post; 
 }catch(error){
  console.log(error.message)
 }
  
}