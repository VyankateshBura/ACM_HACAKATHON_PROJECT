import './SetExamPaper.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
export default function CheckPaper(){
    return(
    <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
        <select className="course-choice">
        <option>Select Subject</option>
        <option>Applied Mathematics for CSE</option>
        <option>Formal Language and Automata Theory</option>
        <option>Computer Networks</option>
        <option>Database Engineering</option>
        <option>Operating Systems</option>
        </select>
        <Link to="/answersheetslist">
        <div className='Exam-button'>
                   <h3>Answersheets list</h3>
                </div>
                </Link>
                <Link to="/absentstudents">
                <div className='Exam-button'>
                   <h3>Absent students</h3>
                </div>
                </Link>
    <div className="set-exam-options-box">
        <Link to="/answersheetslist">
        <div className='Exam-button'>
                   <h3>Answersheets list</h3>
                </div>
                </Link>
                <Link to="/absentstudents">
                <div className='Exam-button'>
                   <h3>Absent students</h3>
                </div>
                </Link>
            </div>
    </div>
    </div>
    </>
    )
}