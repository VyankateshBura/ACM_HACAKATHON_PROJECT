import "./Navbar.css";
import {Images} from "../Images/ImagesIndex";
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Images.WCE} alt="logo" className="nav-logo"/>
            <p className="nav-heading" style={{marginRight:"20%",marginTop:"2%"}}>Walchand College of Engineering, Sangli</p>
        </nav>
    )
}