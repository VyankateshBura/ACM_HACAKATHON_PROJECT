import React,{useState,useEffect} from 'react';
import './NotesPageFaculty.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from 'react-router-dom';
import SubjectNotes from '../Components/SubjectNotes';
import Navbar2 from '../Components/Navbar2';
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";

export default function NotesPageStudent(){
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

    const array = [
        {
            id:1,
            subject:"Mathematics",
        },
        {
            id:2,
            subject:"Computer Networks",
        },
        {
            id:3,
            subject:"Database Engineering",
        },
        {
            id:4,
            subject:"Theory of Computation",
        }
    ]
    
    const role=useLocation().state
    return(
        <>
        <div className='noteslist-page'>
    <Navbar2  shift = {shift} role={role.role.role}/>
    <div className='noteslist-outer-box'style={{marginLeft:`${addcss}`,width:"86%",height:'fit-content'}}>
    <div className='noteslist-title '><p className='noteslist-name m-auto'>Notes</p></div>
    <div className='d-flex flex-row justify-content-sm-evenly flex-wrap'  >
        {   
            array.map((item)=>{
                return (
                        <SubjectNotes  key = {item.id} subject = {item.subject} />  
                );
            })
        }
    </div>
    
    </div>
    </div>
        </>
    )
}