import React from "react";
import "./ProfilePage1.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";
import {Link} from "react-router-dom";
function ProfilePage1Fac() {
    return (
        <>
        <div className="Profile-page">
            <Navbar2 />
            <div className="Profile-outer-box">
                <div className="outer">
                    <div className="profile-button">
                       <OptionBoxBlue name="Profile"> </OptionBoxBlue>
                        <Link to="/facultyprofileedit"><OptionBoxWhite name="Edit-Profile"></OptionBoxWhite></Link>

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
                            <div className="colOut">
                                <h3>Photo</h3>
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <hr/>
                        <div className="col1">
                            <div className="colOut">
                                <h3>Signature</h3>
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
                                <h3>Department</h3>
                            </div>
                            <div className="colIn">
#######333333333333333333388888888888888
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
                        <div className="col1">
                            <div className="colOut">
                                <h3>Courses</h3>
                            </div>
                            <div className="colIn">
#######333333333333333333388888888888888
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