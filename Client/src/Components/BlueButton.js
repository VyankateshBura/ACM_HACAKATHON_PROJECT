import "./BlueButton.css";
export default function BlueButton(props){
    return(
        <button className="button" style={{width:'fit-content'}}>{props.title}</button>
    )
}