import React from "react";
import "./ProfilePage1.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import { useLocation } from 'react-router-dom';
import Navbar2 from "../Components/Navbar2";
import {Link} from "react-router-dom";
function ProfilePage1() {
    const role=useLocation().state
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
                            Name of Student
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut d-flex flex-row justify-content-sm-between">
                                <h3>Photo</h3>
                                <img style = {{width:'30%',height:"30%"}} src = "http://localhost:5000/api/v1/files/profile62b285c8ce12f106a9639134.jpg"/>
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut d-flex flex-row justify-content-sm-between">
                                <h3>Signature</h3>
                                <img style = {{width:'30%',height:"30%"}} src = "http://localhost:5000/api/v1/files/profile62b285c8ce12f106a9639134.jpg"/>
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
                                emai
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>PRN</h3>
                            </div>
                            <div className="colIn">
PRN
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Branch</h3>
                            </div>
                            <div className="colIn">
#######333333333333333333388888888888888
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Year</h3>
                            </div>
                            <div className="colIn">
####
                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Date Of Birth</h3>
                            </div>
                            <div className="colIn">
                                    ###########
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