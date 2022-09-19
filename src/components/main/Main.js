import About from "../about/About";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Socials from "../socials/Socials";
import "./Main.css";

function Main() {
    return (
        <>
            <Header />
            <Socials />
            <Hero />
            <About />
            <Experience />
            <Footer />
        </>
    )
}

export default Main;