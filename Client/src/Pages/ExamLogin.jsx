import "./ExamLogin.css";
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import React,{useState,useEffect} from "react";
import Navbar2 from '../Components/Navbar2';
import { Link } from "react-router-dom";
export default function ExamLogin(){
    const [addcss,setaddcss] = useState("2vw");
    useEffect(() => {
        AOS.init();
    }, [])
    
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("13vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }

    const role=useLocation().state
    const [examsubj,setExamsubj]=React.useState("")
    function handleexamsubj(e){
        setExamsubj(e.value.target)
    }
    return (
    <>
    <div className='exam-login-page'>
    <Navbar2 shift = {shift}role={role}/>
    <div className='exam-login-outer-box'style={{marginLeft:`${addcss}`,width:"86%",height:'fit-content'}}>
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