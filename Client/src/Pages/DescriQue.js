import "./DescriQue.css";

export default function DescriQue(){
    return(
        <div className="Main-box">
            <div className="Content-box"></div>
            <div className="Desc-block1">
                    Que no.
            </div>
            <div className="Desc-block2">
                    Question Description
            </div>
            <div className="Desc-options">
                    <input className="Desc-fileIn" type="file"></input>   
                    <input className="Desc-fileIn" type="file"/>
            </div>
            <div className="Desc-options">
                    <input className="Desc-fileIn" type="file"/>
                          
                    
                    <input className="Desc-fileIn" type="file"/>
            </div>
            <div className="textOut">
            <div>
            Text editor</div>
            <div>
            <input type="text" placeholder="Type the answer/code here........" className="textin"></input></div>
            </div>
                    </div>
    )
}

