import React from "react";
import ProjectCard from "../../components/Project-card/Project-card";

function Projects() {
  const style = {
    marginTop: "100px",
  };

  return (
    <>
      <h1>Projects</h1>
      <div className="container mx-auto">
        <div className="grid min-h-screen p-5" style={style}>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
        </div>
      </div>
    </>
  );
}

export default Projects;
