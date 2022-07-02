import "./BlueButton.css";
export default function BlueButton(props){
    return(
        <button className="button" style={{height:"10vh",width:'fit-content',padding:'10px 10px',verticalAlign:'center'}}>{props.title}</button>
    )
}