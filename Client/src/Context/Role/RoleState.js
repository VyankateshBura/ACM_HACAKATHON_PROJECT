import React,{useState} from "react";
import RoleContext from "./RoleContext";
const RoleState = (props)=>{
    const r = {
        name:"Vyankatesh"
    }
    const [role,setRole] = useState(r.name);
    const update = (value)=>{
        setRole(value);
    }
    return (
        <RoleContext.Provider value={role}>
            {props.children}
        </RoleContext.Provider>
    )
};
export default RoleState;