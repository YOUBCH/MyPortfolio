import { useEffect } from "react";
import CustomButton from "../custom/customButton/CustomButton";
import "./Hero.css";

function Hero() {

    useEffect(() => {
        const heroElements = document.querySelectorAll(".hero-element");
        let transitionDelay = 900;
        for (let i = 0; i < heroElements.length; i++) {
            heroElements[i].style.transitionDelay = `${transitionDelay}ms`;
            heroElements[i].style.transform = "translateY(0px)"
            heroElements[i].style.opacity = "1"
            transitionDelay += 100;
        }
    }, [])

    return (
        <section className="hero" id="hero">
            <p className="hero-little-title hero-element">Hi, my name is</p>
            <h1 className="hero-my-name hero-element"><label className="green">You</label>ssef <label className="green">Ba</label>chaoui</h1>
            <p className="hero-element hero-paragraph">I'm a 20 years old web developer based in Milan, Italy, and i develop web apps with the best UX, UI and using the best languages for the project</p>
            <div className="hero-element">
                <CustomButton text={"Contact Me"} />
            </div>
        </section>
    )
}

export default Hero;