// import React from "react";
// import "../../styles/ProjectCard.css";

// const ProjectCard = ({ project }) => {
//   const membersJoined = project.membersCount ?? 0;
//   const membersRequired = project.membersRequired ?? 1;
//   const isClosed = membersJoined >= membersRequired;

//   return (
//     <div className="card border-0 shadow-sm hover-shadow-lg rounded-3 h-100 bg-dark text-white p-4 transition-all position-relative overflow-hidden">
//       {/* Subtle top accent */}
//       <div className="position-absolute top-0 start-0 w-100 h-1 bg-gradient-info opacity-80"></div>
      
//       <div className="card-body d-flex flex-column p-0 h-100">
        
//         {/* TITLE + DURATION */}
//         <div className="mb-4 pt-3">
//           <h5 className="fw-bold mb-3 lh-sm hover-text-info transition-all">{project.title}</h5>
          
//           <div className="d-flex gap-2 mb-3 flex-wrap">
//             {project.goal && (
//               <span className="badge bg-info text-dark fw-semibold px-3 py-2 hover-bg-dark hover-text-info transition-all">
//                 {project.goal}
//               </span>
//             )}
//             {project.duration && (
//               <span className="badge bg-secondary hover-bg-dark text-info px-3 py-2 transition-all">
//                 ⏰ {project.duration}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <p className="text-light mb-4 small lh-lg hover-text-white transition-all" 
//             style={{lineHeight: '1.6'}}>
//           {project.description}
//         </p>

//         {/* ROLES & TEAM */}
//         <div className="row mb-4 g-3">
//           <div className="col-6">
//             <small className="text-light mb-2 d-block fw-medium">👨‍💻 Role</small>
//             <span className="badge bg-info text-dark px-4 py-2 w-100 text-start hover-shadow-sm transition-all">
//               {Array.isArray(project.roles) ? project.roles[0] || 'Any' : project.roles || 'Any'}
//             </span>
//           </div>
//           <div className="col-6">
//             <small className="text-light mb-2 d-block fw-medium">👥 Team</small>
//             <span className={`badge w-100 py-3 fs-6 fw-bold text-center transition-all hover-scale-105 ${
//               isClosed ? 'bg-danger hover-bg-danger-dark' : 'bg-success hover-bg-success-dark'
//             } shadow-sm hover-shadow`}>
//               {membersJoined}/{membersRequired}
//             </span>
//           </div>
//         </div>

//         {/* TECH STACK */}
//         {project.techStack && project.techStack.length > 0 && (
//           <div className="mb-4">
//             <small className="text-light d-block mb-3 fw-semibold">Tech Stack</small>
//             <div className="d-flex flex-wrap gap-2">
//               {project.techStack.map((tech, i) => (
//                 <span key={i} 
//                       className="badge bg-light text-dark px-3 py-2 fw-semibold rounded-pill hover-bg-info hover-text-dark transition-all hover-shadow-sm cursor-pointer">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* FOOTER */}
//         <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
//           <div className="d-flex justify-content-between align-items-center">
//             <span className="badge bg-warning text-dark px-4 py-2 fw-semibold fs-6 hover-shadow-sm transition-all">
//               {project.difficulty}
//             </span>
//             <button 
//               className={`btn px-5 py-2 fw-bold fs-6 rounded-pill transition-all border-2 ${
//                 isClosed 
//                   ? 'btn-outline-light hover-bg-dark hover-text-info shadow-sm' 
//                   : 'btn-info text-dark hover-shadow-lg shadow-sm transform-hover'
//               }`}
//               disabled={isClosed}
//             >
//               {isClosed ? 'Full' : 'Join Now'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;








import React from "react";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const membersJoined = project.membersCount ?? 0;
  const membersRequired = project.membersRequired ?? 1;
  const isClosed = membersJoined >= membersRequired;

  return (
    <div className="card border-0 shadow-sm hover-shadow-lg rounded-3 h-100 bg-white position-relative overflow-hidden transition-all">
      {/* Subtle top accent */}
      <div className="position-absolute top-0 start-0 w-100 h-1 bg-info"></div>
      
      <div className="card-body d-flex flex-column p-4 h-100">
        
        {/* TITLE + DURATION */}
        <div className="mb-4 pt-3">
          <h5 className="fw-bold mb-3 lh-sm text-dark hover-text-primary transition-all">{project.title}</h5>
          
          <div className="d-flex gap-2 mb-3 flex-wrap">
            {project.goal && (
              <span className="badge bg-primary text-white fw-semibold px-3 py-2 hover-shadow-sm transition-all">
                {project.goal}
              </span>
            )}
            {project.duration && (
              <span className="badge bg-light text-dark px-3 py-2 border hover-shadow-sm transition-all">
                ⏰ {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted mb-4 small lh-lg hover-text-dark transition-all" 
            style={{lineHeight: '1.6'}}>
          {project.description}
        </p>

        {/* ROLES & TEAM */}
        <div className="row mb-4 g-3">
          <div className="col-6">
            <small className="text-muted mb-2 d-block fw-medium">👨‍💻 Role</small>
            <span className="badge bg-light text-dark px-4 py-2 w-100 text-start border hover-shadow-sm transition-all">
              {Array.isArray(project.roles) ? project.roles[0] || 'Any' : project.roles || 'Any'}
            </span>
          </div>
          <div className="col-6">
            <small className="text-muted mb-2 d-block fw-medium">👥 Team</small>
            <span className={`badge w-100 py-3 fs-6 fw-bold text-center transition-all hover-scale-105 shadow-sm ${
              isClosed ? 'bg-danger text-white hover-shadow-danger' : 'bg-success text-white hover-shadow-success'
            }`}>
              {membersJoined}/{membersRequired}
            </span>
          </div>
        </div>

        {/* TECH STACK */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-4">
            <small className="text-muted d-block mb-3 fw-semibold">Tech Stack</small>
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} 
                      className="badge bg-light text-dark px-3 py-2 fw-semibold rounded-pill hover-bg-primary hover-text-white transition-all hover-shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-auto pt-3 border-top border-secondary border-opacity-25">
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-warning text-dark px-4 py-2 fw-semibold fs-6 hover-shadow-sm transition-all">
              {project.difficulty}
            </span>
            <button 
              className={`btn px-5 py-2 fw-bold fs-6 rounded-pill transition-all border-2 shadow-sm hover-shadow ${
                isClosed 
                  ? 'btn-outline-secondary hover-bg-light' 
                  : 'btn-primary hover-shadow-lg'
              }`}
              disabled={isClosed}
            >
              {isClosed ? 'Full' : 'Join Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
