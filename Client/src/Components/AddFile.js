import "./AddFile.css";
import React,{useState} from "react";
import axios from 'axios';
import {ReactComponent as Noteicon} from "../Icons/note-icon.svg";
import { useLocation } from "react-router-dom";
export default function AddFile(){
    const [files, setfiles] = useState(null)
    let subj = useLocation().pathname.split('/').pop().replace(/%20/g," ");
    
    function uploadnotes(){
        let formData = new FormData();
        formData.append("notes",files);
        console.log(formData.getAll("notes"));
        axios.post('http://localhost:5000/api/v1/faculty/uploadnotes',formData,{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        setfiles(null);
        // console.log(files[0]);
    }

    return(
        <div className ="fixed-bottom" style={{padding:"2vh",marginLeft:'70vw'}}>
            <div className="btn bg-light fw-bold notes" onClick={uploadnotes} style={{width:'15vw',height:'10vh',padding:'3vh',borderRadius:'15px'}} >Upload Notes
            </div>
            {/* <span  className = "tooltip" style={{display:'none'}}>Click on upload notes to choose file</span> */}
            <input style={{display:'none'}} multiple = "multiple" id="files" type="file" onChange={(e)=>{setfiles(e.target.files[0])}}/>
            <label htmlFor="files">
            <Noteicon className="note-icon rounded" style={{marginLeft:'2vw',padding:'1vh',width:'5vw',height:'8vh',backgroundColor:'black'}}/> 
            </label>
            
            {/* <h1>
            Subject
            </h1> */}
            
        </div>
        
    )
}

