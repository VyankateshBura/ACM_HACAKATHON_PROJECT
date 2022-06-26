import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
export default function SetQuestions(){
    // const RouterContext=React.createContext()
    const addr=useLocation().pathname;
    console.log(addr)
    const [queType, setQueType]=React.useState("Type of Question")
    const [queData,setQueData]=React.useState({"queno":0,"que":"","quetype":"","marks":0})
    function handleChanges(e){
        const newQueData={...queData}
        newQueData[e.target.id]=e.target.value
        setQueData(newQueData)
    }
    // const [ques,setQues]=React.useState("Set Question")
    // function toggleQuesToList(){
    //     setQues("Paper")
    // }
    // function toggleQuesToSet(){
    //     setQues("Set Question")
    // }
    function changeQueType(e){
        setQueType(e.target.value)
    }
    function displayopts1(){
        if(queType==="MCQ"){
        return(
        <div className='opts-list'>
        <input placeholder='Enter Option 1' type="text" className='que-text'/>
        <input placeholder='Enter Option 2' type="text" className='que-text'/>
        <input placeholder='Enter Option 3' type="text" className='que-text'/>
        <input placeholder='Enter Option 4' type="text" className='que-text'/>
        </div>)}
    }
    // if(ques==="Set Question")
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Edit Question"/></div>
                </span>
                {/* <span>
                    <Link to="savedPaper"><div ><OptionBoxWhite name="Saved Paper" /></div></Link>
                </span> */}
    </div>
    <form className='question'>
        <input id="queno"onChange={handleChanges} placeholder='Question number' type="number" className='que-text'/>
        <input id="que"placeholder='Type the question here' type="text" className='que-text'/>
        <select id="quetype"value={queType} className='que-text' onChange={changeQueType}>
            <option>Type of Question</option>
            <option>Descriptive</option>
            <option>MCQ</option>
        </select>
        <input id="marks"placeholder='Marks of question' type="number" className='que-text'/>
        <span className='add-img-span'>
        <label className='add-img-label'>Add image:  </label>
        <input type="file" placeholder="Add Image" />
        </span>
        {displayopts1()}
        <button className="add-que-button">Save Question</button>
    </form>
    <div className='two-buttons'>
        {/* <div><BlueButton className="edit-button" title="Add Question"/></div> */}
        <Link to={"/savedpaper/"+queData.queno}><BlueButton className="edit-button" title="Save Paper"/></Link>
    </div>
    </div>
    </div>
    </>
    )
}