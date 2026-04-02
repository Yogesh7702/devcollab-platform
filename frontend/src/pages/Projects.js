import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../components/projects/ProjectCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import { getProjects } from "../redux/projects/projectAction";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects = [], isLoading } = useSelector((state) => state.projects);
  

  const [selectedTech, setSelectedTech] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [projectTypes, setProjectTypes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProjects());

  }, [dispatch]);

  const fullState = useSelector((state) => state);
console.log("FULL STATE 👉", fullState);

  const filteredProjects = projects.filter((project) => {

  const matchTech =
    selectedTech.length === 0 ||
    selectedTech.some((tech) =>
      project?.techStack?.some(
        (pTech) => pTech.toLowerCase() === tech.toLowerCase()
      )
    );

  const matchDifficulty =
    !difficulty ||
    project?.difficulty?.toLowerCase() === difficulty.toLowerCase();

  const matchType =
    projectTypes.length === 0 ||
    projectTypes.some(
      (type) => project?.type?.toLowerCase() === type.toLowerCase()
    );

  const matchSearch =
    !search ||
    project?.title?.toLowerCase().includes(search.toLowerCase());

 

  return matchTech && matchDifficulty && matchType && matchSearch;
});

  console.log(projects.title);
  

  const clearAllFilters = () => {
    setSelectedTech([]);
    setDifficulty("");
    setProjectTypes([]);
    setSearch("");
  };

  return (


    <div className="text-white min-vh-100" style={{ backgroundColor: "#101113" }}>
      <Navbar />

      
      <div className="container-fluid px-lg-5 py-4">

        <div className="row g-4">
          {/* ===== SIDEBAR FILTERS (STRUCTURED) ===== */}
          <div className="col-lg-2">
            <div className="sticky-top" style={{ top: "100px", zIndex: 10 }}>
              <div className="card border-0 bg-dark bg-opacity-50 rounded-4 p-4 border border-info border-opacity-10 shadow-lg">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0 text-info">Filters</h5>
                  <button onClick={clearAllFilters} className="btn btn-link btn-sm text-decoration-none text-light opacity-50 p-0">Clear All</button>
                </div>

                {/* TECH STACK */}
                <div className="mb-4">
                  <label className="text-info small fw-bold text-uppercase mb-3 d-block">Tech Stack</label>
                  <div className="d-flex flex-column gap-2">
                    {["React", "Node.js", "MongoDB", "Express", "Next.js"].map((tech) => (
                      <div className="form-check custom-check" key={tech}>
                        <input
                          className="form-check-input border-info bg-transparent"
                          type="checkbox"
                          id={tech}
                          checked={selectedTech.includes(tech)}
                          onChange={(e) => setSelectedTech(prev => e.target.checked ? [...prev, tech] : prev.filter(t => t !== tech))}
                        />
                        <label className="form-check-label text-light small ms-2" htmlFor={tech}>{tech}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIFFICULTY */}
                <div className="mb-4">
                  <label className="text-info small fw-bold text-uppercase mb-3 d-block">Difficulty Level</label>
                  <select
                    className="form-select bg-dark bg-opacity-50 border-info border-opacity-25 text-white shadow-none rounded-3"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    <option value="">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                {/* PROJECT TYPE */}
                <div>
                  <label className="text-info small fw-bold text-uppercase mb-3 d-block">Project Type</label>
                  {["Hackathon", "Learning", "Startup", "Open Source"].map((type) => (
                    <div className="form-check mb-2" key={type}>
                      <input
                        className="form-check-input border-info bg-transparent"
                        type="checkbox"
                        id={type}
                        checked={projectTypes.includes(type)}
                        onChange={(e) => setProjectTypes(prev => e.target.checked ? [...prev, type] : prev.filter(t => t !== type))}
                      />
                      <label className="form-check-label text-light small ms-2" htmlFor={type}>{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS CARD (Home Page Style) */}
              <div className="card mt-4 border-0 bg-info bg-opacity-10 rounded-4 p-3 border border-info border-opacity-20 text-center">
                <div className="h2 fw-bold text-info mb-0">{filteredProjects.length}</div>
                <div className="small text-light opacity-75 text-uppercase">Projects Matching</div>
              </div>
            </div>
          </div>

          {/* ===== MAIN CONTENT ===== */}

          <div className="col-lg-9">
            
            <div className="mb-4">
              <div className="input-group input-group-lg shadow-sm">
                <span className="input-group-text bg-dark bg-opacity-50 border-info border-opacity-25 text-info px-4">🔍</span>
                <input
                  type="text"
                  className="form-control bg-dark bg-opacity-50 border-info border-opacity-25 text-white shadow-none p-3"
                  placeholder="What do you want to build today? (e.g. Chat App, E-commerce...)"
                  style={{ borderLeft: "none" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* RESULTS GRID */}
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-info shadow-sm" style={{ width: '3rem', height: '3rem' }}></div>
                <p className="mt-3 text-light opacity-50 fw-semibold">Loading opportunities...</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-5 rounded-4 bg-dark bg-opacity-25 border border-dashed border-info border-opacity-25">
                <h3 className="fw-bold mt-3">No results found</h3>
                <p className="text-light opacity-50 mb-4">Try relaxing your filters or searching for something else.</p>
                <button className="btn btn-outline-info rounded-pill px-4" onClick={clearAllFilters}>Reset Filters</button>
              </div>
            ) : (
              <div className="row g-4">
                {filteredProjects.map((project) => (
                  <div className="col-md-6 col-xl-4" key={project?._id}>
                    <div className="h-100 transition-all hover-translate-y">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;