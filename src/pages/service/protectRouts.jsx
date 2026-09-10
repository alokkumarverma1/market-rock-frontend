import { Navigate , Outlet} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const  ProtectRouts = ({allowRole , next})=>{
    const token = localStorage.getItem("token");
     if (!token) {
        return <Navigate to="/singin" />;
    }

    // decode role
    const payload = jwtDecode(token);
    const role = payload.role;

    if(!allowRole.includes(role)){
         return <Navigate to="/singIn" />;
    }

    return <Outlet/>;
    
};