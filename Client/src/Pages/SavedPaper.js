import './SavedPaper.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
import BlueButton from '../Components/BlueButton';
export default function SavedPaper(){
    // function displayopts2(){
    //     if(queType==="MCQ"){
    //     return(
    //         <div className='opts-list'>
    //     <label className='que-text'>Opt1</label>
    //     <label className='que-text'>Opt2</label>
    //     <label className='que-text'>Opt3</label>
    //     <label className='que-text'>Opt4</label>
    //     </div>
    //     )}
    // }
    return(
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Saved Paper"/></div>
                </span>
    </div>
    <div className='question'>
        <label className='que-text'>Question number</label>
        <label className='que-text'>Question</label>
        <label className='que-text'>Question type</label>
        <label className='que-text'>Marks</label>
        <img className='que-img'/>
        {/* {displayopts2()} */}
        <div className='two-buttons'>
        <BlueButton className="edit-button" title="Edit"/>
        <BlueButton className="edit-button" title="Delete"/>
        </div>
    </div>
    <BlueButton className="paper-save" title="Save Paper"/>
    </div>
    </div>
        </>
    )
}