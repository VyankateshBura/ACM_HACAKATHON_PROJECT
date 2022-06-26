import './EnrolledList.css';
import Navbar2 from '../Components/Navbar2';
import { Link } from 'react-router-dom';
import BlueButton from '../Components/BlueButton';
import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function EnrolledList(){
    return(
        <>
        <div className='enrolled-list-page'>
    <Navbar2/>
    <div className='enrolled-list-outer-box'>
    <div className='enrolled-list-title'><p className='enrolled-list-name'>Enrolled Stduents</p></div>
        <div className='std-prn'><p className='std-prn-name'>std-prn 1</p></div>
        <div className='std-prn'><p className='std-prn-name'>std-prn 2</p></div>
        <div className='std-prn'><p className='std-prn-name'>std-prn 3</p></div>
        <div className='std-prn'><p className='std-prn-name'>std-prn 4</p></div>
    <div className='add-stud-buttons'>
        <Link to="/enroll"><BlueButton className="add-stud-actual-button" title="Add Student"/></Link>
    </div>
    </div>
    <div><BlueButton className="list-save" title="Save List"/></div>
    </div>
        </>
    )
}