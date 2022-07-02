import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar2 from "../Components/Navbar2"
const EachPaper = () => {
    const [paper, setpaper] = useState(null)
    const [arrayQues, setArrayques] = useState(null)
    const loc = useLocation().pathname.split('/').pop();
    useEffect(() => {
        AOS.init();
        console.log(loc)
        axios.get(`http://localhost:5000/api/v1/faculty/examination/setexam/:subject/savepaper/${loc}`,{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            setpaper({subject:res.data.questionPaper[0].subject,marks:res.data.questionPaper[0].marks,name:res.data.questionPaper[0].name})
            setArrayques([...res.data.questionPaper[0].question])
           console.log([...res.data.questionPaper[0].question]);
        }).catch((err)=>console.log(err));
    
     
    }, [])
    const [addcss,setaddcss] = useState("8vw");
    function shift(value){
        if(value==true){
            console.log("Navbar active");
            setaddcss("18vw");
        }
        else{
            console.log("Navbar closed");
            setaddcss("8vw"); 
        }
    }
  return (
 
    <div className='page'>
    <Navbar2 shift = {shift}role="Student"/>
    <div className='outer-box'  style={{marginLeft:`${addcss}`}}>
        <div className='Question_paper ' style={{padding:'10px',margin:'5vw 5vh'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>{paper && paper.subject?paper.subject:'Question Paper'}</h4>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>{paper && paper.name?paper.name:"Name of paper"}</h4>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>Total Marks :{paper && paper.marks?paper.marks:""}</h4>
            </div>
            
            {
                arrayQues&&
                arrayQues.map((item,key)=>{
                    return(
                        
                        item[0].quetype=="MCQ"?
                        <div data-aos="zoom-in-up"data-aos-duration="1500" className='Container' key={key}>
                            <div className='Question'>Question No :&nbsp;{item[0].queno}</div>
                            <div className='Question'>Question: &nbsp;{item[0].que}</div>
                            <div className='Question'> Type:&nbsp; {item[0].quetype}</div>
                            <div className='Question'> Mark :&nbsp;{item[0].marks}</div>
                            <div className='Question'>Option 1: &nbsp;{item[0].option1}</div>
                            <div className='Question'>Option 2: &nbsp;{item[0].option2}</div>
                            <div className='Question'>Option 3: &nbsp;{item[0].option3}</div>
                            <div className='Question'>Option 4: &nbsp;{item[0].option4}</div>                
                        </div>:<div data-aos="zoom-in-up"data-aos-duration="1500" className='Container' key={key}>
                        <div className='Question'>Question No :&nbsp;{item[0].queno}</div>
                            <div className='Question'>Question: &nbsp;{item[0].que}</div>
                            <div className='Question'> Type: &nbsp;{item[0].quetype}</div>
                            <div className='Question'> Mark :&nbsp;{item[0].marks}</div>
                        </div>
                    )
                })
            }

        </div>
    </div>
    </div>
  )
}

export default EachPaper