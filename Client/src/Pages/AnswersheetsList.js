import './AnswersheetsList.css';
import {Link} from "react-router-dom";
import Navbar2 from '../Components/Navbar2';
function AnswersheetsList(){
    return(
    <>
    <div className='answersheets-page'>
    <Navbar2/>
    <div className='answersheets-outer-box'>
        <div className='answersheets-title'><p className='answersheet-link'>List of Answersheets</p></div>
        <Link to="/checkque"><div className='answersheet'><p className='answersheet-link'>Answersheet 1</p></div></Link>
        <Link to="/checkque"><div className='answersheet'><p className='answersheet-link'>Answersheet 2</p></div></Link>
        <Link to="/checkque"><div className='answersheet'><p className='answersheet-link'>Answersheet 3</p></div></Link>
        <Link to="/checkque"><div className='answersheet'><p className='answersheet-link'>Answersheet 4</p></div></Link>
    </div>
    </div>
    </>
    )
}
export default AnswersheetsList;