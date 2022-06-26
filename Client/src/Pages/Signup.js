import React from "react";
import "./Signup.css";
import Navbar from "../Components/Navbar"
import SignupLogin from "../Components/SignupLogin";
import { useLocation } from "react-router-dom";

function Signup(props){
    
    const {role} = useLocation().state
    return(
        <div className="signup-page">
            <Navbar/>
            <div className="img-div">
                <SignupLogin role={role}/>
            </div>
        </div>
    )
}
export default Signup;