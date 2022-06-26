import "./OptionBoxBlue.css";
export default function OptionBoxBlue(props){
    return(
        <div className="toggle-outer-box">
            <div className="toggle-inner-box">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}