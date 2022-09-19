import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faJava, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <section id="about">
            <h1 className="section-titles">About Me</h1>
            <p>Hello! My name is Youssef and i'm in love with programming. I started
                programming at 17 years old as a self-learner, starting with the front-end in Javascript, HTML and CSS.
                Since that moment i felt in love with this world.</p>
            <p>
                After getting my high school diploma i started working as a full-stack developer using React, Java and the Spring framework.
            </p>
            <p>
                Here are a few technologies i learned recently:
            </p>
            <div className="languages-icons-container">
                <FontAwesomeIcon icon={faReact} className="language-icon"/>
                <FontAwesomeIcon icon={faSquareJs} className="language-icon"/>
                <FontAwesomeIcon icon={faJava} className="language-icon"/>
                <FontAwesomeIcon icon={faNodeJs} className="language-icon" />
                <FontAwesomeIcon icon={faPhp} className="language-icon" />
            </div>
        </section>
    )
}

export default About;