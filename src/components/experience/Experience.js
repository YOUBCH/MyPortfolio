import { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {

    const companies = ['object-method', 'sognando-casa', 'pjon', 'app-informatica', 'pwc'];

    const selectCompany = (e) => {
        const btn = e.target;
        const company = e.target.name;

        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
        document.querySelector('.tab').style.top = `calc(${companies.indexOf(company)} * 60.70px)`;
        companies.indexOf(company)

        const expDescription = document.querySelector(`.experience-description.${company}`);
        document.querySelector('.visible').classList.remove('visible');
        expDescription.classList.add('visible')
    }

    return (
        <section id='experience'>
            <h1 className="section-titles">My Experiences</h1>
            <div className="experience-table">
                <div className="companies">
                    <div className="tab">
                    </div>
                    <button className="company-btn active" name="object-method" onClick={(e) => selectCompany(e)}>Object Method</button>
                    <button className="company-btn" name="sognando-casa" onClick={(e) => selectCompany(e)}>Sognando Casa</button>
                    <button className="company-btn" name="pjon" onClick={(e) => selectCompany(e)}>PJON</button>
                    <button className="company-btn" name="app-informatica" onClick={(e) => selectCompany(e)}>APP informàtica</button>
                    <button className="company-btn" name="pwc" onClick={(e) => selectCompany(e)}>PWC</button>
                </div>
                <div className="experience-description-container">
                    <div className="experience-description object-method visible">    
                        <h3><span>Full-Stack Developer</span><span className="company-link"> @<a href='http://www.objectmethod.it/' target="_blank">Object Method</a></span></h3>
                        <p className="duration">June 2022 - present</p>
                        <ul className="tasks-list">
                            <li className="task">Build web apps writing clean code, easy to undestand and mantain.</li>
                            <li className="task">Working with languages such as Java, Javascript and MySQL.</li>
                            <li className="task">Working using frameworks and libraries such as Spring, React and Redux.</li>
                            <li className="task">Creation and consuming of RESTful API.</li>
                        </ul>
                    </div>
                    <div className="experience-description sognando-casa">    
                        <h3><span>Front-End Developer</span><span className="company-link"> @<a href='https://sognandocasashop.it/' target="_blank">Sognando Casa</a></span></h3>
                        <p className="duration">May 2021 - October 2021</p>
                        <ul className="tasks-list">
                            <li className="task">Build web apps writing clean code, easy to undestand and mantain.</li>
                            <li className="task">Working with languages such as Java, Javascript and MySQL.</li>
                            <li className="task">Working using frameworks and libraries such as Spring, React and Redux.</li>
                            <li className="task">Creation and consuming of RESTful API.</li>
                        </ul>
                    </div>
                    <div className="experience-description pjon">    
                        <h3><span>High School Internship - Full-Stack Developer</span><span className="company-link"> @<a href='https://www.pjon.org/' target="_blank">PJON</a></span></h3>
                        <p className="duration">June 2022 - present</p>
                        <ul className="tasks-list">
                            <li className="task">Build web apps writing clean code, easy to undestand and mantain.</li>
                            <li className="task">Working with languages such as Java, Javascript and MySQL.</li>
                            <li className="task">Working using frameworks and libraries such as Spring, React and Redux.</li>
                            <li className="task">Creation and consuming of RESTful API.</li>
                        </ul>
                    </div>
                    <div className="experience-description app-informatica">    
                        <h3><span>High School Internship - Full-Stack Developer</span><span className="company-link"> @<a href='https://www.pjon.org/' target="_blank">PJON</a></span></h3>
                        <p className="duration">June 2022 - present</p>
                        <ul className="tasks-list">
                            <li className="task">Build web apps writing clean code, easy to undestand and mantain.</li>
                            <li className="task">Working with languages such as Java, Javascript and MySQL.</li>
                            <li className="task">Working using frameworks and libraries such as Spring, React and Redux.</li>
                            <li className="task">Creation and consuming of RESTful API.</li>
                        </ul>
                    </div>
                    <div className="experience-description pwc">    
                        <h3><span>High School Internship - Full-Stack Developer</span><span className="company-link"> @<a href='https://www.pjon.org/' target="_blank">PJON</a></span></h3>
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