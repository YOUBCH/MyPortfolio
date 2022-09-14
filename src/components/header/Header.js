import CustomButton from "../../custom/customButton/CustomButton";
import "./Header.css";

function Header(){
    return(
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <a href="/"><label className="logo-label">YouBa</label></a>
                </div>
                <div className="navbar-container">
                    <ol className="navbar">
                        <li className="nav-link">About</li>
                        <li className="nav-link">Experience</li>
                        <li className="nav-link">Contact</li>
                        <li className="nav-btn"><CustomButton text={"Resume"} /></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Header;