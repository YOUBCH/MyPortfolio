import "./CustomButton.css";

function CustomButton(props){
    return(
        <div className="CustomButton">
            <label>{props.text}</label>
        </div>
    )
}

export default CustomButton;