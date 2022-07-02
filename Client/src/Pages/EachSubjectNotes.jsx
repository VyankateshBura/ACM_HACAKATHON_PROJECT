import React,{useState,useEffect, useContext} from 'react';
import './NotesPageFaculty.css';
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import Subject from '../Components/Subject';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import AddFile from "../Components/AddFile"
const EachSubjectNotes = (props) => {
  const [addcss,setaddcss] = useState("11vw");
  const [subjectname,setSubjectname] = useState("");
  const [subject,setSubject] = useState(null);
  let loc =useLocation();
  console.log(loc);
  useEffect(() => {
    AOS.init();
    const title = loc.pathname.split('/')
    setSubjectname(title[2].replace(/%20/g," "));
    axios.get("http://localhost:5000/api/v1/files",{
      headers:{
        token:localStorage.getItem('token')
      }
    }).then((res)=>{
      console.log(res.data);
      setSubject(res.data);
    }).catch((err)=>{
      console.log(err);
    })


  }, [])
  
console.log(subjectname)
    
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("19vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }
    
  return (
    <div>
      <div className='noteslist-page'>
      <Navbar2  shift = {shift} role={loc.state}/>
      <div className='noteslist-outer-box'style={{marginLeft:`${addcss}`,width:"80%",height:'fit-content'}}>
      <div className='noteslist-title '><p className='noteslist-name m-auto'style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{subjectname}</p></div>
      <div className='d-flex flex-row justify-content-sm-evenly flex-wrap'  >
        {
          subject &&
          subject.map((item)=>{
            return (
              
                    <Subject  role = {loc.role} key = {item._id} filename = {item.filename} subject = {subjectname} />  
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