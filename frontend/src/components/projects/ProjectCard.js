import React from "react";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const difficultyColor = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "danger",
  };

  const isFull = project.membersJoined >= project.membersRequired;

  return (
    <div className="card border-0 shadow-sm rounded-4 h-150 project-card">
      <div className="card-body d-flex flex-column">

        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="fw-bold fs-3">{project.title}</h5>
          <span className="badge rounded-pill bg-primary px-3 py-2">
            {project.goal}
          </span>
        </div>

        <p className="text-muted small mb-2">Collaborative Project</p>

        <p className="text-muted small project-desc fs-5">
          {project.description}
        </p>

        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="text-muted small">👥 Team:</span>

          <span
            className={`fw-semibold ${
              isFull ? "text-danger" : "text-success"
            }`}
          >
            {project.membersJoined}/{project.membersRequired}
          </span>

          <span className="text-muted small">
            {isFull ? "Full" : "Spots Available"}
          </span>
        </div>

        <div className="mb-3">
          {(project.techStack || []).map((t) => (
            <span key={t} className="tech-chip me-1 mb-1 fs-5">
              {t}
            </span>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span
            className={`fs-6 badge bg-${difficultyColor[project.difficulty]}`}
          >
            {project.difficulty}
          </span>

          <button
            className={`btn btn-sm rounded-pill px-3 ${
              isFull ? "btn-secondary" : "btn-primary"
            }`}
            disabled={isFull}
          >
            {isFull ? "Team Full" : "View Project →"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;