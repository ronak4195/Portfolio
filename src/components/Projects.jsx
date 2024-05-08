import React from "react";
import "./css/Projects.css";
// import github from "./icon/icons8-github-50.png";

export const Projects = (props) => {
  return (
    <div className="project-card" >
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="projectAnchor">
        <h2 className="project-title">{props.title}</h2>
        <h5 className="projectDate">{props.date}</h5>
        <div style={{ display: "grid" }}>
          <div style={{ display: "flex" }}>
            {/* <div className="projectDetailLeft">
              <h5 className="projectDate">{props.date}</h5>
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectGithubAnchor"
              >
                <img src={github} alt="github"></img>
              </a>
            </div> */}
            <p className="project-description">{props.desc}</p>
          </div>
          <div className="projectTech">
            {props.tech.map((tech, index) => (
              <div key={index} className="projectTechTab">{tech}</div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};
