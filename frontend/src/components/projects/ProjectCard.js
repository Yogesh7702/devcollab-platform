






import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  console.log("PROJECT DATA:", project);

  const roles = Array.isArray(project.roles) ? project.roles : [];

  // ✅ frontend se hi membersRequired
  const membersRequiredFromFrontend = roles.reduce((acc, r) => {
    if (typeof r === "string") return acc + 1;
    if (r && typeof r === "object" && r.count != null) return acc + r.count;
    return acc;
  }, 0);

  const membersJoined = Array.isArray(project.membersJoined)
    ? project.membersJoined.length
    : 0;

  const availableSlots = membersRequiredFromFrontend - membersJoined;
  const isClosed =
    membersJoined >= membersRequiredFromFrontend && membersRequiredFromFrontend > 0;

  return (
    <div
      className={`card h-100 border-0 transition-all project-hover-card ${
        isClosed ? "opacity-75" : ""
      }`}
      style={{
        backgroundColor: "#16171a",
        borderRadius: "16px",
        border: "1px solid rgba(13, 202, 240, 0.1)",
      }}
    >
      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center p-3 pb-0">
        <span
          className={`badge rounded-pill px-3 py-1 fw-normal small ${
            project.difficulty === "Advanced"
              ? "bg-danger bg-opacity-10 text-danger"
              : project.difficulty === "Intermediate"
              ? "bg-warning bg-opacity-10 text-warning"
              : "bg-success bg-opacity-10 text-success"
          }`}
        >
          ● {project.difficulty || "Beginner"}
        </span>

        <div className="text-light small fw-medium opacity-75">
          ⏱️ {project.duration || "N/A"}
        </div>
      </div>

      <div className="card-body d-flex flex-column p-4">
        {/* TITLE */}
        <h4
          className="fw-bold mb-2 text-white"
          style={{ letterSpacing: "-0.5px" }}
        >
          {project.title}
        </h4>

        {/* GOAL */}
        <div className="mb-3">
          <span
            className="text-info small fw-bold text-uppercase"
            style={{ fontSize: "10px", letterSpacing: "1px" }}
          >
            {project.goal || "General"}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p
          className="text-secondary small mb-4 lh-base"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* STATS */}
        <div className="row g-2 mb-4">
          <div className="col-7">
            <div className="p-2 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-10">
              <small
                className="text-light opacity-75 d-block"
                style={{ fontSize: "10px" }}
              >
                REQUIRED ROLE
              </small>

              <span className="text-white small fw-medium text-truncate d-block">
                {roles.length > 0
                  ? typeof roles[0] === "string"
                    ? roles[0]
                    : roles[0]?.role || "Any"
                  : "Any"}
              </span>
            </div>
          </div>

          <div className="col-5">
            <div
              className={`p-2 rounded-3 border border-opacity-20 text-center ${
                isClosed
                  ? "border-danger bg-danger bg-opacity-10"
                  : "border-info bg-info bg-opacity-10"
              }`}
            >
              <small
                className="text-dark d-block"
                style={{ fontSize: "12px" }}
              >
                SLOTS
              </small>

              <span
                className={`small text-dark fw-bold ${
                  isClosed ? "text-danger" : "text-info"
                }`}
              >
                {membersJoined} / {membersRequiredFromFrontend}
              </span>
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="badge bg-secondary bg-opacity-10 text-light border border-secondary border-opacity-20 fw-normal"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-muted small align-self-center">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* BUTTON */}
        <div className="mt-auto">
          <button
            className={`btn w-100 py-2 fw-bold rounded-3 transition-all ${
              isClosed
                ? "btn-outline-secondary disabled border-opacity-25"
                : "btn-info text-dark shadow-sm"
            }`}
            disabled={isClosed}
            onClick={() => {
              console.log("NAVIGATING TO:", `/projects/${project._id}`);
              navigate(`/projects/${project._id}`);
            }}
          >
            {isClosed ? "Project Full" : "Join Project Team"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;