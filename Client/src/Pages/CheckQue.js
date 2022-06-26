import "./CheckQue.css";
import Navbar2 from "../Components/Navbar2";
import TestMarks from "../Components/TestMarks";
function CheckPage() {
    return (
        <>
            <div className="CheckQue">
            <Navbar2 />
            <div className="Check-box1">
                <div className="First-sec">
                    <div className="heading">
                        <h2>Student's PRN</h2>
                    </div>
                    <div className="mark">
                        <div className="marks-div">
                        
                                <div>
                                    total marks obtained
                                </div>
                                <div>
                                    <input type="text" placeholder="enter marks"></input>
                                </div>
                            
                        </div>
                        <div className="marks-div">
                        
                                <div>
                                    total marks
                                </div>
                                <div>
                                    <input type="text" ></input>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div className="sec-section">
                    <div>
                    <TestMarks/>
                    </div>
                    <br></br>
                    <div>
                    <TestMarks/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CheckPage;
;