import React,{useState,useContext} from "react";
import DashboardStudent from "../../Pages/DashboardStudent";
import userContext from "./UserContext";
const User = (props)=>{
    const [user,setuser] = useState('vyanku');
    const update = (value)=>{
        setuser(value);
    }
    return (
        <userContext.Provider value={{user,update}} >
           <DashboardStudent/>
        </userContext.Provider>
    )
}
export default User;