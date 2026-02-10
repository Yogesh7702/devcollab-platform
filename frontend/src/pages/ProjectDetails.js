import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../redux/projects/projectAction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { project: projectWrapper, singleProject, isLoading, error } = useSelector(
    (state) => state.projects
  );
  const project = projectWrapper?.project || singleProject || projectWrapper;

  useEffect(() => {
    if (id) dispatch(getProjectById(id));
  }, [dispatch, id]);

  if (isLoading) return (
    <div className="text-white min-vh-100" style={{ backgroundColor: "#101113" }}>
      <Navbar />
      <div className="container py-5 text-center">
        <div className="spinner-border text-info" style={{width: '3rem', height: '3rem'}}></div>
        <p className="mt-3 text-light fw-semibold">Loading project...</p>
      </div>
      <Footer />
    </div>
  );

  if (error || !project) return (
    <div className="text-white min-vh-100" style={{ backgroundColor: "#101113" }}>
      <Navbar />
      <div className="container py-5 text-center">
        <div className="mb-4" style={{fontSize: "80px"}}>❌</div>
        <h2 className="fw-bold mb-3">Project Not Found</h2>
        <p className="text-light mb-4">This project doesn't exist or has been removed</p>
        <Link to="/projects" className="btn btn-info text-dark btn-lg px-5 py-3 fw-bold shadow" style={{borderRadius: "12px"}}>
          ← Back to Projects
        </Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="text-white min-vh-100" style={{ backgroundColor: "#101113" }}>
      <Navbar />
      
      {/* HERO HEADER */}
      <section 
        className="py-4"
        style={{
          background: "linear-gradient(180deg, #101113 0%, #1a1d21 100%)",
          borderBottom: "1px solid rgba(23, 162, 184, 0.1)"
        }}
      >
        <div className="container">
          <Link 
            to="/projects" 
            className="btn btn-outline-info btn-sm fs-6 px-4 py-2 mb-4 d-inline-flex align-items-center fw-semifold"
            style={{borderRadius: "10px", borderWidth: "2px"}}
          >
            ← Back to Projects
          </Link>
          
          <div className="row align-items-start g-4">
            <div className="col-lg-8">
              
              <div className="mb-3">
                <span 
                  className="badge px-4 py-2 me-2"
                  style={{
                    backgroundColor: project.status === "open" ? "#28a745" : "#6c757d",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  {project.status === "open" ? "🟢 Open" : "⚪ Closed"}
                </span>
                {project.difficulty && (
                  <span 
                    className="badge px-4 py-2"
                    style={{
                      backgroundColor: "rgba(23, 162, 184, 0.15)",
                      color: "#17a2b8",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      border: "1px solid rgba(23, 162, 184, 0.3)"
                    }}
                  >
                    📊 {project.difficulty}
                  </span>
                )}
              </div>


              <h1 className="display-5 fw-bold mb-3">{project.title}</h1>

             
              <div className="row g-3">
                <div className="col-auto">
                  <div 
                    className="px-4 py-2 rounded-3"
                    style={{ 
                      backgroundColor: "rgba(23, 162, 184, 0.1)", 
                      border: "1px solid rgba(23, 162, 184, 0.2)" 
                    }}
                  >
                    <small className="text-light d-block mb-1" style={{ fontSize: "11px" }}>Duration</small>
                    <span className="fw-bold text-info">{project.duration || "Flexible"}</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div 
                    className="px-4 py-2 rounded-3"
                    style={{ 
                      backgroundColor: "rgba(23, 162, 184, 0.1)", 
                      border: "1px solid rgba(23, 162, 184, 0.2)" 
                    }}
                  >
                    <small className="text-light d-block mb-1" style={{ fontSize: "11px" }}>Team Size</small>
                    <span className="fw-bold text-info">{project.membersRequired || 0}</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div 
                    className="px-4 py-2 rounded-3"
                    style={{ 
                      backgroundColor: "rgba(23, 162, 184, 0.1)", 
                      border: "1px solid rgba(23, 162, 184, 0.2)" 
                    }}
                  >
                    <small className="text-light d-block mb-1" style={{ fontSize: "11px" }}>Joined</small>
                    <span className="fw-bold text-info">{project.membersJoined || 0}</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4">
              <div 
                className="card border-0 p-4 shadow-lg"
                style={{
                  backgroundColor: "rgba(26, 29, 33, 0.8)",
                  borderRadius: "16px",
                  border: "1px solid rgba(23, 162, 184, 0.2)"
                }}
              >
                <div className="text-center mb-3">
                  <div className="h2 fw-bold text-info mb-1">
                    {(project.membersRequired || 0) - (project.membersJoined || 0)}/{project.membersRequired || 0}
                  </div>
                  <small className="text-light">Spots Available</small>
                </div>

                <div className="progress mb-3" style={{height: '10px', borderRadius: "10px", backgroundColor: "rgba(23, 162, 184, 0.1)"}}>
                  <div 
                    className="progress-bar bg-info" 
                    style={{
                      width: `${((project.membersJoined || 0) / (project.membersRequired || 1)) * 100}%`,
                      borderRadius: "10px"
                    }}
                  />
                </div>

                <button 
                  onClick={handleJoin}
                  className="btn btn-info text-dark w-100 py-3 fw-bold shadow mb-2"
                  style={{borderRadius: "12px"}}
                >
                  🚀 Join This Project
                </button>
                <small className="text-center d-block text-light opacity-75">Quick application</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="container py-5">
        <div className="row g-4">
          
          
          <div className="col-lg-8">
            
            {/* DESCRIPTION */}
            <div 
              className="card border-0 p-4 mb-4 shadow"
              style={{
                backgroundColor: "rgba(26, 29, 33, 0.6)",
                borderRadius: "16px",
                border: "1px solid rgba(23, 162, 184, 0.15)"
              }}
            >
              <h4 className="fw-bold text-info mb-3">📋 Project Overview</h4>
              <p 
                className="text-light mb-0" 
                style={{
                  lineHeight: "1.8", 
                  fontSize: "19px",
                  color: "#a8b3c0"
                }}
              >
                {project.description}
              </p>
            </div>

            {/* TECH STACK */}
            <div 
              className="card border-0 p-4 mb-4 shadow"
              style={{
                backgroundColor: "rgba(26, 29, 33, 0.6)",
                borderRadius: "16px",
                border: "1px solid rgba(23, 162, 184, 0.15)"
              }}
            >
              <h4 className="fw-bold text-info mb-4">⚙️ Tech Stack</h4>
              <div className="d-flex flex-wrap gap-2">
                {Array.isArray(project.techStack) ? project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="badge px-4 py-2"
                    style={{
                      backgroundColor: "rgba(23, 162, 184, 0.15)",
                      color: "#17a2b8",
                      borderRadius: "8px",
                      fontSize: "17px",
                      fontWeight: "600",
                      border: "1px solid rgba(23, 162, 184, 0.2)"
                    }}
                  >
                    {tech}
                  </span>
                )) : (
                  <span 
                    className="badge px-4 py-2"
                    style={{
                      backgroundColor: "rgba(108, 117, 125, 0.2)",
                      color: "#6c757d",
                      borderRadius: "8px",
                      fontSize: "14px"
                    }}
                  >
                    {project.techStack}
                  </span>
                )}
              </div>
            </div>

            {/* ROLES */}
            {project.roles && (
              <div 
                className="card border-0 p-4 mb-4 shadow"
                style={{
                  backgroundColor: "rgba(26, 29, 33, 0.6)",
                  borderRadius: "16px",
                  border: "1px solid rgba(23, 162, 184, 0.15)"
                }}
              >
                <h4 className="fw-bold text-info mb-4">
                  👥 Open Roles ({Array.isArray(project.roles) ? project.roles.length : 1});
                </h4>
                <div className="row g-3">
                  {Array.isArray(project.roles) ? project.roles.map((role, i) => (
                    <div key={i} className="col-md-6">
                      <div 
                        className="p-3 rounded-3 h-100"
                        style={{
                          backgroundColor: "rgba(23, 162, 184, 0.08)",
                          border: "1px solid rgba(23, 162, 184, 0.2)"
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="fw-bold text-white mb-0">{role}</h6>
                          <span 
                            className="badge px-3 py-1"
                            style={{
                              backgroundColor: "#28a74520",
                              color: "#28a745",
                              borderRadius: "6px",
                              fontSize: "11px"
                            }}
                          >
                            Open
                          </span>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="col-12">
                      <div 
                        className="p-4 rounded-3 text-center"
                        style={{
                          backgroundColor: "rgba(108, 117, 125, 0.05)",
                          border: "1px solid rgba(108, 117, 125, 0.2)"
                        }}
                      >
                        <h6 className="text-light mb-2">{project.roles}</h6>
                        <small className="text-light opacity-50">Role information</small>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* GOALS */}
            {project.goal && (
              <div 
                className="card border-0 p-4 shadow"
                style={{
                  backgroundColor: "rgba(26, 29, 33, 0.6)",
                  borderRadius: "16px",
                  border: "1px solid rgba(23, 162, 184, 0.15)"
                }}
              >
                <h4 className="fw-bold text-info mb-3">🎯 Project Goals</h4>
                <p 
                  className="text-light mb-0" 
                  style={{
                    lineHeight: "1.8", 
                    fontSize: "16px",
                    color: "#a8b3c0"
                  }}
                >
                  {project.goal}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            
            {/* CREATOR CARD */}
            <div 
              className="card border-0 p-4 mb-4 shadow text-center"
              style={{
                backgroundColor: "rgba(26, 29, 33, 0.6)",
                borderRadius: "16px",
                border: "1px solid rgba(23, 162, 184, 0.15)"
              }}
            >
              <div 
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(23, 162, 184, 0.2)",
                  border: "3px solid rgba(23, 162, 184, 0.3)",
                  fontSize: "40px"
                }}
              >
                👤
              </div>
              <h5 className="fw-bold mb-2 text-white">Project Creator</h5>
              <p className="text-light mb-3" style={{fontSize: "14px"}}>
                Student • Developer
              </p>
              <button 
                className="btn btn-outline-info w-100 py-2 fw-semibold"
                style={{borderRadius: "10px", borderWidth: "2px"}}
              >
                View Profile
              </button>
            </div>

            {/* STATS CARD */}
            <div 
              className="card border-0 p-4 shadow"
              style={{
                backgroundColor: "rgba(26, 29, 33, 0.6)",
                borderRadius: "16px",
                border: "1px solid rgba(23, 162, 184, 0.15)"
              }}
            >
              <h6 className="fw-bold text-info mb-3">📊 Quick Stats</h6>
              
              <div className="d-flex justify-content-between py-2 mb-2" style={{borderBottom: "1px solid rgba(23, 162, 184, 0.1)"}}>
                <small className="text-light">Status</small>
                <span 
                  className="badge px-2 py-1"
                  style={{
                    backgroundColor: project.status === "Open" ? "#28a74520" : "#6c757d20",
                    color: project.status === "Open" ? "#28a745" : "#6c757d",
                    fontSize: "11px",
                    borderRadius: "6px"
                  }}
                >
                  {project.status?.toUpperCase() || "OPEN"}
                </span>
              </div>

              <div className="d-flex justify-content-between py-2 mb-2" style={{borderBottom: "1px solid rgba(23, 162, 184, 0.1)"}}>
                <small className="text-light">Created</small>
                <small className="fw-bold text-info">
                  {new Date(project.createdAt).toLocaleDateString()}
                </small>
              </div>

              <div className="d-flex justify-content-between py-2 mb-2" style={{borderBottom: "1px solid rgba(23, 162, 184, 0.1)"}}>
                <small className="text-light">Members</small>
                <small className="fw-bold text-info">
                  {project.membersJoined || 0}/{project.membersRequired || 0}
                </small>
              </div>

              <div className="d-flex justify-content-between py-2">
                <small className="text-light">Difficulty</small>
                <small className="fw-bold text-warning">
                  {project.difficulty || "N/A"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;