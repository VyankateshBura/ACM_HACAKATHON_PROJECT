import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import {ReactComponent as MenuIcon} from "../Icons/menu-icon.svg";
import {ReactComponent as LogoutIcon} from "../Icons/logout-icon.svg";
import {ReactComponent as ProfileIcon} from "../Icons/profile-icon.svg";
import SidebarStudent from "./SidebarStudent";
import SidebarFaculty from "./SidebarFaculty";
// import SidebarFaculty from "./SidebarFaculty";
// import {ReactComponent as DropdownIcon} from "../Icons/dropdown-icon.svg";
export default function Navbar2({role,shift}){
    const [sidebar, setSidebar]=React.useState(false)
    
    // showSidebar(sidebar);
    function showSidebar(){
       
        if(sidebar===true){
            shift(!sidebar);
            setSidebar(false);
        }else{
            shift(!sidebar);
            setSidebar(true);
        }
        // setSidebar((prevState)=>!prevState)
          
    }
    // function displaySidebar(){
    //     console.log("Display Sidebar function called");
        // if(sidebar===true){
        //     shift(sidebar);
        //     setSidebar(false);
        // }else{
        //     setSidebar(true);
        // }
    //     if(sidebar===true){
    //         if(role==="Student") {
    //             shift(sidebar);
    //             return <SidebarStudent role={role}/>}
    //         else{
    //             return <SidebarFaculty role={role}/>}
    //     }
    // }
    return(
        <>
        <nav className="navbar2 fixed-top">
            <MenuIcon className="menu-icon" onClick={showSidebar}/>
            <div className="right-part">
            <ProfileIcon className="profile-icon"/>
            {/* <h4>Welcome</h4> */}
            <h4>user_name</h4>
            <Link to="/"><LogoutIcon className="logout-icon"/></Link>
            {/* <DropdownIcon className="dropdown-icon"/> */}
            </div>
        </nav>
        {/* {displaySidebar()} */ 

            sidebar?(role==="Student"?<SidebarStudent role={role}/>:<SidebarFaculty role={role}/>):null
        }
        </>
    )
}