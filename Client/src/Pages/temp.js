import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OptionBoxBlue from "./OptionBoxBlue";
import OptionBoxWhite from "./OptionBoxWhite";
import BlueButton from "./BlueButton";
import "./SignupLogin.css";
export default function SignUpLogin({role}){
    let navigate=useNavigate()
    const [formData1,setFormData1]=React.useState({
        "name":"",
        "prn":"",
        "email":"",
        "mobile":"",
        "password":""
    })
    const [formData2,setFormData2]=React.useState({
        "email":"",
        "password":""
    })
    function handleChangeS(e){
        const newFormData1={...formData1}
        newFormData1[e.target.id]=e.target.value
        setFormData1(newFormData1)
        // console.log(newFormData1)
    }
    function handleChangeL(e){
        const newFormData2={...formData2}
        newFormData2[e.target.id]=e.target.value
        setFormData2(newFormData2)
        // console.log(newFormData2)
    }
    function Signup(e){
    // e.preventDefault();
    console.log("Posted Data");
    const data = {
        name:formData1.name,
        email:formData1.email,
        password:formData1.password,
        phoneNumber:formData1.mobile
    }
    if(role==="Student"){
        data.prn = formData1.prn;
        axios
        .post(`http://localhost:5000/api/v1/studentsignup`,{
          data
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else{
        axios
      .post(`http://localhost:5000/api/v1/faculty/signup`,{
        data
       
      })
      .then(function (response) {
        console.log(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      })
    } 

    }
    function Login(e){
        // e.preventDefault();
        console.log("Posted Data");
        const data = {
            name:formData1.name,
            email:formData1.email,
            password:formData1.password,
            phoneNumber:formData1.mobile,
            prn:formData1.prn
        }
        axios
          .post("http://localhost:5000/api/v1/studentsignup",{
            data
           
          })
          .then(function (response) {
            console.log(response.data.student.name);
            console.log(response.data.student.email);
            console.log(response.data.student.password);
            console.log(response.data.student.phoneNumber);
            console.log(response.data.student.phoneNumber);
            
          })
          .catch(function (error) {
            console.log(error);
          })
        }
    const [choice,setChoice]=React.useState("Sign up")
    function toggleToLogin(){
        setChoice("Log in")
    }
    function toggleToSignup(){
        setChoice("Sign up")
    }
    if(choice==="Sign up"){
        if(role==="Student"){
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="text" id="prn" onChange={(e)=>handleChangeS(e)} placeholder="PRN" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
           <Link to="/studentdashboard" ><button className="signup-button" onClick={Signup} type="submit">Sign up</button></Link>
            </form>
        </div>
        </>
    )}
    else if(role==="Faculty")
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
            <Link to="/facultydashboard" ><button className="signup-button" onClick={Signup} type="submit">Sign up</button></Link>
            </form>
        </div>
        </>
    )
}
    else
    {
       return(
        <>
        <div className="component-box">
        <div className="options-box">
            <span>
                <div onClick={toggleToSignup}><OptionBoxWhite name="Sign up"/></div>
            </span>
            <span>
                <div><OptionBoxBlue name="Log in"/></div>
            </span>
        </div>
        <form className="form">
        <input type="text" id="email" onChange={(e)=>handleChangeL(e)} placeholder="email" className="login-input"></input>
        <input type="password" id="password" onChange={(e)=>handleChangeL(e)} placeholder="password" className="login-input"></input>
        <Link to={role==="Faculty"?"/facultydashboard":"/studentdashboard"} state={{role:{role}}}><button className="signup-button" onClick={Login} type="submit">Log in</button></Link>
        </form>
        <a href="" className="forgot-pasword">Forgot Password?</a>
    </div>
    </>
       )
    }
}