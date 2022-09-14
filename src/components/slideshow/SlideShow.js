import "./SlideShow.css";
import javaLogo from "../../images/322px-Java_Logo.png";

function SlideShow(){
    return(
        <div className="slideshow">
            <img className="slideshow-image" src={javaLogo}/>
        </div>
    )
}

export default SlideShow;