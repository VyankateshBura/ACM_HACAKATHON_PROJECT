import "./Home.css";

import Navbar from "../Components/Navbar";
import React from "react";
import HomeScreen from '../Components/HomeScreen';
function Home() {
    return (
        <div className='mainHom'>
            <Navbar/>
            <div className="back-img">
            <div className="homImg"  >
            <img id="wceimg" src={require('../Images/walchand-college-of-engineering-sangli-walchand-college-002.jpg')} alt="logo" className="wce-img"/>
            </div>
            <div className="hom">
            <HomeScreen/>
            </div>
            </div>
        </div >
    )
}
export default Home;
