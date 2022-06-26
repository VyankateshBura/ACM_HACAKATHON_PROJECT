import './Dashboard.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import {ReactComponent as LogoutIcon} from "../Icons/logout-icon-blue.svg";
import {ReactComponent as ChangePasswordIcon} from "../Icons/change-password-icon.svg";
function Settings(){
    const role=useLocation().state
    return(
    <>
    <div className='page'>
    <Navbar2 role={role.role.role}/>   
    <div className='outer-box'>
        <div className='settings-title'><p className='option-name'>Settings</p></div>
        <Link to="/"><div className='option'><LogoutIcon className="option-icon"/><p className='option-name'>Logout</p></div></Link>
        <div className='option'><ChangePasswordIcon className="option-icon"/><p className='option-name'>Change Password</p></div>
    </div>
    </div>
    </>
    )
}
export default Settings;