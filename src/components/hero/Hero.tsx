import { useEffect, useState } from "react";
import CustomButton from "../custom/customButton/CustomButton";
import "./Hero.css";

function Hero() {
    const [reloadKey] = useState(Date.now());

    console.log("Hero component rendered with key:", reloadKey);
    useEffect(() => {
        const heroElements = Array.from(document.querySelectorAll<HTMLElement>(".hero-element"));
        if (!heroElements.length) return;

        heroElements.forEach(el => {
            el.style.transition = "none";
            el.style.transform = "translateY(80px)";
            el.style.opacity = "0";
        });

        void document.body.offsetHeight;

        let transitionDelay = 900;
        heroElements.forEach(el => {
            el.style.transition = `transform 0.6s ease ${transitionDelay}ms, opacity 0.6s ease ${transitionDelay}ms`;
            requestAnimationFrame(() => {
                el.style.transform = "translateY(0px)";
                el.style.opacity = "1";
            });
            transitionDelay += 100;
        });
    }, []);


    return (
        <section className="hero" id="hero" key={reloadKey}>
            <div style={{
                width: "fit-content",
                margin: "0 auto",
            }}>
                <p className="hero-little-title hero-element">Hi, my name is</p>
                <h1 className="hero-my-name hero-element"><label className="green">Y</label>oussef <label className="green">B</label>achaoui</h1>
                <p className="hero-element hero-paragraph" style={{
                    maxWidth: "43rem"
                }}>I'm a young Front-End Developer based in Milan, Italy.
                    With 3 years of experience, I specialize in building dynamic and responsive web interfaces using technologies like React, Next.js, Tailwind CSS, and Svelte. I've worked with small startups, mid-sized businesses, and large corporations — adapting to different team structures, workflows, and project needs. I focus on clean, maintainable code and modern development practices to deliver scalable and performant applications.</p>
                <div className="hero-element">
                    <a href='#contact' >
                        <CustomButton text={"Contact Me"} />
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Hero;