import React,{useEffect,useState} from "react";
import axios from 'axios';
import "./ProfilePage1.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import { useLocation } from 'react-router-dom';
import Navbar2 from "../Components/Navbar2";
import {Link} from "react-router-dom";
function ProfilePage1() {
    const role=useLocation().state
    const [profile,setProfile] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/studentprofile',{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            setProfile(res.data.student);
            console.log(res)})
        console.log(profile);
    },[]);
    return (
        <>
        <div className="Profile-page">
            <Navbar2 role={role.role.role}/>
            <div className="Profile-outer-box">
                <div className="outer">
                    <div className="profile-button">
                       <OptionBoxBlue name="Profile"> </OptionBoxBlue>
                        <Link to="/studentprofileedit"  state={{role:{role}}}><OptionBoxWhite name="Edit-Profile"></OptionBoxWhite></Link>

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
                            <div className="colOut d-flex flex-row justify-content-sm-between">
                                <h3>Photo</h3>
                                <img style = {{width:'30%',height:"30%"}} src = {`http://localhost:5000/api/v1/files/profiles${profile?profile._id:''}1.jpg`}/>
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut d-flex flex-row justify-content-sm-between">
                                <h3>Signature</h3>
                                <img style = {{width:'30%',height:"30%"}} src =    {`http://localhost:5000/api/v1/files/profiles${profile?profile._id:''}2.jpg`}/>
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