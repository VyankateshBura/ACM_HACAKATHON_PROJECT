import React,{useState,useEffect, useContext} from 'react';
import './NotesPageFaculty.css';
import AOS from "aos";
import "aos/dist/aos.css";
import SubjectNotes from '../Components/SubjectNotes';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import AddFile from "../Components/AddFile"
const EachSubjectNotes = (props) => {
  const [addcss,setaddcss] = useState("2vw");
  const [subjectname,setSubjectname] = useState("");
  let loc =useLocation();
  console.log(loc);
  useEffect(() => {
    const title = loc.pathname.split('/')
    setSubjectname(title[2]);
  }, [])
  
    useEffect(() => {
        AOS.init();
    }, [])
    const subject  = [
      {
          note_id:1,
          name:"chapter1.pdf"
      },
      {
          note_id:2,
          name:"chapter2.pdf"
      },{
          note_id:3,
          name:"chapter3.pdf"
      },
  ]
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
    
  return (
    <div>
      <div className='noteslist-page'>
      <Navbar2  shift = {shift} role={"Student"}/>
      <div className='noteslist-outer-box'style={{marginLeft:`${addcss}`,width:"86%",height:'fit-content'}}>
      <div className='noteslist-title '><p className='noteslist-name m-auto'style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{subjectname}</p></div>
      <div className='d-flex flex-row justify-content-sm-evenly flex-wrap'  >
        {
          subject.map((item)=>{
            return (
                    <SubjectNotes  role = {"Student"} key = {item.note_id} subject = {item.name} />  
            );
        })
        }
    </div>
    <AddFile ></AddFile>
      </div>
      </div>
    </div>
    
  )
}

export default EachSubjectNotes