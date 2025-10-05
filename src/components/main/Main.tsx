import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Socials from "../socials/Socials";
import "./Main.css";

function Main() {
    return (
        <div id="main">
            <Header />
            <Socials />
            <Hero />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main;