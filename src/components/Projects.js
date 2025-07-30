import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    image: 'https://via.placeholder.com/300x180.png?text=Project+One',
    description: 'Short description of project one.',
    github: '#',  // put your GitHub URL here
    live: '#',    // put your live URL here
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'https://via.placeholder.com/300x180.png?text=Project+Two',
    description: 'Short description of project two.',
    github: '#',
    live: '#',
  },
  // Add more projects here
];

function Projects() {
  const [activeProject, setActiveProject] = useState(projectsData[0].id);

  return (
    <div className="projects-container">
      <div className="tabs">
        {projectsData.map((project) => (
          <button
            key={project.id}
            className={`tab-btn ${activeProject === project.id ? 'active' : ''}`}
            onClick={() => setActiveProject(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="project-display">
        {projectsData.map((project) => (
          activeProject === project.id && <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
