import './SetExamPaper.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
export default function SetExamPaper(){
    const [sub,setSub]=React.useState("")
    function handleSubject(e){
        setSub(e.target.value)
    }
    return(
    <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-ex-outer-box'>
        <select value={sub} className="course-choice" onChange={handleSubject}>
        <option>Select Subject</option>
        <option>Applied Mathematics for CSE</option>
        <option>Formal Language and Automata Theory</option>
        <option>Computer Networks</option>
        <option>Database Engineering</option>
        <option>Operating Systems</option>
        </select>
    <div className="set-exam-options-box">
        <Link to="/availablepapers">
        <div className='Exam-button'>
                   <h3>Available Papers</h3>
                </div>
                </Link>
                <Link to={"/setnewpaper/"+sub}>
                <div className='Exam-button'>
                   <h3>Set new paper</h3>
                </div>
                </Link>
            </div>
    </div>
    </div>
    </>
    )
}