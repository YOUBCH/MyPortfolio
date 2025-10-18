import { useEffect, useState } from "react";
import "./Header.css";
function Header() {


    useEffect(() => {
        const navElements = Array.from(document.querySelectorAll<HTMLElement>(".nav-element"));
        let transitionDelay = 0;
        navElements.forEach(el => {
            el.style.transition = "none";
            el.style.top = "-50px";
        });

        void document.body.offsetHeight;

        navElements.forEach(el => {
            el.style.transition = `top 0.5s ease ${transitionDelay}ms`;
            requestAnimationFrame(() => {
                el.style.top = "0px";
            });
            transitionDelay += 100;
        });

        const hamburger = document.querySelector(".hamburger-lines") as HTMLElement;
        const logo = document.querySelector(".header-container") as HTMLElement;

        if (hamburger) {
            hamburger.style.transition = "transform 0.5s ease";
            hamburger.style.transform = "translateY(-50px)";
        }
        if (logo) {
            logo.style.transition = "transform 0.5s ease";
            logo.style.transform = "translateY(-50px)";
        }

        void document.body.offsetHeight;

        if (hamburger) requestAnimationFrame(() => { hamburger.style.transform = "translateY(0px)"; });
        if (logo) requestAnimationFrame(() => { logo.style.transform = "translateY(0px)"; });

        document.querySelectorAll(".nav-link").forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                const checkbox = document.querySelector('#check-menu') as HTMLInputElement;
                if (checkbox) checkbox.checked = false;
                changeMenuVisibility();
            });
        });

    }, []);

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
                            <li className="nav-link nav-element"><a href="#experience" >My experience</a></li>
                            <li className="nav-link nav-element"><a href="/Youssef_Bachaoui_CV_English.pdf" target="_blank">My resume</a></li>
                        </ol>
                        <span className="header-subtitle">SAY HELLO</span>
                        <ol className="navbar">
                            <li className="nav-link nav-element"><a href="mailto:bachaouiyoussef02@gmail.com">bachaouiyoussef02@gmail.com</a></li>
                            <li className="nav-link nav-element"><a href="https://www.instagram.com/youssef.bachaoui.dev/#" target="_blank">Instagram</a></li>
                            <li className="nav-link nav-element"><a href="https://www.linkedin.com/in/youssef-bachaoui-926a061a1/" target="_blank">Linkedin</a></li>
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