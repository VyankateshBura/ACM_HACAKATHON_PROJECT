import React,{useState,useEffect,useContext} from 'react';
import RoleContext from '../Context/Role/RoleContext';
import './NotesPageFaculty.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from 'react-router-dom';
import SubjectNotes from '../Components/SubjectNotes';
import Navbar2 from '../Components/Navbar2';

// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";

export default function NotesPageStudent(){
    const [addcss,setaddcss] = useState("2vw");
    const [subjectchoosed,setSubjectchoosed] = useState(false);
    useEffect(() => {
        AOS.init();
    }, [])
    
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
        ,
        {
            id:5,
            subject:"Artificial Intelligence and Machine Learning",
        }
        ,
        {
            id:6,
            subject:"Computer Graphics",
        }
        ,
        {
            id:7,
            subject:"Computer Organization and Architecture",
        }
        ,
        {
            id:8,
            subject:"Image Processing",
        }
    ]
    
    function notesection(){
        if(subjectchoosed==false){
            return (
                array.map((item)=>{
                    return (
                            <SubjectNotes role={role.role.role} key = {item.id} subject = {item.subject} />  
                    );
                }) 
            )
        }
        else{
            subject.map((item)=>{
                return (
                        <SubjectNotes role={role.role.role} key = {item.note_id} subject = {item.name} />  
                );
            })
        }
    }
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
    
    const role=useLocation().state;
    return(
        <>
        <div className='noteslist-page'>
    <Navbar2  shift = {shift} role={role}/>
    <div className='noteslist-outer-box'style={{marginLeft:`${addcss}`,width:"86%",height:'fit-content'}}>
    <div className='noteslist-title '><p className='noteslist-name m-auto'>Notes</p></div>
    <div className='d-flex flex-row justify-content-sm-evenly flex-wrap'  >
        { 
           array.map((item)=>{
            return (
                    <SubjectNotes  role = {role} key = {item.id} subject = {item.subject} />  
            );
        })
        }
    </div>
    </div>
    </div>
        </>
    )
}