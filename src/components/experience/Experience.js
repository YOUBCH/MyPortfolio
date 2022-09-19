import { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {

    const companies = ['Object Method', 'Sognando Casa', 'PJON', 'APP informàtica', 'PWC'];

    const selectCompany = (e) => {
        const btn = e.target;
        const company = e.target.textContent;

        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
        document.querySelector('.tab').style.top = `calc(${companies.indexOf(company)} * 60.66px)`;
        companies.indexOf(company)
    }

    return (
        <section id='experience'>
            <h1 className="section-titles">My Experiences</h1>
            <div className="experience-table">
                <div className="companies">
                    <div className="tab">
                    </div>
                    <button className="company-btn active" onClick={(e) => selectCompany(e)}>Object Method</button>
                    <button className="company-btn" onClick={(e) => selectCompany(e)}>Sognando Casa</button>
                    <button className="company-btn" onClick={(e) => selectCompany(e)}>PJON</button>
                    <button className="company-btn" onClick={(e) => selectCompany(e)}>APP informàtica</button>
                    <button className="company-btn" onClick={(e) => selectCompany(e)}>PWC</button>
                </div>
                <div className="experience-description-container">
                    <div className="experience-description object-method">    
                        <h3><span>Full-Stack Developer</span><span className="company-link"> @<a href='http://www.objectmethod.it/' target="_blank">Object Method</a></span></h3>
                        <p className="duration">June 2022 - present</p>
                        <ul className="tasks-list">
                            <li className="task">Build web apps writing clean code, easy to undestand and mantain.</li>
                            <li className="task">Working with languages such as Java, Javascript and MySQL.</li>
                            <li className="task">Working using frameworks and libraries such as Spring, React and Redux.</li>
                            <li className="task">Creation and consuming of RESTful API.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;