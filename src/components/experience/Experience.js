import { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {
    const [company, setCompany] = useState("Object Method")

    useEffect(() => {
        
    }, [company]) 

    return (
        <section id='experience'>
            <h1 className="section-titles">My Experiences</h1>
            <div className="experience-table">
                <div className="companies">
                    <div className="tab">
                    </div>
                    <button className="company-btn active">Object Method</button>
                    <button className="company-btn">Sognando Casa</button>
                    <button className="company-btn">PJON</button>
                    <button className="company-btn">APP informàtica</button>
                    <button className="company-btn">PWC</button>
                </div>
                <div className="experience-description">

                </div>
            </div>
        </section>
    )
}

export default Experience;