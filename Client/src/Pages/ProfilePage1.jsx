import React,{useEffect,useState} from "react";
import axios from 'axios';
import "./ProfilePage1.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import { useLocation } from 'react-router-dom';
import Navbar2 from "../Components/Navbar2";
import {Link} from "react-router-dom";
function ProfilePage1() {
    const role=useLocation().state;
    console.log(role);
    const [profile,setProfile] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/student/studentprofile',{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            setProfile(res.data.student);
            console.log(res)})
        console.log(profile);
    },[]);
    const [addcss,setaddcss] = useState("8vw");
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }
    return (
        <>
        <div className="Profile-page">
            <Navbar2 shift={shift} role={role}/>
            <div className="Profile-outer-box" style={{marginLeft:`${addcss}`}}>
                <div className="outer">
                    <div className="profile-button">
                       <OptionBoxBlue name="Profile"> </OptionBoxBlue>
                        <Link to="/studentprofileedit"  state={role}><OptionBoxWhite name="Edit-Profile"></OptionBoxWhite></Link>

                    </div>
                    <div className="mainPart">
                        <div className="col1">
                            <div className="colOut">
                                <h3>Name</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.name:''}
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut mx-1 d-flex flex-row justify-content-sm-between ">
                                <h3>Photo</h3>
                                {
                                    profile&&
                                <img className = "rounded-circle" style = {{marginLeft:"60vh",width:'30%',height:"50%"}} src = {`http://localhost:5000/api/v1/files/profiles${profile._id}1.jpg`}/>
                                }
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut d-flex flex-row justify-content-sm-between">
                                <h3>Signature</h3>{
                                    profile&&
                                <img style = {{marginLeft:"55vh",width:'20vw',height:"10vh"}} src =    {`http://localhost:5000/api/v1/files/profiles${profile._id}2.jpg`}/>
                                }
                            </div>
                            <div className="colIn Photo">
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>E-mail</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.email:''}
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>PRN</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.prn:''}
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Branch</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.branch:''}
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Year</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.year:''}
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Date Of Birth</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.dateofbirth:''}
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProfilePage1;
;