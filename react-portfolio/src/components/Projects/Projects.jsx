import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  console.log("projects:", projects);
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
      {Array.isArray(projects) ? (
          projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))
        ) : (
          <p>No projects data available</p>
        )}
     
      </div>
    </section>
  );
};