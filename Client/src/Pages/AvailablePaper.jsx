import './AvailablePaper.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar2 from '../Components/Navbar2';
import { Link,useLocation } from 'react-router-dom';
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function AvailablePaper(){
    const [addcss, setaddcss] = useState("12vw")
    const [questionpaper, setQuestionpaper] = useState(null)
    const role = useLocation()
    console.log(role);

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/faculty/examination/setexam/:subject/availablequestionpaper",{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res.data.questionPapers);
            setQuestionpaper(res.data.questionPapers)
            AOS.init();
        }).catch((err)=>console.log(err));
      
    }, [])
    console.log(questionpaper)
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
    return(
        <>
        <div className='avail-page'>
    <Navbar2 shift={shift} role={role} />
    <div className='avail-outer-box'style={{marginLeft:`${addcss}`,width:`80vw`}}>
    <div className='avail-title'><p className='avail-name mx-auto' >Available Papers</p></div>
    <div className='paper-container'>
        {
            questionpaper &&
            questionpaper.map((item)=>{
                return(
                    <Link key={item._id} to={`/availablepapers/${item._id}`}className="link">
                        <div  data-aos="flip-left"data-aos-duration="1500" className='paper'>{item.name}
                        <hr style={{border:'1px solid black',width:'90%'}}></hr>
                        <p className='paper-name' style={{height:"40%",width:"70%",overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'pre-wrap'}}>{item.subject}</p></div>
                    </Link>
                )
            })
        }
        {/* <div className='paper'><p className='paper-name'>Paper 1</p></div>
        <div className='paper'><p className='paper-name'>Paper 2</p></div>
        <div className='paper'><p className='paper-name'>Paper 3</p></div>
        <div className='paper'><p className='paper-name'>Paper 4</p></div> */}
    </div>
        
    </div>
    </div>
        </>
    )
}