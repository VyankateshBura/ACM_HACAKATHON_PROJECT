import axios from 'axios'
import React,{useState,useEffect} from 'react';
import Spinner from 'react-spinkit';
import Navbar2 from '../Components/Navbar2'
import {useLocation} from "react-router-dom";
const NotesPage = () => {
  let loc = useLocation().pathname.split("/").pop();
  const [filename, setfilename] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setfilename(loc);
  }, [])
  function hideLoad(){
    setLoading(false);
    console.log("hide the load");
  }
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
  
    <div style={{width:'100%',height:'100%'}}>
      {loading? <Spinner
            className="loading text-center"
            style={{marginTop:'40vh'}}
            name="three-bounce"
            color="black"
            fadeIn="none"
          ></Spinner>:null}
        <embed src={`http://localhost:5000/api/v1/files/${filename}`} onLoad={hideLoad}  type="application/pdf"   height="1000vh" width="100%"></embed>
        </div>
    
  )
}

export default NotesPage