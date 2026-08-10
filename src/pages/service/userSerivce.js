import axios from "axios";


// add new user
export const register = async(data)=>{
    const res = await axios.post("http://localhost:8080/user/register",data);
    return res.data;
}
