import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EnrollStudent.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
export default function EnrollStudent(){
    const [studData,setStudData]=React.useState({"subj":"","prn":""})
    function handleChange(e){
        const newStudData={...studData}
        newStudData[e.target.id]=e.target.value
        setStudData(newStudData)
    }
    return (
        <>
    <div className='enroll-page'>
    <Navbar2/>
    <div className='enroll-outer-box'>
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
            <option>Mathematics</option>
            <option>English</option>
        </select>
        <input id="prn"placeholder='PRN of student'onChange={(e)=>handleChange(e)} type="text" className="prn-text"/>
        <Link to={"/addedlist/"+studData.subj+"/"+studData.prn}><button type="submit" className='enroll-btn'>Enroll</button></Link>
    </form>
    </div>
    </div>
    </>
    )
}