import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../redux/projects/projectSlice";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/projects/ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const [search, setSearch] = useState("");

  const demoProjects = [
    {
      id: 1,
      title: "DevCollab Platform",
      description:
        "A platform to collaborate with developers, join real-world projects and grow together as a team.",
      tech: ["React", "Node", "MongoDB"],
      difficulty: "Intermediate",
      type: "Startup",
      membersJoined: 4,
      membersRequired: 5,
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      description:
        "Analyze resumes using AI to give feedback, scoring and improvement suggestions.",
      tech: ["React", "AI"],
      difficulty: "Advanced",
      type: "Hackathon",
    membersJoined: 3,
    membersRequired: 3,
    },
    {
      id: 3,
      title: "College Attendance App",
      description:
        "A simple app for colleges to track attendance digitally and reduce paperwork.",
      tech: ["Java", "MongoDB"],
      difficulty: "Beginner",
      type: "College",
      membersJoined: 2,
      membersRequired: 4,
    },
  ];

  const filteredProjects = demoProjects.filter((project) => {
    const matchTech =
      selectedTech.length === 0 ||
      selectedTech.some((tech) => project.tech.includes(tech));

    const matchDifficulty = !difficulty || project.difficulty === difficulty;

    const matchType =
      projectTypes.length === 0 || projectTypes.includes(project.type);

    const matchSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchTech && matchDifficulty && matchType && matchSearch;
  });

  return (
    <div className="container-fluid px-4">
      <Navbar />

      <div className="row">
        <div className="col-md-3 col-lg-2 pt-4">
          <div
            className="card border-0 shadow rounded-4 bg-dark text-white"
            style={{ minHeight: "100vh" }}
          >
            <div className="card-body">
              {/* <h4 className="fw-bold mb-3">Filters</h4> */}

              <div className="mb-4">
                <p className="fw-semibold mb-4 fs-3 text-center text-primary">
                  Tech Stack
                </p>

                {[
                  "React",
                  "Node",
                  "MongoDB",
                  "Express",
                  "Javascript",
                  "html, css",
                  "Java",
                  "AI",
                ].map((tech) => (
                  <div className="form-check mb-1" key={tech}>
                    <input
                      className="form-check-input fs-5 text-light"
                      type="checkbox"
                      name="tech"
                      checked={selectedTech.includes(tech)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTech([...selectedTech, tech]);
                        } else {
                          setSelectedTech(
                            selectedTech.filter((t) => t !== tech),
                          );
                        }
                      }}
                    />

                    <label
                      className="form-check-label fs-5 text-light"
                      htmlFor={tech}
                    >
                      {tech}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <p className="fw-semibold mb-3 fs-3 text-center text-primary">
                  Difficulty
                </p>

                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <div className="form-check mb-1" key={level}>
                    <input
                      className="form-check-input fs-5"
                      type="checkbox"
                      name="level"
                      id={level}
                      checked={difficulty === level}
                      onChange={() => setDifficulty(level)}
                    />
                    <label
                      className="form-check-label fs-5 text-light"
                      htmlFor={level}
                    >
                      {level}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <p className="fw-semibold mb-3 text-center text-primary fs-3">
                  Project Type
                </p>

                {[
                  "Hackathon",
                  "College",
                  "Learning",
                  "Startup",
                  "Open Source",
                ].map((type) => (
                  <div className="form-check mb-1" key={type}>
                    <input
                      className="form-check-input fs-5"
                      type="checkbox"
                      id={type}
                      checked={projectTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setProjectTypes([...projectTypes, type]);
                        } else {
                          setProjectTypes(
                            projectTypes.filter((t) => t !== type),
                          );
                        }
                      }}
                    />

                    <label
                      className="form-check-label text-light fs-5"
                      htmlFor={type}
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-outline-secondary w-100 rounded-3"
                onClick={() => {
                  setSelectedTech([]);
                  setDifficulty("");
                  setProjectTypes([]);
                  setSearch("");
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-9 col-lg-10 mt-2">
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Search projects by title or technology"
                  />
                </div>
                <div className="col-md-4 text-end">
                  <span className="text-muted">
                    Showing <strong>{filteredProjects.length}</strong> projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {demoProjects.map((project) => (
              <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
