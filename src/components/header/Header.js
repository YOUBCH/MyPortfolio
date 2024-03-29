import { useEffect, useState } from "react";
// import CustomButton from "../custom/customButton/CustomButton";
import "./Header.css";
// import resume from "../../myFiles/Youssef_Bachaoui_Resume.pdf";
function Header() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const navElements = document.querySelectorAll(".nav-element");
        let transitionDelay = 0;
        for (let i = 0; i < navElements.length; i++) {
            navElements[i].style.transitionDelay = `${transitionDelay}ms`;
            navElements[i].style.top = "0px"
            transitionDelay += 100;
        }

        const hamburger = document.querySelector(".hamburger-lines");
        hamburger.style.transform = "translateY(0px)";

        const logo = document.querySelector(".logo-container");
        logo.style.transform = "translateY(0px)";

        document.querySelectorAll(".nav-link").forEach(item => {
            console.log('metto gli eventi')
            item.addEventListener('click', (e) => {
                console.log('parto io')
                e.stopImmediatePropagation();
                const checkbox = document.querySelector('#check-menu');
                checkbox.checked = false;
                changeMenuVisibility();
            }
            )
        });
        
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);

    }, [])

    useEffect(() => {
        const element = document.querySelector('.header-container');
        if (offset > 50) {
            element.style.height = "80px";
            element.style.backdropFilter = "blur(10px)";
        } else if (offset < 50) {
            element.style.height = "150px";
            element.style.backdropFilter = "none";
        }
    }, [offset])

    const changeMenuVisibility = () => {
        const checkbox = document.querySelector('#check-menu');
        const menu = document.querySelector('.navbar-container')
        if (checkbox.checked) {
            menu.classList.add('visible')
        } else {
            menu.classList.remove('visible')
        }
    }

    return (
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <a href="#hero"><label className="logo-label">Youssef Bachaoui</label></a>
                </div>
                <div className="navbar-container">
                    <ol className="navbar">
                        <li className="nav-link nav-element"><a href="#about" >About</a></li>
                        <li className="nav-link nav-element"><a href="#experience" >Experience</a></li>
                        <li className="nav-link nav-element"><a href="#contact" >Contact</a></li>
                        {/* <li className="nav-btn nav-element"><a href={resume} target="_blank" rel="noreferrer"><CustomButton text={"Resume"} /></a></li> */}
                    </ol>
                </div>
                <div className="hamburger-lines">
                    <input className="checkbox" type="checkbox" id="check-menu" onChange={changeMenuVisibility} />

                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            </div>
        </div>
    )
}

export default Header;