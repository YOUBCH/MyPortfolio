import About from "../about/About";
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
        </>
    )
}

export default Main;