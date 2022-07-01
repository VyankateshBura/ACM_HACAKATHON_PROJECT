import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom'
import './EnrollStudent.css';
import Cards from '../Components/Cards';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
export default function EnrollStudent(){
    const role = useLocation().state
    const [studData,setStudData]=React.useState({"subj":"","prn":""})
    const [subjects,setSubject] = React.useState(null);
    const [students,setStudents] = React.useState(null);
    let Data = null;
    useEffect(() => {
     axios.get("http://localhost:5000/api/v1/faculty/examination/setexam",{
        headers:{
            token:localStorage.getItem('token')
        }
     }).then((res)=>{
        // console.log(res); 
        setSubject([...res.data.courses])
     })

     axios.get("http://localhost:5000/api/v1/faculty/students",{
        headers:{
            token:localStorage.getItem('token')
        }
     }).then((res)=>{
        console.log(res);
        setStudents([res.data.data]);
     })
    }, [])
    function handleChange(e){
        const newStudData={...studData}
        newStudData[e.target.id]=e.target.value
        setStudData(newStudData)
    }


    const [addcss,setaddcss] = useState("10vw");
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("19vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("10vw"); 
        }
    }
    return (
        <>
    <div className='enroll-page'>
    <Navbar2 shift={shift} role={role}/>
    <div className='enroll-outer-box'style={{marginLeft:`${addcss}`,width:`80vw`}}>
    <div className="enroll-box">
    <div className='Enroll-heading'>
                   <h3>Enroll student</h3>
                </div>
                {/* <span>
                ""+var+""
                    <Link to="savedPaper"><div ><OptionBoxWhite name="Saved Paper" /></div></Link>
                </span> */}
    </div>
    <form className='stud'>
    <select id="subj" className='prn-text' onChange={(e)=>handleChange(e)} >
            <option>select subject</option>
            {   subjects?subjects.map((item,key)=>{
                    return (
                        <option key={key}>{item}</option>
                    )
                }):''
                
            }
            {/* <option>Mathematics</option>
            <option>English</option> */}
        </select>
        {/* <input id="prn"placeholder='PRN of student'onChange={(e)=>handleChange(e)} type="text" className="prn-text"/> */}
        <select id="prn" className='prn-text' onChange={(e)=>handleChange(e)} >
            <option>select student</option>
            {  students ?
                students[0].map((item,key)=>{
                    return (
                        <option key={key}>{item.prn}</option>
                    )
                }):''
                
            }
            {/* <option>Mathematics</option>
            <option>English</option> */}
        </select>
        <Link to={"/addedlist/"+studData.subj+"/"+studData.prn}><button type="submit" className='enroll-btn'>Enroll</button></Link>
    </form>
    </div>
    </div>
    </>
    )
}