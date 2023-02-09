import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

function Socials() {
  useEffect(() => {
    const iconsContainer = document.querySelector(".socials-icons-container");
    iconsContainer.style.opacity = "1";
  }, []);
  return (
    <div className="socials-icons-container">
      <ul className="socials-list">
        <li className="social-icon">
          <a href="https://it.linkedin.com/in/youssef-bachaoui-926a061a1">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://www.instagram.com/youss__02?r=nametag">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://github.com/YOUBCH">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <div className="my-email">
        <p>
          <a href="mailto:bachaouiyoussef02@gmail.com">
            bachaouiyoussef02@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Socials;
