import "./BlueButton.css";
export default function BlueButton(props){
    return(
        <button className="button" style={{height:"fit-content",width:'fit-content'}}>{props.title}</button>
    )
}