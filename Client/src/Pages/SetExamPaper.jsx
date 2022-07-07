import './SetExamPaper.css';
import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import BlueButton from "../Components/BlueButton"
import Cards from '../Components/Cards';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
export default function SetExamPaper(){
    const [addcss, setaddcss] = useState("12vw")
    const [subjects,setSubject] = React.useState(null);
    const [sub,setSub]=React.useState("")
    
    useEffect(() => {
        AOS.init();
        axios.get("http://localhost:5000/api/v1/faculty/examination/setexam",{
            headers:{
                token:localStorage.getItem('token')
            }
         }).then((res)=>{
            // console.log(res); 
            let data = [...res.data.courses];
            data = data.filter(function(entry) { return entry.trim() != ''; });
            setSubject([...data])
            
         })
    
      
    }, [])
    console.log(subjects);
    function handleSubject(e){
        setSub(e.target.value)
    }
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("12vw"); 
        }
    }
    const role=useLocation().state;
    return(
    <>
    <div className='set-exam-page'>
    <Navbar2 shift={shift} role={role}/>
    <div className='set-ex-outer-box'style={{marginLeft:`${addcss}`,width:`80vw`}}>
        {/* <select value={sub} className="course-choice" onChange={handleSubject}>
        <option>Select Subject</option>
            {
                subjects&&
                subjects.map((item,key)=>{
                    return(
                        
                        <option key={key}>{item}</option>
                    )
                })
            }
        
        </select> */}
    <div className="set-exam-options-box">
        <Link to="/availablepapers" className='link mx-3'>
          
                <div className='dabba'data-aos="flip-left"data-aos-duration="1500">Available Papers</div>
                {/* <BlueButton title={"Available Papers"}/> */}
            
                        {/* <Cards title={"Available Papers"} /> */}
                </Link>
                <Link to={"/setnewpaper/"+sub} className='link mx-3'>
                <div className='dabba' data-aos="flip-left"data-aos-duration="1500">Set New Paper</div>
                 {/* <Cards title={"Set New Paper"} /> */}
                </Link>
            </div>
    </div>
    </div>
    </>
    )
}