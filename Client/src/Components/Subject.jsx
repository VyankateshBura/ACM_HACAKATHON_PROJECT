import React,{useState,useEffect} from 'react'
import {Images} from "../Images/ImagesIndex"
import { Link,useLocation } from 'react-router-dom'
import "./SubjectNotes.css"

const Subject = (props) => {
  let loc=useLocation();
  loc = loc.pathname.split('/').pop().replace(/%20/g," ");
  console.log(loc);
  
  return (
    <div className="">
        <div className="col "data-aos="flip-left"data-aos-duration="1500"style={{width:"35vh",height:"35vh",margin:"5vh"}}>
              <div className="card card-cover h-90 overflow-hidden NotesCard text-black  border-radius-pill shadow-lg Card3" >
                <img src={Images.Notes} style={{width:"35vh",height:"25vh"}}alt="Blog image"/>
                <div className="d-flex flex-column h-60 p-2 pb-1 text-black text-shadow-1">
                  <Link to={`/notes/${loc}/${props.filename}`} state={loc.role}  className="link">
                      <h5 className="pt-0 mx-2 my-2 display-9 fw-bold Notescard" style={{height:"4%",width:"95%",overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{props.subject}</h5>
                  </Link>
                  
                  {/* <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <i className="bi bi-hand-thumbs-up-fill like" style={{fontSize: 30, marginTop: 0}}></i>
                      <i className="bi bi-hand-thumbs-down-fill like" style={{fontSize: 30}}></i>
                    </li>
                    <li className="d-flex align-items-center me-3 dat">
                      {/* <strong>{props.date}</strong> */}
                    {/*</li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots-fill bi-xs msg" style={{fontSize: 25,height: 40,width: 40}}></i>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
    </div>
  )
}

export default Subject