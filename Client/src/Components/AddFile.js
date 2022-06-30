import "./AddFile.css";
import {ReactComponent as Noteicon} from "../Icons/note-icon.svg";
export default function AddFile(){
    return(
        <div className ="fixed-bottom" style={{padding:"2vh",marginLeft:'70vw'}}>
            <div className="btn bg-light fw-bold notes"style={{width:'15vw',height:'10vh',padding:'3vh',borderRadius:'15px'}} >Upload Notes
            </div>
            {/* <span  className = "tooltip" style={{display:'none'}}>Click on upload notes to choose file</span> */}
            <input style={{display:'none'}} id="files" type="file"/>
            <label htmlFor="files">
            <Noteicon className="note-icon rounded" style={{marginLeft:'2vw',padding:'1vh',width:'5vw',height:'8vh',backgroundColor:'black'}}/> 
            </label>
            
            {/* <h1>
            Subject
            </h1> */}
            
        </div>
        
    )
}

