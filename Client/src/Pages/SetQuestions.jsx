import React, { useEffect,useState } from 'react';
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
    const [subject,setSubject]=React.useState([])
    const [ques, setques] = useState(["Add"])
    const [paperData,setPaperData]=React.useState({"name":"","marks":0,"subject":""})
    const [arrayQues,setarrayQues]=React.useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/faculty/examination/setexam",{
            headers:{
                token:localStorage.getItem('token')
            }
        }).then((res)=>{
            let arr = res.data.courses;
            arr = arr.filter(function(entry) { return entry.trim() != ''; });
            setSubject([...arr]);
            // console.log(res.data.courses);
        })
    
    }, [])
    

    async function addQ(value){
        setarrayQues(prevState=>([
            ...prevState,queData
        ]))    
    }
    console.log(arrayQues);
    const [queType, setQueType]=React.useState("Type of Question")
    const [paper,setPaper]=React.useState(null)
    const [queData,setQueData]=React.useState({"queno":0,"que":"","marks":0,"quetype":"Desriptive","option1":"","option2":"","option3":"","option4":""})
    function handleChanges(e){
        const newQueData={...queData}
        newQueData[e.target.id]=e.target.value
        setQueData(newQueData)
    }
    function handleChange(e){
        const newQueData={...paper}
        newQueData[e.target.id]=e.target.value
        setPaper(newQueData)

    }

    //Array of Questions
    function UploadPaper(){
        let formData = new FormData();
        console.log(arrayQues);
        formData.append("question",JSON.stringify(arrayQues));
        formData.append("subject",paper.subject);
        formData.append("name",paper.name);
        formData.append("totalmarks",paper.totalmarks);
        formData.append("faculty_name",localStorage.getItem('name'));
        const data = formData.getAll('question')
        console.log(data);
       axios.post("http://localhost:5000/api/v1/faculty/examination/setexam/:subject/createquestionpaper",formData,{
        headers:{
            token:localStorage.getItem('token')
        }
       }).then((res)=>{
        console.log(res)
       }).catch(err=>console.log(err));

    }

    function MakeQuestionPaper(e){
        e.preventDefault();
        // console.log(paper) 
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
   
    // console.log(quesData)
    return (
        <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
    <div className="set-exam-options-box">
    </div>
    <form className='question' encType=" multipart/form-data">
    <select id="subject" className='que-text' onChange={handleChange} >
            <option>select subject</option>
            {
                subject&&
                subject.map((item,key)=>{
                    return(
                        <option key={key}>{item}</option>
                    )
                })
            }
            {/* <option>Mathematics</option>    
            <option>English</option> */}
        </select>
        <input id="name" placeholder='Name of paper' onChange={handleChange}type="text" className="que-text"/>
        <input id="totalmarks" placeholder='Marks of paper' type="number" onChange={handleChange}className="que-text"/>
        <button className="ques-set-btn" onClick={MakeQuestionPaper}> Set paper</button>
    </form>
    <div className="set-exam-options-box">
                <span>
                    <div><OptionBoxBlue name="Set Questions"/></div>
                </span>
    </div>
    {/* <Question/> */}
    {ques.map((item,i)=>(
    <div key={i}>
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
        <div className='Question_paper ' style={{padding:'10px',margin:'5vw 5vh'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>{paper && paper.subject?paper.subject:'Question Paper'}</h4>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>{paper && paper.name?paper.name:"Name of paper"}</h4>
                <h4 style={{display:"inline",margin:'17vw 50vh',fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",margin:'2vw 2vh'}}>Total Marks :{paper && paper.totalmarks?paper.totalmarks:""}</h4>
            </div>
            
            {
                arrayQues&&
                arrayQues.map((item,key)=>{
                    return(
                        item.quetype=="MCQ"?
                        <div className='Container' key={key}>
                            <div className='Question'>Question No :&nbsp;{item.queno}</div>
                            <div className='Question'>Question: &nbsp;{item.que}</div>
                            <div className='Question'> Type:&nbsp; {item.quetype}</div>
                            <div className='Question'> Mark :&nbsp;{item.marks}</div>
                            <div className='Question'>Option 1: &nbsp;{item.option1}</div>
                            <div className='Question'>Option 2: &nbsp;{item.option2}</div>
                            <div className='Question'>Option 3: &nbsp;{item.option3}</div>
                            <div className='Question'>Option 4: &nbsp;{item.option4}</div>                
                        </div>:<div className='Container' key={key}>
                        <div className='Question'>Question No :&nbsp;{item.queno}</div>
                            <div className='Question'>Question: &nbsp;{item.que}</div>
                            <div className='Question'> Type: &nbsp;{item.quetype}</div>
                            <div className='Question'> Mark :&nbsp;{item.marks}</div>
                        </div>
                    )
                })
            }

        </div>
    
    </div>
    </div>
    </>
    )
}