import axios from "axios";

// add swingStock
export const addSwingStock = async (data)=>{
  const res = await axios.post("http://localhost:8080/rock/addSwing",data );
  return res.data;
}

// delete swing stock 
export const deleteSwingStock = async(id)=>{
  const res = await axios.post("http://localhost:8080/deleteSwingStock" , id)
    return res.data;
}

// add index price
export const AddIndexData= async(data)=>{
  const res = await axios.post("http://localhost:8080/rock/addIndex", data);
    return res.data;
}

// update index proit result
export const updateIndexProfit =async (data)=>{
const res = axios.post("http://localhost:8080/rock/updateIndexProfit",data )
  return res.data;
}


// add post
export const AddPost= async(data)=>{
  const res = await axios.post("http://localhost:8080/rock/addPost", data);
    return res.data;
}

