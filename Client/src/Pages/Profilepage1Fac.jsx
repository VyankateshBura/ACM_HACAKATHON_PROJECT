import React,{useState,useEffect} from "react";
import "./ProfilePage1.css";
import Bluebutton from "../Components/BlueButton"
import axios from 'axios';
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";
import {Link,useLocation} from "react-router-dom";
function ProfilePage1Fac() {

    const role=useLocation().state;

    const [profile,setProfile] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/faculty/profile',{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            res.data.faculty.courses = res.data.faculty.courses.filter(function(entry) { return entry.trim() != ''; });
            console.log([...res.data.faculty.courses])
            setProfile(res.data.faculty);
            
        })
        },[]);

    console.log(profile);
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
            <Navbar2 name = {profile?profile.name:null}shift={shift} role={role}/>
            <div className="Profile-outer-box"style={{marginLeft:`${addcss}`}}>
                <div className="outer">
                    <div className="profile-button">
                       <OptionBoxBlue name="Profile"> </OptionBoxBlue>
                        <Link to="/facultyprofileedit" state={role}><OptionBoxWhite name="Edit-Profile"></OptionBoxWhite></Link>

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
                            <div className="colOut">
                                <h3>Photo</h3>
                                {
                                    profile&&
                                <img className = "rounded-circle" style = {{marginLeft:"32vw",width:'10vw',height:"20vh",boxShadow:'0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} src = {`http://localhost:5000/api/v1/files/profiles${profile._id}1.jpg`}/>
                                }
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Signature</h3>
                                {
                                    profile&&
                                <img style = {{marginLeft:"32vw",width:'20vw',height:"10vh",boxShadow:'0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} src =    {`http://localhost:5000/api/v1/files/profiles${profile._id}2.jpg`}/>
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
                                <h3>Department</h3>
                            </div>
                            <div className="colIn">
                            {profile?profile.department:''}
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
                        <div className="col1">
                            <div className="colOut">
                                <h3>Courses</h3>
                            </div>
                            <div className="colIn">
                            {profile ?profile.courses.map((item,key)=>{
                                        return(
                                            <div key={key}>
                                                <Bluebutton title={item}/>
                                                <br></br>
                                                <br></br>
                                            </div>                                            
                                        )
                                    }):''
                                
                                }
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

export default ProfilePage1Fac;
;