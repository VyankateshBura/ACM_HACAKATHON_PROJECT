import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import {ReactComponent as MenuIcon} from "../Icons/menu-icon.svg";
import {ReactComponent as LogoutIcon} from "../Icons/logout-icon.svg";
import {ReactComponent as ProfileIcon} from "../Icons/profile-icon.svg";
import SidebarStudent from "./SidebarStudent";
import SidebarFaculty from "./SidebarFaculty";
// import SidebarFaculty from "./SidebarFaculty";
// import {ReactComponent as DropdownIcon} from "../Icons/dropdown-icon.svg";
export default function Navbar2({role,shift,name}){
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
    function Deletetoken(){
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        console.log('User logged Out');
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
            <ProfileIcon  className="profile-icon mx-3"/>
            {/* <h4>Welcome</h4> */}
            <h5>{localStorage.getItem('name')?localStorage.getItem('name'):'user_name'}</h5>
            <Link to="/"><LogoutIcon onClick={Deletetoken}className="logout-icon"/></Link>
            {/* <DropdownIcon className="dropdown-icon"/> */}
            </div>
        </nav>
        {/* {displaySidebar()} */ 

            sidebar?(role==="Student"?<SidebarStudent  role={role}/>:<SidebarFaculty role={role}/>):null
        }
        </>
    )
}