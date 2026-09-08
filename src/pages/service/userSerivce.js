import axios from "axios";


// loign 
export const login= async(data)=>{

// login 
const res = await axios.post("http://localhost:8080/user/login",data,
    { headers:{"Content-Type": "text/plain"} }
    )
 localStorage.setItem("token" , res.data.token);
 return res.data;
}

// register
export const register = async(data)=>{
    const res = await axios.post("http://localhost:8080/user/register",data);
    return res.data;
}
