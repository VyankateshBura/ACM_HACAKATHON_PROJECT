import "./OptionBoxWhite.css";
export default function OptionBoxWhite(props){
    return(
        <div className="toggle-outer-box-white">
            <div className="toggle-inner-box-white">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}