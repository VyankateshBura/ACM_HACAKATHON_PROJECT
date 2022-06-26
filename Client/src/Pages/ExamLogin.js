import "./ExamLogin.css";
import { useLocation } from 'react-router-dom';
import React from "react";
import Navbar2 from '../Components/Navbar2';
import { Link } from "react-router-dom";
export default function ExamLogin(){
    const role=useLocation().state
    const [examsubj,setExamsubj]=React.useState("")
    function handleexamsubj(e){
        setExamsubj(e.value.target)
    }
    return (
    <>
    <div className='exam-login-page'>
    <Navbar2 role={role.role.role}/>
    <div className='exam-login-outer-box'>
    <form onChange={handleexamsubj} value={examsubj}className="exam-form">
        <select className="sub-choice" >
        <option>Select Subject</option>
        <option>Mathematics</option>
        <option>English</option>
        </select>
    <Link to="/liveexam"><button className="start-exam-btn" >Start Exam</button></Link>
    </form>
    </div>
    </div>
    </>
    )
}