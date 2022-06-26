import './Results.css';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
function Results(){
    const role=useLocation().state
    return(
    <>
    <div className='result-page'>
    <Navbar2 role={role.role.role}/>
    <div className='result-outer-box'>
        <div className='result-title'><p className='result-option-name'>Results</p></div>
        <div className='sem-result'>
        <div className="sem-title"><p className='result-option-name'>Semester I</p></div>
        <span>
        <div className='result-option'><a>Grade Card</a></div>
        <div className='result-option'><a>Marks</a></div>
        </span>
        </div>
    </div>
    </div>
    </>
    )
}
export default Results;