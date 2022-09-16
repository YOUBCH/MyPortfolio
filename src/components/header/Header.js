import { useEffect, useState } from "react";
import CustomButton from "../../custom/customButton/CustomButton";
import "./Header.css";
import resume from "../../myFiles/Youssef_Bachaoui_Resume.pdf";
function Header(){

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const navElements = document.querySelectorAll(".nav-element");
        let transitionDelay = 0;
        for(let i = 0; i < navElements.length; i++){
            navElements[i].style.transitionDelay = `${transitionDelay}ms`;
            navElements[i].style.top = "0px"
            transitionDelay += 100;
        }
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        
    }, [])

    useEffect(() => {
        const element = document.querySelector('.header-container');
        if(offset > 50) {
            element.style.height = "80px";
            element.style.background = "#0a0f2fe8";
            element.style.backdropFilter = "blur(10px)";
        } else if(offset < 50){
            element.style.height = "150px";
            element.style.background = "var(--background-color)";
            element.style.backdropFilter = "none";
        }
    }, [offset])

    console.log(offset)



    return(
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <a href="/"><label className="logo-label">YouBa</label></a>
                </div>
                <div className="navbar-container">
                    <ol className="navbar">
                        <li className="nav-link nav-element"><a href="#about" >About</a></li>
                        <li className="nav-link nav-element">Experience</li>
                        <li className="nav-link nav-element">Contact</li>
                        <li className="nav-btn nav-element"><a href={resume}  target="_blank"><CustomButton text={"Resume"} /></a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Header;