import "./Socials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Socials() {
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
        </div>
    )
}

export default Socials;