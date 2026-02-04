import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/projects/ProjectCard";
import "../styles/projects.css";
import { getProjects } from "../redux/projects/projectAction";

const Projects = () => {
  const dispatch = useDispatch();

  const { projects = [], isLoading } = useSelector(
    (state) => state.projects
  );

  const [selectedTech, setSelectedTech] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 FETCH PROJECTS
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  console.log("projects =", projects);

 const filteredProjects = projects
  .filter((project) => project)
  .filter((project) => {
    const matchTech =
      selectedTech.length === 0 ||
      selectedTech.some((tech) =>
        project?.techStack?.includes(tech)
      );

    const matchDifficulty =
      !difficulty || project.level === difficulty;

    const matchType =
      projectTypes.length === 0 ||
      projectTypes.includes(project.type);

    const matchSearch =
      project?.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

    return (
      matchTech &&
      matchDifficulty &&
      matchType &&
      matchSearch
    );
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
              
              <div className="mb-4">
                <p className="fw-semibold mb-4 fs-3 text-center text-primary">
                  Tech Stack
                </p>

                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Java",
                  "Python",
                ].map((tech) => (
                  <div className="form-check mb-1" key={tech}>
                    <input
                      className="form-check-input fs-5"
                      type="checkbox"
                      checked={selectedTech.includes(tech)}
                      onChange={(e) => {
                        setSelectedTech((prev) =>
                          e.target.checked
                            ? [...prev, tech]
                            : prev.filter((t) => t !== tech)
                        );
                      }}
                    />
                    <label className="form-check-label fs-5 text-light">
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
                      checked={difficulty === level}
                      onChange={() =>
                        setDifficulty(
                          difficulty === level ? "" : level
                        )
                      }
                    />
                    <label className="form-check-label fs-5 text-light">
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
                  "Learning",
                  "Startup",
                  "Open Source",
                  "Portfolio",
                ].map((type) => (
                  <div className="form-check mb-1" key={type}>
                    <input
                      className="form-check-input fs-5"
                      type="checkbox"
                      checked={projectTypes.includes(type)}
                      onChange={(e) => {
                        setProjectTypes((prev) =>
                          e.target.checked
                            ? [...prev, type]
                            : prev.filter((t) => t !== type)
                        );
                      }}
                    />
                    <label className="form-check-label fs-5 text-light">
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
                    placeholder="Search projects by title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="col-md-4 text-end">
                  <span className="text-muted">
                    Showing{" "}
                    <strong>{filteredProjects.length}</strong>{" "}
                    projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            <p className="text-center">Loading projects...</p>
          ) : filteredProjects.length === 0 ? (
            <p className="text-center text-muted">
              No projects found
            </p>
          ) : (
            <div className="row">
              {filteredProjects.map((project) => (
                <div
                  className="col-md-6 col-lg-4 mb-4"
                  key={project?._id}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
