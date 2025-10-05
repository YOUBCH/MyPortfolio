import Accordion from "../accordion/Accordion";
import { Chips } from "../chips/Chips";
import { WorkCard } from "../work-card/WorkCard";
import "./Experience.css";

function Experience() {
  const companies = [
    "accenture",
    "object-method",
    "sognando-casa",
    "pjon",
    "app-informatica",
    "pwc"
  ];

  const selectCompany = (e: any) => {
    const btn = e.target;
    const company = e.target.name;

    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");
    (document.querySelector(".tab") as HTMLElement).style.top = `calc(${companies.indexOf(
      company
    )} * 60.70px)`;
    companies.indexOf(company);

    const expDescription = document.querySelector(
      `.experience-description.${company}`
    );
    document.querySelector(".visible")?.classList.remove("visible");
    expDescription?.classList.add("visible");
  };

  return (
    <section id="experience">
      <div style={{
        width: "fit-content",
        margin: "0 auto",
      }}>
        <h1 className="section-titles">Experience</h1>
        <WorkCard
          link="https://www.bhdigital.it/"
          description="I’m responsible for the development of websites, taking care of both the technical implementation and the relationship with clients. My role involves transforming client needs into effective, responsive, and visually engaging digital experiences, while maintaining open and proactive communication throughout the entire project lifecycle.
This includes gathering requirements, proposing solutions, managing feedback, and ensuring that the final product aligns with both business goals and user expectations."
          startDate="2025"
          endDate="Present"
          title="CEO & Co-Founder"
          company="BH Digital"
          chips={[{ label: "React" }, { label: "TypeScript" }, { label: "Next.js" }, { label: "TailwindCSS" }]}
        />
        <WorkCard
          link="https://www.accenture.com/it-it"
          description="During this experience, I was responsible for front-end development using React and TypeScript, within a micro-frontend architecture. I led the creation and ongoing maintenance of a shared UI library, fully documented with Storybook, ensuring consistency across multiple teams and projects.
            My role involved integrating APIs, managing application state effectively, and optimizing performance to enhance the overall user experience. I worked closely with back-end teams, UX designers, and clients in an Agile environment, contributing actively to sprint planning and cross-functional alignment.
            Additionally, I supported junior developers, providing guidance and mentorship to help them grow and integrate smoothly within the team."
          startDate="2022"
          endDate="2025"
          title="Front-End Developer"
          company="Accenture"
          chips={[{ label: "TypeScript" }, { label: "React" }, { label: "Svelte" }, { label: "Lit" }, { label: "Redux" }]}
        />
        <WorkCard
          link="http://www.objectmethod.it/"
          description="I worked on the development of web applications using JavaScript, Java, and MySQL, leveraging frameworks and libraries such as React and Redux.
          My responsibilities included building RESTful APIs, designing and managing relational databases, and taking part in the design and implementation of UI/UX, with a focus on creating user-friendly and visually consistent interfaces."
          startDate="2022"
          endDate="2022"
          title="Front-End Developer"
          company="Object Method"
          chips={[{ label: "React" }, { label: "Javascript" }, { label: "Java" }]}
        />

        <WorkCard
          link="https://sognando.casa/it"
          description="I was involved in the development of web applications, with a particular focus on building a website and email builder tool. The project required attention to flexibility, user interaction, and customizability to allow users to create content with ease.
          I also handled the integration of RESTful APIs, ensuring smooth communication between front-end components and back-end services."
          startDate="2021"
          endDate="2021"
          title="Front-End Developer"
          company="Sognando Casa"
          chips={[{ label: "JQuery" }, { label: "JavaScript" }, { label: "PHP" }]}
        />

      </div>
    </section>
  );
}

export default Experience;
