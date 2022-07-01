import React,{useState,useEffect} from 'react';
import './Results.css';
import { useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar2 from '../Components/Navbar2';
function Results(){
    const role=useLocation().state
    const [addcss,setaddcss] = useState("8vw");
    useEffect(() => {
        AOS.init();
    }, [])
    
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
    return(
    <>
    <div className='result-page'>
    <Navbar2 shift = {shift} role={role}/>
    <div className='result-outer-box'style={{marginLeft:`${addcss}`,width:"80%",height:'fit-content'}}>
        <div className='result-title'><p className='result-option-name'>Results</p></div>
        <div className='sem-result'>
        <div className="sem-title"><p className='result-option-name'>Semester I</p></div>
        <span>
        <div className='result-option'><a>Grade Card</a></div>
        <div className='result-option'><a>Marks</a></div>
        </span>
        </div>
    </div>
    </div>
    </>
    )
}
export default Results;