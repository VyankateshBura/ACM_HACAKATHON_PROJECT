import React,{useState,useContext} from 'react';
import userContext from '../Context/User/UserContext';
import './Dashboard.css';
import Navbar2 from '../Components/Navbar2';
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as LiveExamIcon} from "../Icons/live-exam-icon.svg";
import {ReactComponent as UpcomingExamsIcon} from "../Icons/upcoming-exam-icon.svg";
import {ReactComponent as NotesIcon} from "../Icons/note-icon-blue.svg";
import {ReactComponent as ListIcon} from "../Icons/list-icon.svg";
function DashboardStudent(){
    const user = useContext(userContext);
    user.setuser('omkar');
    console.log(user);
    const [addcss,setaddcss] = useState("8vw");
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }
    return(
    <>

    <div className='page'>
    <Navbar2 shift = {shift}role="Student"/>
    <div className='outer-box' style={{marginLeft:`${addcss}`}}>
    <div className='dashboard-title'><p className='dashboard-name'>Dashboard</p></div>
        <h2>Menu Fields : </h2>
        <h3 className='headd'>Profile:-</h3>
        <div className='text-field'>
        <p className='paragraph'>Profile field can be used to view youe own details like name, e-mail, date of birth, branch, year, etc. 
        Edit profile option can be used to update the details in your profile. 
        You can add the courses taught by you in this update feild.</p>
        </div>
        <h4 className='headd'>Notes:-</h4>
        <div className='text-field'>
        <p className='paragraph'>You can access the notes uploaded by your course faculty for study reference in the notes section.</p>
        </div>
        <h4 className='headd'>Exam:-</h4>
        <div className='text-field'>
        <p className='paragraph'>You can apppear for the exam in the exam field. You are supposed to attempt the question papers in oline mode. 
        You can upload your answers or type your answers for individual question.</p>
        </div>
        <h4 className='headd'>Result:-</h4>
        <div className='text-field'>
        <p className='paragraph'>Result field can be used to see the results of exams attempted by you. 
        Your marks for individual papers can be checked. also semester wise results can also be viewd.</p>
        </div>
    </div>
    </div>
    </>
    )
}
export default DashboardStudent;