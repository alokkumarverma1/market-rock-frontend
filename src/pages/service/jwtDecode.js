import { jwtDecode } from "jwt-decode";

export const tokenValue = ()=>{
    const token = localStorage.getItem("token");

    if(!token){
     return null;
    }
    let value = jwtDecode(token);
    console.log(value)
    return value;
}