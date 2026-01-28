import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../redux/projects/projectSlice";
import Navbar from "../components/Navbar";
import "../styles/#projects.css";
const Projects = () => {
  return (
    <div className="container-fluid px-4">
      <Navbar />

      <div className="row">
        {/* ===== LEFT SIDEBAR ===== */}
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
                      type="radio"
                      name="level"
                      id={level}
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

                <button className="btn btn-outline-secondary w-100 rounded-3">
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
                    Showing <strong>4</strong> projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
