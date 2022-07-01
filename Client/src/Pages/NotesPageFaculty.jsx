import './NotesPageFaculty.css';
import React,{useState,useEffect} from 'react';
import Navbar2 from '../Components/Navbar2';
import AddFile from "../Components/AddFile"
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import SubjectNotes from '../Components/SubjectNotes';
import {useLocation} from "react-router-dom"
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function NotesPageFaculty(){
    const [subject,setSubject] = useState(null);
    const [addcss,setaddcss] = useState("12vw");
    const [subjectchoosed,setSubjectchoosed] = useState(false);
    useEffect(() => {
        AOS.init();
        axios.get("http://localhost:5000/api/v1/faculty/examination/setexam",{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            let arr = res.data.courses;
            arr = arr.filter(function(entry) { return entry.trim() != ''; });
            setSubject([...arr]);
        })
    }, [])
    
   
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("12vw"); 
        }
    }
    const role=useLocation().state;
    return(
        <>
        <div className='noteslist-page'>
    <Navbar2  shift = {shift} role={role}/>
    <div className='noteslist-outer-box'style={{marginLeft:`${addcss}`,width:`80vw`}}>
    <div className='noteslist-title '><p className='noteslist-name m-auto'>Notes</p></div>
    <div className='d-flex flex-row justify-content-sm-evenly flex-wrap'  >
        { subject &&
           subject.map((item,key)=>{
            return (
                    <SubjectNotes  role = {role} key = {key} subject = {item} />  
            );
        })
        }
    </div>
    <AddFile/>
        {/* <label className='add-notes-label'>Add file:  </label>
        <input type="file" placeholder="Add Image" />
        <button className="add-notes-button">Upload</button> */}
    </div>
    </div>
        </>
    )
}