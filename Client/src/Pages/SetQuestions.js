import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
// import Question from './Question';
export default function SetQuestions(){
    // const [n,setN]=React.useState(0)
    const [ques,setQues]=React.useState(["Add"])
    const [paperData,setPaperData]=React.useState({"name":"","marks":0,"subject":""})
    const [quesData,setQuesData]=React.useState([])
    async function addQ(){
        // setQues([...ques,"Add"])
        // quesData.push(queData)
        try{
            const res = await axios.post('htt')
            console.log(res);
        }catch(err){
            console.log(err);
        }
        
    }
    const [queType, setQueType]=React.useState("Type of Question")
    // const [image,setImage]=React.useState("")
    const [queData,setQueData]=React.useState({"queno":0,"que":"","marks":0,"quetype":"Desriptive","option1":"","option2":"","option3":"","option4":""})
    function handleChanges(e){
        const newQueData={...queData}
        newQueData[e.target.id]=e.target.value
        setQueData(newQueData)
    }

    //Array of Questions
    function UploadPaper(){
       axios.post()

    }

    // function handleImage(e){
    //     if(e.target.files && e.target.files[0]){
    //         let pic=e.target.files[0]
    //         setImage({image:URL.createObjectURL(pic)})
    //     }
    // }
    // function handleQueType(e){
    //     setQueType(e.target.value)
    // }
    function MakeQuestionPaper(){
        axios.post("")
    }
    function displayopts1(){
        if(queData.quetype==="MCQ"){
        return(
        <div className='opts-list'>
        <input id="option1" placeholder='Enter Option 1' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option2" placeholder='Enter Option 2' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option3" placeholder='Enter Option 3' onChange={handleChanges} type="text" className='que-text'/>
        <input id="option4" placeholder='Enter Option 4' onChange={handleChanges} type="text" className='que-text'/>
        </div>)}
    }
    console.log(queData)
    console.log(quesData)
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue onClick={MakeQuestionPaper}name="Set Paper"/></div>
                </span>
    </div>
    <form className='question'>
    <select id="subject" className='que-text'  >
            <option>select subject</option>
            <option>Mathematics</option>    
            <option>English</option>
        </select>
        <input id="name" placeholder='Name of paper'type="text" className="que-text"/>
        <input id="marks" placeholder='Marks of paper' type="number" className="que-text"/>
    </form>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Questions"/></div>
                </span>
    </div>
    {/* <Question/> */}
    {ques.map((item,i)=>(
    <div>
        <form className='question'>
        <input id="queno"onChange={handleChanges} placeholder='Question number' type="number" className='que-text'/>
        <input id="que"placeholder='Type the question here' onChange={handleChanges} type="text" className='que-text'/>
        <select id="quetype"value={queData.quetype} className='que-text' onChange={handleChanges}>
            <option>Type of Question</option>
            <option>Descriptive</option>
            <option>MCQ</option>
        </select>
        <input id="marks"placeholder='Marks of question'onChange={handleChanges} type="number" className='que-text'/>
        {/* <span className='add-img-span'>
        <label className='add-img-label'>Add image:  </label>
        <input type="file" placeholder="Add Image" onChange={handleImage} />
        </span> */}
        {displayopts1()}
        {/* <button className="add-que-button">Save Question</button> */}
    </form>
    </div>
    ))}
    {/* <span className='two-btns'> */}
    <button className='ques-set-btn' onClick={addQ}>Save Question and Add New</button>
    <button type="submit" className='ques-name-set-btn' onClick={UploadPaper}>Save Paper</button>
    {/* </span> */}
    </div>
    </div>
    </>
    )
}