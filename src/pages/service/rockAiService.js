import axios from "axios";


// send request
export const  sendMessage = async (data)=>{
 const res = await axios.post("http://localhost:8080/rockAi/message",data , {
    headers:{ "Content-Type": "text/plain"}
 } );
 return res.data;
}

// get stock details 
export const stockDetails = async (data)=>{
   const res = await axios.post("http://localhost:8080/rockAi/stockDetails" , data, {
    headers:{ "Content-Type": "text/plain"}
 });
 console.log(res.data)

   return res.data;
}


