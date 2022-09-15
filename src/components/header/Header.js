import { useEffect } from "react";
import CustomButton from "../../custom/customButton/CustomButton";
import "./Header.css";

function Header(){

    useEffect(() => {
        const navElements = document.querySelectorAll(".nav-element");
        let transitionDelay = 0;
        for(let i = 0; i < navElements.length; i++){
            navElements[i].style.transitionDelay = `${transitionDelay}ms`;
            navElements[i].style.top = "0px"
            transitionDelay += 100;
        }
    }, [])

    return(
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <a href="/"><label className="logo-label">YouBa</label></a>
                </div>
                <div className="navbar-container">
                    <ol className="navbar">
                        <li className="nav-link nav-element">About</li>
                        <li className="nav-link nav-element">Experience</li>
                        <li className="nav-link nav-element">Contact</li>
                        <li className="nav-btn nav-element"><CustomButton text={"Resume"} /></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Header;