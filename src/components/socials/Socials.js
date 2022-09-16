import "./Socials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from "react";

function Socials() {
    useEffect(() => {
        const iconsContainer = document.querySelector(".socials-icons-container");
        iconsContainer.style.opacity = "1";
    }, [])
return (
    <div className="socials-icons-container">
        <ul className="socials-list">
            <li className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
            <li className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
            </li>
        </ul>
        <div className="my-email">
            <p>bachaouiyoussef02@gmail.com</p>
        </div>
    </div>
)
}

export default Socials;