import CustomButton from "../custom/customButton/CustomButton";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <section id='contact'>
            <h1 className="section-titles contact-title">Get in Touch</h1>
            <p>
                You can contact me whenever you'd like. If you have some questions, opportunity or just want to say hi, i'll get back to you as soon as possible!
            </p>
            <div className="sendmail-btn contact-btn">
                <a href='mailto: bachaouiyoussef02@gmail.com'>
                    <CustomButton text="Send email" />
                </a>
            </div>
            <p>OR</p>
            <div className="to-linkedin-btn contact-btn">
                <a href='https://it.linkedin.com/in/youssef-bachaoui-926a061a1'>
                    <CustomButton text="Find me on Linkedin" />
                </a>
            </div>
        </section>
    )
}

export default Contact;