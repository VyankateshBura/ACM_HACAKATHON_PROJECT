import './AvailablePaper.css';
import Navbar2 from '../Components/Navbar2';
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function AvailablePaper(){
    return(
        <>
        <div className='avail-page'>
    <Navbar2/>
    <div className='avail-outer-box'>
    <div className='avail-title'><p className='avail-name'>Available Papers</p></div>
        <div className='paper'><p className='paper-name'>Paper 1</p></div>
        <div className='paper'><p className='paper-name'>Paper 2</p></div>
        <div className='paper'><p className='paper-name'>Paper 3</p></div>
        <div className='paper'><p className='paper-name'>Paper 4</p></div>
    </div>
    </div>
        </>
    )
}