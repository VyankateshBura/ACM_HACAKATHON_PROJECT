import './NotesPageFaculty.css';
import Navbar2 from '../Components/Navbar2';
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function NotesPageFaculty(){
    return(
        <>
        <div className='noteslist-page'>
    <Navbar2/>
    <div className='noteslist-outer-box'>
    <div className='noteslist-title'><p className='noteslist-name'>Notes</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 1</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 2</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 3</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 4</p></div>
        <span className='add-notes-span'>
        <label className='add-notes-label'>Add file:  </label>
        <input type="file" placeholder="Add Image" />
        </span>
        <button className="add-notes-button">Upload</button>
    </div>
    </div>
        </>
    )
}