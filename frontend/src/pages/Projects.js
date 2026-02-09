// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../components/Navbar";
// import ProjectCard from "../components/projects/ProjectCard";
// import "../styles/projects.css";
// import { getProjects } from "../redux/projects/projectAction";

// const Projects = () => {
//   const dispatch = useDispatch();

//   const { projects = [], isLoading } = useSelector(
//     (state) => state.projects
//   );

//   const [selectedTech, setSelectedTech] = useState([]);
//   const [difficulty, setDifficulty] = useState("");
//   const [projectTypes, setProjectTypes] = useState([]);
//   const [search, setSearch] = useState("");

//   // 🔥 FETCH PROJECTS
//   useEffect(() => {
//     dispatch(getProjects());
//   }, [dispatch]);

//   console.log("projects =", projects);

//  const filteredProjects = projects
//   .filter((project) => project)
//   .filter((project) => {
//     const matchTech =
//       selectedTech.length === 0 ||
//       selectedTech.some((tech) =>
//         project?.techStack?.includes(tech)
//       );

//     const matchDifficulty =
//       !difficulty || project.level === difficulty;

//     const matchType =
//       projectTypes.length === 0 ||
//       projectTypes.includes(project.type);

//     const matchSearch =
//       project?.title
//         ?.toLowerCase()
//         .includes(search.toLowerCase());

//     return (
//       matchTech &&
//       matchDifficulty &&
//       matchType &&
//       matchSearch
//     );
//   });

//   return (
//     <div className="container-fluid px-4">
//       <Navbar />

//       <div className="row">
        
//         <div className="col-md-3 col-lg-2 pt-4">
//           <div
//             className="card border-0 shadow rounded-4 bg-dark text-white"
//             style={{ minHeight: "100vh" }}
//           >
//             <div className="card-body">
              
//               <div className="mb-4">
//                 <p className="fw-semibold mb-4 fs-3 text-center text-primary">
//                   Tech Stack
//                 </p>

//                 {[
//                   "React",
//                   "Node.js",
//                   "MongoDB",
//                   "Express",
//                   "Java",
//                   "Python",
//                 ].map((tech) => (
//                   <div className="form-check mb-1" key={tech}>
//                     <input
//                       className="form-check-input fs-5"
//                       type="checkbox"
//                       checked={selectedTech.includes(tech)}
//                       onChange={(e) => {
//                         setSelectedTech((prev) =>
//                           e.target.checked
//                             ? [...prev, tech]
//                             : prev.filter((t) => t !== tech)
//                         );
//                       }}
//                     />
//                     <label className="form-check-label fs-5 text-light">
//                       {tech}
//                     </label>
//                   </div>
//                 ))}
//               </div>

              
//               <div className="mb-4">
//                 <p className="fw-semibold mb-3 fs-3 text-center text-primary">
//                   Difficulty
//                 </p>

//                 {["Beginner", "Intermediate", "Advanced"].map((level) => (
//                   <div className="form-check mb-1" key={level}>
//                     <input
//                       className="form-check-input fs-5"
//                       type="checkbox"
//                       checked={difficulty === level}
//                       onChange={() =>
//                         setDifficulty(
//                           difficulty === level ? "" : level
//                         )
//                       }
//                     />
//                     <label className="form-check-label fs-5 text-light">
//                       {level}
//                     </label>
//                   </div>
//                 ))}
//               </div>

              
//               <div className="mb-5">
//                 <p className="fw-semibold mb-3 text-center text-primary fs-3">
//                   Project Type
//                 </p>

