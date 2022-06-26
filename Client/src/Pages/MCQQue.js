import "./MCQQue.css";
import Navbar2 from "../Components/Navbar2";
import QueNo from "../Components/QueNo";
import BlueButton from "../Components/BlueButton"
function MCQQue(){
    return(
        <>
        <div className="MCQ-Que-Page">
            <div className="MCQ-block1">
                    Que no.
                </div>
                <div className="MCQ-block2">
                    Question Discription
                </div>
                <div className="MCQ-options">
                    <input Name="select" type="radio"/> A. Option 1
                </div>
                <div className="MCQ-options">
                    <input Name="select" type="radio"/> B. Option 2
                </div>
                <div className="MCQ-options">
                    <input Name="select" type="radio"/> C. Option 3
                </div>
                <div className="MCQ-options">
                    <input Name="select" type="radio"/> D. Option 4
                </div>
            
            </div>

        </>
    )
}

export default MCQQue;
;