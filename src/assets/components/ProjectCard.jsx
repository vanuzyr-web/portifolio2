import React from 'react';

function ProjectCard({ image, title, description, projectLink, codeLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn-small">
              Ver projeto
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-small">
              Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;