//                 {[
//                   "Hackathon",
//                   "Learning",
//                   "Startup",
//                   "Open Source",
//                   "Portfolio",
//                 ].map((type) => (
//                   <div className="form-check mb-1" key={type}>
//                     <input
//                       className="form-check-input fs-5"
//                       type="checkbox"
//                       checked={projectTypes.includes(type)}
//                       onChange={(e) => {
//                         setProjectTypes((prev) =>
//                           e.target.checked
//                             ? [...prev, type]
//                             : prev.filter((t) => t !== type)
//                         );
//                       }}
//                     />
//                     <label className="form-check-label fs-5 text-light">
//                       {type}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="btn btn-outline-secondary w-100 rounded-3"
//                 onClick={() => {
//                   setSelectedTech([]);
//                   setDifficulty("");
//                   setProjectTypes([]);
//                   setSearch("");
//                 }}
//               >
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         </div>


       
//         <div className="col-md-9 col-lg-10 mt-2">
//           <div className="card border-0 shadow-sm rounded-4 mb-4">
//             <div className="card-body">
//               <div className="row align-items-center">
//                 <div className="col-md-8">
//                   <input
//                     type="text"
//                     className="form-control form-control-lg rounded-3"
//                     placeholder="Search projects by title"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                 </div>
//                 <div className="col-md-4 text-end">
//                   <span className="text-muted">
//                     Showing{" "}
//                     <strong>{filteredProjects.length}</strong>{" "}
//                     projects
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {isLoading ? (
//             <p className="text-center">Loading projects...</p>
//           ) : filteredProjects.length === 0 ? (
//             <p className="text-center text-muted">
//               No projects found
//             </p>
//           ) : (
//             <div className="row">
//               {filteredProjects.map((project) => (
//                 <div
//                   className="col-md-6 col-lg-4 mb-4"
//                   key={project?._id}
//                 >
//                   <ProjectCard project={project} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProjectCard from "../components/projects/ProjectCard";
// import "../styles/projects.css";
// import { getProjects } from "../redux/projects/projectAction";

// const Projects = () => {
//   const dispatch = useDispatch();
//   const { projects = [], isLoading } = useSelector((state) => state.projects);

//   const [selectedTech, setSelectedTech] = useState([]);
//   const [difficulty, setDifficulty] = useState("");
//   const [projectTypes, setProjectTypes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     dispatch(getProjects());
//   }, [dispatch]);

//   const filteredProjects = projects
//     .filter((project) => project)
//     .filter((project) => {
//       const matchTech =
//         selectedTech.length === 0 ||
//         selectedTech.some((tech) =>
//           project?.techStack?.includes(tech)
//         );

//       const matchDifficulty =
//         !difficulty || project.level === difficulty;

//       const matchType =
//         projectTypes.length === 0 ||
//         projectTypes.includes(project.type);

//       const matchSearch =
//         project?.title
//           ?.toLowerCase()
//           .includes(search.toLowerCase());

//       return (
//         matchTech &&
//         matchDifficulty &&
//         matchType &&
//         matchSearch
//       );
//     });

//   const clearAllFilters = () => {
//     setSelectedTech([]);
//     setDifficulty("");
//     setProjectTypes([]);
//     setSearch("");
//   };

//   return (
//     <div className=" min-vh-100 bg-dark py-4" >
//       {/* <Navbar /> */}

//       <div className="container-fluid px-4">
//         <div className="row">
//           <div className="col-12 row-8">
            
//             {/* MAIN SEARCH BAR WITH FILTERS DROPDOWN */}
//             <div className="card border-0 shadow-lg bg-dark rounded-4 mb-4" >
//               <div className="card-body p-4">
//                 {/* SEARCH + FILTERS BUTTON */}
//                 <div className="row align-items-center g-3 mb-4">
//                   <div className="col-lg-6 col-md-8">
//                     <div className="input-group">
//                       <span className="input-group-text text-white border-info text-info fs-5">
//                          <i className="bi bi-search text-white"></i>
//                       </span>

                      
//                       <input
//                         type="text"
//                         className="form-control form-control-lg bg-dark bg-opacity-50 border-start-0 border-info text-white"
//                         placeholder="Search projects by title..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="col-lg-2 col-md-4">
//                     <button 
//                       className="btn btn-outline-info w-100 py-3 fw-semibold rounded-3 border-2 fs-6"
//                       onClick={() => setShowFilters(!showFilters)}
//                     >
//                       <i className="bi bi-funnel me-2"></i>
//                       Filters 
//                       <span className="badge bg-dark ms-2">{selectedTech.length + projectTypes.length + (difficulty ? 1 : 0)}</span>
//                     </button>
//                   </div>

//                   <div className="col-lg-3 col-md-12 text-lg-end">
//                     <span className="text-light fs-6 fw-semibold">
//                       <i className="bi bi-grid me-1 text-info"></i>
//                       <span className="text-info">{filteredProjects.length}</span> projects found
//                     </span>
//                   </div>
//                 </div>

//                 {/* FILTERS DROPDOWN */}
//                 {showFilters && (
//                   <div className="row g-4 p-4  bg-opacity-50 rounded-4 border border-info border-opacity-25" style={{backgroundColor: "#101113"}}>
//                     <div className="col-md-4">
//                       <h6 className="fw-bold text-info mb-3">🔧 Tech Stack</h6>
//                       {[
//                         "React", "Node.js", "MongoDB", "Express", 
//                         "Java", "Python", "Next.js"
//                       ].map((tech) => (
//                         <div className="form-check mb-2" key={tech}>
//                           <input
//                             className="form-check-input border-info"
//                             type="checkbox"
//                             id={`tech-${tech}`}
//                             checked={selectedTech.includes(tech)}
//                             onChange={(e) => {
//                               setSelectedTech((prev) =>
//                                 e.target.checked
//                                   ? [...prev, tech]
//                                   : prev.filter((t) => t !== tech)
//                               );
//                             }}
//                           />
//                           <label className="form-check-label text-light fw-medium" htmlFor={`tech-${tech}`}>
//                             {tech}
//                           </label>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="col-md-4">
//                       <h6 className="fw-bold text-info mb-3">🎯 Difficulty</h6>
//                       {["Beginner", "Intermediate", "Advanced"].map((level) => (
//                         <div className="form-check mb-2" key={level}>
//                           <input
//                             className="form-check-input border-info"
//                             type="checkbox"
//                             id={`diff-${level}`}
//                             checked={difficulty === level}
//                             onChange={() =>
//                               setDifficulty(
//                                 difficulty === level ? "" : level
//                               )
//                             }
//                           />
//                           <label className="form-check-label text-light fw-medium" htmlFor={`diff-${level}`}>
//                             {level}
//                           </label>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="col-md-4">
//                       <h6 className="fw-bold text-info mb-3">📋 Project Type</h6>
//                       {[
//                         "Hackathon", "Learning", "Startup", 
//                         "Open Source", "Portfolio"
//                       ].map((type) => (
//                         <div className="form-check mb-2" key={type}>
//                           <input
//                             className="form-check-input border-info"
//                             type="checkbox"
//                             id={`type-${type}`}
//                             checked={projectTypes.includes(type)}
//                             onChange={(e) => {
//                               setProjectTypes((prev) =>
//                                 e.target.checked
//                                   ? [...prev, type]
//                                   : prev.filter((t) => t !== type)
//                               );
//                             }}
//                           />
//                           <label className="form-check-label text-light fw-medium" htmlFor={`type-${type}`}>
//                             {type}
//                           </label>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="col-12 text-end">
//                       <button
//                         className="btn btn-outline-info px-4 py-2 fw-semibold me-2"
//                         onClick={clearAllFilters}
//                       >
//                         🧹 Clear All
//                       </button>
//                       <button
//                         className="btn btn-info px-4 py-2 fw-semibold text-dark"
//                         onClick={() => setShowFilters(false)}
//                       >
//                         Apply Filters
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* PROJECTS GRID */}
//             {isLoading ? (
//               <div className="text-center py-5">
//                 <div className="spinner-border text-info" style={{width: '3rem', height: '3rem'}}>
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-3 text-light fs-5">Loading projects...</p>
//               </div>
//             ) : filteredProjects.length === 0 ? (
//               <div className="text-center py-5">
//                 <i className="bi bi-inbox display-1 text-light mb-4"></i>
//                 <h4 className="text-light mb-3">No projects found</h4>
//                 <p className="text-light-emphasis fs-5">Try adjusting your search or filters</p>
//                 <button className="btn btn-outline-info px-5 py-3 mt-3" onClick={clearAllFilters}>
//                   Clear All Filters
//                 </button>
//               </div>
//             ) : (
//               <div className="row g-4">
//                 {filteredProjects.map((project) => (
//                   <div className="col-xl-4 col-lg-6" key={project?._id}>
//                     <ProjectCard project={project} />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;



// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProjectCard from "../components/projects/ProjectCard";
// import "../styles/projects.css";
// import { getProjects } from "../redux/projects/projectAction";

// const Projects = () => {
//   const dispatch = useDispatch();
//   const { projects = [], isLoading } = useSelector((state) => state.projects);

//   const [selectedTech, setSelectedTech] = useState([]);
//   const [difficulty, setDifficulty] = useState("");
//   const [projectTypes, setProjectTypes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     dispatch(getProjects());
//   }, [dispatch]);

//   const filteredProjects = projects
//     .filter((project) => project)
//     .filter((project) => {
//       const matchTech =
//         selectedTech.length === 0 ||
//         selectedTech.some((tech) =>
//           project?.techStack?.includes(tech)
//         );

//       const matchDifficulty =
//         !difficulty || project.level === difficulty;

//       const matchType =
//         projectTypes.length === 0 ||
//         projectTypes.includes(project.type);

//       const matchSearch =
//         project?.title
//           ?.toLowerCase()
//           .includes(search.toLowerCase());

//       return (
//         matchTech &&
//         matchDifficulty &&
//         matchType &&
//         matchSearch
//       );
//     });

//   const clearAllFilters = () => {
//     setSelectedTech([]);
//     setDifficulty("");
//     setProjectTypes([]);
//     setSearch("");
//   };

//   return (
//     <div className="text-white py-5" style={{ backgroundColor: "#101113" }}>
//       <div className="container">

//         {/* ===== PAGE HEADER (HOME STYLE) ===== */}
//         <div className="text-center mb-5">
//           <span className="badge bg-info text-dark px-4 py-2 mb-3 fs-6 fw-semibold">
//             Browse & Join
//           </span>
//           <h2 className="fw-bold fs-1 mb-3">
//             Explore Projects
//           </h2>
//           <p className="text-light fs-5 col-lg-7 mx-auto">
//             Find teams, collaborate with students and build real portfolio projects
//           </p>
//         </div>

//         {/* ===== SEARCH + FILTER CARD (HOME CARD FEEL) ===== */}
//         <div className="card border-0 bg-dark bg-opacity-60 rounded-4 p-4 mb-5">
//           <div className="row align-items-center g-3 mb-3">
//             <div className="col-lg-6">
//               <input
//                 type="text"
//                 className="form-control form-control-lg bg-dark bg-opacity-50 border-info text-white"
//                 placeholder="Search projects by title..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>

//             <div className="col-lg-3">
//               <button
//                 className="btn btn-outline-info btn-lg w-100 fw-bold"
//                 onClick={() => setShowFilters(!showFilters)}
//               >
//                 Filters
//                 <span className="badge bg-dark ms-2">
//                   {selectedTech.length +
//                     projectTypes.length +
//                     (difficulty ? 1 : 0)}
//                 </span>
//               </button>
//             </div>

//             <div className="col-lg-3 text-lg-end">
//               <span className="text-light fs-6">
//                 <span className="text-info fw-bold">
//                   {filteredProjects.length}
//                 </span>{" "}
//                 projects found
//               </span>
//             </div>
//           </div>

//           {/* FILTERS */}
//           {showFilters && (
//             <div
//               className="row g-4 p-4 rounded-4 mt-3"
//               style={{ backgroundColor: "#101113" }}
//             >
//               <div className="col-md-4">
//                 <h6 className="fw-bold text-info mb-3">Tech Stack</h6>
//                 {["React", "Node.js", "MongoDB", "Express", "Next.js"].map(
//                   (tech) => (
//                     <div className="form-check mb-2" key={tech}>
//                       <input
//                         className="form-check-input border-info"
//                         type="checkbox"
//                         checked={selectedTech.includes(tech)}
//                         onChange={(e) => {
//                           setSelectedTech((prev) =>
//                             e.target.checked
//                               ? [...prev, tech]
//                               : prev.filter((t) => t !== tech)
//                           );
//                         }}
//                       />
//                       <label className="form-check-label text-light">
//                         {tech}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>

//               <div className="col-md-4">
//                 <h6 className="fw-bold text-info mb-3">Difficulty</h6>
//                 {["Beginner", "Intermediate", "Advanced"].map((level) => (
//                   <div className="form-check mb-2" key={level}>
//                     <input
//                       className="form-check-input border-info"
//                       type="checkbox"
//                       checked={difficulty === level}
//                       onChange={() =>
//                         setDifficulty(difficulty === level ? "" : level)
//                       }
//                     />
//                     <label className="form-check-label text-light">
//                       {level}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               <div className="col-md-4">
//                 <h6 className="fw-bold text-info mb-3">Project Type</h6>
//                 {["Hackathon", "Learning", "Startup", "Open Source"].map(
//                   (type) => (
//                     <div className="form-check mb-2" key={type}>
//                       <input
//                         className="form-check-input border-info"
//                         type="checkbox"
//                         checked={projectTypes.includes(type)}
//                         onChange={(e) => {
//                           setProjectTypes((prev) =>
//                             e.target.checked
//                               ? [...prev, type]
//                               : prev.filter((t) => t !== type)
//                           );
//                         }}
//                       />
//                       <label className="form-check-label text-light">
//                         {type}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>

//               <div className="col-12 text-end mt-3">
//                 <button
//                   className="btn btn-outline-info me-3"
//                   onClick={clearAllFilters}
//                 >
//                   Clear All
//                 </button>
//                 <button
//                   className="btn btn-info text-dark fw-bold"
//                   onClick={() => setShowFilters(false)}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ===== PROJECT GRID (HOME LATEST PROJECTS FEEL) ===== */}
//         {isLoading ? (
//           <div className="text-center py-5">
//             <div className="spinner-border text-info"></div>
//             <p className="mt-3 text-light">Loading projects...</p>
//           </div>
//         ) : filteredProjects.length === 0 ? (
//           <div className="text-center py-5">
//             <h4>No projects found</h4>
//             <p className="text-light">Try changing filters</p>
//           </div>
//         ) : (
//           <div className="row g-4">
//             {filteredProjects.map((project) => (
//               <div className="col-lg-4 col-md-6" key={project?._id}>
//                 <ProjectCard project={project} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;




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

  const filteredProjects = projects
    .filter((project) => project)
    .filter((project) => {
      const matchTech = selectedTech.length === 0 || selectedTech.some((tech) => project?.techStack?.includes(tech));
      const matchDifficulty = !difficulty || project.level === difficulty;
      const matchType = projectTypes.length === 0 || projectTypes.includes(project.type);
      const matchSearch = project?.title?.toLowerCase().includes(search.toLowerCase());
      return matchTech && matchDifficulty && matchType && matchSearch;
    });

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
            {/* SEARCH BAR (MODERN) */}
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
                <div className="spinner-border text-info shadow-sm" style={{width: '3rem', height: '3rem'}}></div>
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