import React, { useEffect } from "react";
import "../css/Skills.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillsData = [
    {
      title: "Programming Languages",
      items: ["C", "C++", "Java", "Python", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Frontend Development",
      items: ["React.js", "Responsive UI", "JavaScript (ES6+)", "Bootstrap"],
    },
    {
      title: "Backend Development",
      items: ["Django", "Flask", "Django REST Framework", "REST APIs"],
    },
    {
      title: "AI, ML & LLM",
      items: [
        "TensorFlow",
        "scikit-learn",
        "LangChain",
        "LangGraph",
        "Streamlit",
      ],
    },
    {
      title: "Databases",
      items: ["SQL", "SQLite","PostgreSQL", "ChromaDB", "Pinecone", "Faiss"],
    },
    {
      title: "SAP & Enterprise",
      items: [
        "SAP ABAP",
        "Order-to-Cash",
        "Sales Orders",
        "Billing",
        "CDS Views",
        "Adobe Forms",
      ],
    },
  ];
const animations = ['flip-left', 'flip-up', 'flip-right', 'flip-down'];
  return (
    <div
      className="skills container mb-4"
    >
      <p
        className="skills__title"
        style={{ fontFamily: "Abril Fatface, serif", margin: "0" }}
      >
        Skills
      </p>

      <div className="row g-4 mt-2">
        {skillsData.map((card, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card skill-card h-100" data-aos={animations[index % animations.length]}>
              <div className="card-body">
                <h3 className="skill-card-title">{card.title}</h3>

                <div className="skill-chip-wrapper">
                  {card.items.map((item, i) => (
                    <span key={i} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
