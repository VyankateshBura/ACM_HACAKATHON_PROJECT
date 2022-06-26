import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SetQuestions.css';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
import SavedPaper from './SavedPaper';
import Question from './Question';
export default function SetQuestions(){
    // const [n,setN]=React.useState(0)
    const [ques,setQues]=React.useState(["Add"])
    const [paperData,setPaperData]=React.useState({"name":"","marks":0,"subject":""})
    const [quesData,setQuesData]=React.useState([])
    function addQ(){
        setQues([...ques,"Add"])
        quesData.push(queData)
    }
    const [queType, setQueType]=React.useState("Type of Question")
    // const [image,setImage]=React.useState("")
    const [queData,setQueData]=React.useState({"queno":0,"que":"","marks":0,"quetype":"Desriptive","option1":"","option2":"","option3":"","option4":""})
    function handleChanges(e){
        const newQueData={...queData}
        newQueData[e.target.id]=e.target.value
        setQueData(newQueData)
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

    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Paper"/></div>
                </span>
    </div>
    
    {/* {ques.map(function display(item,i){
        if(){
            return(<>
                <div className="MCQ-Que-Page">
                    <div className="MCQ-block1">
                            Que no.
                        </div>
                        <div className="MCQ-block2">
                            Question Discription
                        </div>
                        <div className="MCQ-options">
                            <input Name="select" type="radio"/> A. Option 1
                        </div>
                        <div className="MCQ-options">
                            <input Name="select" type="radio"/> B. Option 2
                        </div>
                        <div className="MCQ-options">
                            <input Name="select" type="radio"/> C. Option 3
                        </div>
                        <div className="MCQ-options">
                            <input Name="select" type="radio"/> D. Option 4
                        </div>
                    </div>
                </>)
        }
        else{
            return(<div className="Main-box">
            <div className="Content-box"></div>
            <div className="Desc-block1">
                    Que no.
            </div>
            <div className="Desc-block2">
                    Question Description
            </div>
            <div className="Desc-options">
                    <input className="Desc-fileIn" type="file"></input>   
                    <input className="Desc-fileIn" type="file"/>
            </div>
            <div className="Desc-options">
                    <input className="Desc-fileIn" type="file"/>
                          
                    
                    <input className="Desc-fileIn" type="file"/>
            </div>
            <div className="textOut">
            <div>
            Text editor</div>
            <div>
            <input type="text" placeholder="Type the answer/code here........" className="textin"></input></div>
            </div>
                    </div>)
        }
    })} */}
    {/* <span className='two-btns'> */}
    {/* <button className='ques-set-btn' onClick={addQ}>Save Question and Add New</button> */}
    <button type="submit" className='ques-name-set-btn'>Submit Paper</button>
    {/* </span> */}
    </div>
    </div>
    </>
    )
}