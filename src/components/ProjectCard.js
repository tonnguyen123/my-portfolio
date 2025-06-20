import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> |{' '}
        <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
      </p>
    </div>
  );
}

export default ProjectCard;
