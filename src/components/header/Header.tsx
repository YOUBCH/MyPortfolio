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
            const navElement = navElements[i] as HTMLElement;
            navElement.style.transitionDelay = `${transitionDelay}ms`;
            navElement.style.top = "0px"
            transitionDelay += 100;
        }

        const hamburger = document.querySelector(".hamburger-lines") as HTMLElement;
        hamburger.style.transform = "translateY(0px)";

        const logo = document.querySelector(".header-container") as HTMLElement;
        logo.style.transform = "translateY(0px)";

        document.querySelectorAll(".nav-link").forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                const checkbox = document.querySelector('#check-menu') as HTMLInputElement;
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

    // useEffect(() => {
    //     const element = document.querySelector('.header-container') as HTMLElement | null;
    //     if (element) {
    //         if (offset > 50) {
    //             element.style.height = "70px";
    //             element.style.backdropFilter = "blur(10px)";
    //             element.style.background = '#ffffff2e';
    //         } else if (offset < 50) {
    //             element.style.height = "90px";
    //             element.style.backdropFilter = "none";
    //             element.style.background = 'transparent';
    //         }
    //     }
    // }, [offset])

    const changeMenuVisibility = () => {
        const checkbox = document.querySelector('#check-menu') as HTMLInputElement;
        const menu = document.querySelector('.navbar-container')
        if (checkbox.checked) {
            menu?.classList.add('visible')
        } else {
            menu?.classList.remove('visible')
        }
    }

    return (
        <div className="header-container">
            <div className="logo-container">
                <a href="#hero"><label className="logo-label">YB</label></a>
            </div>
            <div className="header">
                <div className="hamburger-lines">
                    <div className="navbar-container">
                        <ol className="navbar">
                            <li className="nav-link nav-element"><a href="#experience" >Experience</a></li>
                            <li className="nav-link nav-element"><a href="#contact" >Contact</a></li>
                        </ol>
                    </div>
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