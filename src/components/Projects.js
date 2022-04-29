import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const Projects = ({ projetNumber }) => {
    
  const [curentProjet] = useState(projectsData[projetNumber]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

    useEffect(() => {

    }, [])

  console.log(curentProjet);

  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{curentProjet.title}</h1>
        <p>{curentProjet.date}</p>
        <ul className="languages">
          {curentProjet.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{curentProjet.title}</h3>
            <p>{curentProjet.infos}</p>
          </span>
          <img
            src={curentProjet.img}
            alt={curentProjet.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={curentProjet.link}
            target="_blank"
            rel="noopner noreferrer"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
      <span className="random-circle" style={{ left, top, transform: size }}></span>
    </div>
  );
};

export default Projects;
