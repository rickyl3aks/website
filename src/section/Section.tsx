import { forwardRef } from "react";
import style from "./section.module.css";
import ProjectCarousel from "../projectCarousel/projectCarousel";

//https://api.github.com/users/rickyl3aks/repos

const Section = forwardRef((props, ref) => {

  return (
    <div ref={ref as null}>
      <div style={{ height: "4rem" }} />
      <div className={style.scrollerContainer}>
        <p id="projects" className={style.projectTitle}>
          PROJECTS
        </p>
        <div className={style.space} />
        <ProjectCarousel />
      </div>
    </div>
  );
});

export default Section;
