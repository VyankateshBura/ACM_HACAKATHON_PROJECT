import './AbsentStudents.css';
import Navbar2 from '../Components/Navbar2';
function AbsentStudents(){
    return(
    <>
    <div className='absent-page'>
    <Navbar2/>
    <div className='absent-outer-box'>
        <div className='absent-title'><p className='absent-link'>Absent Students</p></div>
        <div className='absent-std'><p className='absent-link'>PRN</p></div>
        <div className='absent-std'><p className='absent-link'>PRN</p></div>
        <div className='absent-std'><p className='absent-link'>PRN</p></div>
        <div className='absent-std'><p className='absent-link'>PRN</p></div>
    </div>
    </div>
    </>
    )
}
export default AbsentStudents;