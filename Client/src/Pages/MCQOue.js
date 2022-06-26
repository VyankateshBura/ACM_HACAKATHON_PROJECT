import "./MCQQue.css";
import Navbar2 from "../Components/Navbar2";
import QueNo from "../Components/QueNo";
import BlueButton from "../Components/BlueButton"
function MCQQue(){
    return(
        <>
        <Navbar2/>
        <div className="box1">
            <div className="box2">
            <div className="first-box">
                <div className="block1">
                    Que no.
                </div>
                <div className="block2">
                    Question Discription
                </div>
                <div className="options">
                    <input Name="select" type="radio"/> A. Option 1
                </div>
                <div className="options">
                    <input Name="select" type="radio"/> B. Option 2
                </div>
                <div className="options">
                    <input Name="select" type="radio"/> C. Option 3
                </div>
                <div className="options">
                    <input Name="select" type="radio"/> D. Option 4
                </div>
                <div className="submitButton">
                    <div className="submitButtonIn">
                <BlueButton title="Previous Question"/></div>
                <div className="submitButtonIn">
            <BlueButton title="Next Question"/></div>
            </div>
            </div>

            <div className="second-box">
                <BlueButton title="All Questions"/>
                <div className="queNumber">
                <QueNo/>
                <QueNo/>
                <QueNo/>
                <QueNo/>
                <QueNo/>
                </div>
                <div className="queNumber">
                
                <QueNo/>
                <QueNo/>
                <QueNo/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default MCQQue;
;