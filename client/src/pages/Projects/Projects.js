import React from "react";
import ProjectCard from "../../components/Project-card/Project-card";
// import { FiChevronDown } from "react-icons/fi";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="container mx-auto flex flex-wrap items-start justify-center my-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;
