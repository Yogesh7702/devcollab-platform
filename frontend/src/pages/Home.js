// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div>
//       <Navbar />

//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="row align-items-center">

          
//             <div className="col-lg-6">

             
//               <span className="badge rounded-pill bg-light text-dark px-3 py-2 mb-3">
//                 Dev Collab
//               </span>

//               <h1 className="fw-bold display-4 mt-3">
//                 Find Teammates. Build Real <br /> Projects.
//               </h1>

//               <p className="text-muted fs-5 mt-3">
//                 A student-friendly platform to explore real-world projects,
//                 learn by building, and collaborate with junior developers.
//               </p>

              
//               <div className="d-flex gap-3 mt-4">
//                 <button className="btn btn-primary btn-lg px-4">
//                   Explore Projects
//                 </button>
//                 <button className="btn btn-outline-primary btn-lg px-4">
//                   Create Project
//                 </button>
//               </div>

            
//               <div className="d-flex gap-3 mt-4">
//                 <div className="border rounded p-3 small">
//                   <strong>100+</strong><br />
//                   <span className="text-muted">learning-ready projects</span>
//                 </div>
//                 <div className="border rounded p-3 small">
//                   <strong>Beginner</strong><br />
//                   <span className="text-muted">friendly teams</span>
//                 </div>
//                 <div className="border rounded p-3 small">
//                   <strong>Real</strong><br />
//                   <span className="text-muted">portfolio experience</span>
//                 </div>
//               </div>
//             </div>

         
//             <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
//               <div className="border rounded-4 p-4 shadow-sm" style={{ width: "380px" }}>

//                 <div className="d-flex justify-content-between mb-3">
//                   <span className="badge bg-dark">Active</span>
//                   <span className="badge bg-light text-dark">Indigo UI</span>
//                 </div>

//                 <h5 className="fw-bold">Build with a team in a weekend</h5>
//                 <p className="text-muted">
//                   Browse projects, request to join, and chat with teammates.
//                 </p>

//                 <div className="d-flex gap-2 mb-3">
//                   <span className="badge bg-light text-dark">React</span>
//                   <span className="badge bg-light text-dark">Node</span>
//                   <span className="badge bg-light text-dark">UI/UX</span>
//                   <span className="badge bg-light text-dark">Git</span>
//                 </div>

//                 <button className="btn btn-primary w-100">
//                   See what’s trending
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//        <section className="py-5 bg-white">
//   <div className="container">
//     <div className="row g-4">

     
//       <div className="col-md-4">
//         <div className="border rounded-4 p-4 h-100">
//           <div
//             className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
//             style={{ width: "44px", height: "44px" }}
//           >
//             🤝
//           </div>
//           <h5 className="fw-bold">Find teammates</h5>
//           <p className="text-muted mb-0">
//             Match with builders who share your stack and goals.
//           </p>
//         </div>
//       </div>

//       <div className="col-md-4">
//         <div className="border rounded-4 p-4 h-100">
//           <div
//             className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
//             style={{ width: "44px", height: "44px" }}
//           >
//             ✨
//           </div>
//           <h5 className="fw-bold">Real project experience</h5>
//           <p className="text-muted mb-0">
//             Build something shippable—perfect for your portfolio.
//           </p>
//         </div>
//       </div>

      
//       <div className="col-md-4">
//         <div className="border rounded-4 p-4 h-100">
//           <div
//             className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
//             style={{ width: "44px", height: "44px" }}
//           >
//             🌱
//           </div>
//           <h5 className="fw-bold">Beginner friendly</h5>
//           <p className="text-muted mb-0">
//             Clear roles, simple scopes, and helpful community vibes.
//           </p>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>

// <section className="py-5 bg-light">
//   <div className="container">
//     <div className="text-center mb-5">
//       <h2 className="fw-bold">How DevCollab Works</h2>
//       <p className="text-muted fs-5">
//         No random groups. Match by skills, roles, and real project goals.
//       </p>
//     </div>

//     <div className="row g-4">
//       <div className="col-md-3">
//         <div className="border rounded-4 p-4 h-100 bg-white text-center">
//           <div className="fs-1 mb-3">🧠</div>
//           <h6 className="fw-bold">Choose Your Stack</h6>
//           <p className="text-muted small mb-0">
//             React, MERN, UI/UX, Backend — select what you want to work on.
//           </p>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="border rounded-4 p-4 h-100 bg-white text-center">
//           <div className="fs-1 mb-3">📌</div>
//           <h6 className="fw-bold">Pick a Role</h6>
//           <p className="text-muted small mb-0">
//             Frontend, backend, full-stack or just learning & observing.
//           </p>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="border rounded-4 p-4 h-100 bg-white text-center">
//           <div className="fs-1 mb-3">🤝</div>
//           <h6 className="fw-bold">Join or Create</h6>
//           <p className="text-muted small mb-0">
//             Send join requests or start your own project as a lead.
//           </p>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="border rounded-4 p-4 h-100 bg-white text-center">
//           <div className="fs-1 mb-3">🚀</div>
//           <h6 className="fw-bold">Build & Ship</h6>
//           <p className="text-muted small mb-0">
//             Collaborate, chat, build fast — and ship real products.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <Footer />

//     </div>
//   );
// };

// export default Home;

    



import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-dark text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-5 py-lg-0 min-vh-75 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-info text-dark px-4 py-2 mb-4 fs-6 fw-semibold">
                Made for Computer Science Students
              </span>
              <h1 className="display-4 fw-bold mb-4">
                Build Real 
                <span className="text-info d-block">Projects with Teams</span>
              </h1>
              <p className="fs-4 text-light mb-5">
                Find teammates, work on portfolio projects, learn by doing. Perfect for students.
              </p>
              
              <div className="d-grid gap-3 d-md-flex mb-5">
                <Link to="/projects" className="btn btn-info btn-lg px-5 py-3 fw-bold fs-5">
                  Browse Projects
                </Link>
                <Link to="/create-project" className="btn btn-outline-info btn-lg px-5 py-3 fw-bold">
                  Start Project
                </Link>
              </div>

              <div className="row g-4">
                <div className="col-4">
                  <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
                    <div className="h3 fw-bold text-info mb-1">89</div>
                    <small className="text-light">Projects Live</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
                    <div className="h3 fw-bold text-info mb-1">245</div>
                    <small className="text-light">Students</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
                    <div className="h3 fw-bold text-info mb-1">42</div>
                    <small className="text-light">Teams Formed</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 bg-dark bg-opacity-60 rounded-4 p-4 shadow-lg">
                <div className="d-flex justify-content-between mb-3">
                  <span className="badge bg-success px-3 py-2">Active</span>
                  <span className="badge bg-secondary px-2">Hackathon</span>
                </div>
                <h4 className="fw-bold mb-3">Task Management App</h4>
                <p className="text-light mb-4">
                  Build a collaborative task app with real-time updates. Great for MERN learning.
                </p>
                <div className="d-flex gap-2 mb-4">
                  <span className="badge bg-info bg-opacity-50 px-3 py-2">React</span>
                  <span className="badge bg-info bg-opacity-50 px-3 py-2">Node</span>
                  <span className="badge bg-info bg-opacity-50 px-3 py-2">Socket.io</span>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <small className="text-light">Team:</small>
                    <span className="badge bg-warning text-dark fw-bold px-4 py-2">2/4</span>
                  </div>
                  <span className="badge bg-success w-100 text-center py-3 fs-6 fw-bold">Join Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-5 bg-dark bg-opacity-90">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-3">Popular Categories</h2>
            <p className="text-light fs-5 col-lg-6 mx-auto">
              Find projects that match your skills
            </p>
          </div>
          <div className="row g-4">
            {[
              {name: 'React Projects', count: '25', icon: '⚛️'},
              {name: 'Fullstack MERN', count: '18', icon: '🔗'},
              {name: 'Backend APIs', count: '12', icon: '⚙️'},
              {name: 'UI/UX Design', count: '9', icon: '🎨'},
              {name: 'Hackathons', count: '15', icon: '⚡'},
              {name: 'Beginner', count: '32', icon: '🌱'}
            ].map((cat, i) => (
              <div key={i} className="col-md-4 col-lg-2">
                <Link to="/projects" className="text-decoration-none">
                  <div className="card border-0 bg-dark bg-opacity-60 hover-bg-opacity-80 rounded-4 p-4 h-100 border-info border-opacity-30 transition-all text-center">
                    <div className="fs-1 mb-3">{cat.icon}</div>
                    <h5 className="fw-bold text-white mb-2">{cat.name}</h5>
                    <div className="h6 text-info fw-bold">{cat.count}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-3">How It Works</h2>
            <p className="text-light fs-5 col-lg-8 mx-auto">
              4 simple steps from student to developer
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              {step: '1', title: 'Browse', desc: 'Find projects by your skills', icon: '🔍'},
              {step: '2', title: 'Apply', desc: 'Request to join teams', icon: '📝'},
              {step: '3', title: 'Collaborate', desc: 'Chat & build together', icon: '💬'},
              {step: '4', title: 'Ship', desc: 'Deploy & showcase', icon: '🚀'}
            ].map((s, i) => (
              <div key={i} className="col-lg-3 col-md-6 text-center">
                <div className="p-4 rounded-4 bg-dark bg-opacity-60 border border-light border-opacity-20 hover-border-info transition-all">
                  <div className="fs-2 mb-3">{s.icon}</div>
                  <div className="h4 fw-bold text-white mb-2">{s.step}</div>
                  <h5 className="fw-bold mb-3">{s.title}</h5>
                  <p className="text-light mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST PROJECTS */}
      <section className="py-5 bg-dark bg-opacity-90">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-4">Latest Projects</h2>
            <p className="text-light fs-5 col-lg-6 mx-auto">
              Join active teams building right now
            </p>
          </div>

          <div className="row g-4">
            {[
              {title: 'Weather Dashboard', tech: ['React', 'API'], team: '1/3', status: 'OPEN', level: 'Beginner'},
              {title: 'Blog Platform', tech: ['Next.js', 'Tailwind'], team: '0/4', status: 'OPEN', level: 'Intermediate'},
              {title: 'Chat App', tech: ['Socket.io', 'React'], team: '3/3', status: 'FULL', level: 'Advanced'},
              {title: 'Todo App', tech: ['Vue', 'Firebase'], team: '1/2', status: 'OPEN', level: 'Beginner'},
              {title: 'E-commerce', tech: ['MERN'], team: '2/5', status: 'OPEN', level: 'Intermediate'},
              {title: 'Portfolio', tech: ['React', 'Framer'], team: '0/2', status: 'OPEN', level: 'Beginner'}
            ].map((proj, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="card border-0 bg-dark bg-opacity-70 rounded-3 p-4 h-100 hover-shadow-lg transition-all border border-light border-opacity-10">
                  <h5 className="fw-bold text-white mb-3">{proj.title}</h5>
                  <div className="d-flex gap-2 mb-3 flex-wrap">
                    {proj.tech.map((t, j) => (
                      <span key={j} className="badge bg-info bg-opacity-50 px-3 py-1 small">{t}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-secondary px-3 py-2">{proj.level}</span>
                    <span className="badge bg-warning text-dark fw-bold px-4 py-2">
                      {proj.team}
                    </span>
                  </div>
                  <span className={`badge w-100 py-3 fs-6 fw-bold ${
                    proj.status === 'FULL' ? 'bg-danger' : 'bg-success'
                  }`}>
                    {proj.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-info btn-lg px-6 py-3 fw-bold fs-5">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION - STUDENT SUCCESS */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-4">Student Success Stories</h2>
            <p className="text-light fs-5 col-lg-8 mx-auto">
              See what students built and where they are now
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              {name: 'Rahul K.', college: 'IPS College', project: 'E-commerce Site', result: 'Got internship @ local startup'},
              {name: 'Priya S.', college: 'Jaipur Univ', project: 'Task Manager', result: 'Added to portfolio + interviews'},
              {name: 'Amit R.', college: 'BCA Student', project: 'Weather App', result: 'First deployed project!'}
            ].map((story, i) => (
              <div key={i} className="col-lg-4">
                <div className="card border-0 bg-dark bg-opacity-60 rounded-4 p-4 h-100 border-info border-opacity-20">
                  <div className="fs-1 mb-3">⭐</div>
                  <h5 className="fw-bold text-white mb-3">{story.name}</h5>
                  <div className="mb-3">
                    <small className="text-light d-block mb-1">{story.college}</small>
                    <span className="badge bg-success bg-opacity-50 px-3 py-1">{story.project}</span>
                  </div>
                  <p className="text-light mb-0 fs-6">{story.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/success-stories" className="btn btn-outline-info btn-lg px-6 py-3 fw-bold fs-5">
              See More Success →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 bg-dark bg-opacity-90 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Ready to Build?</h2>
              <p className="fs-4 text-light mb-5 col-lg-8 mx-auto">
                Join 245+ students building real projects. Start your journey today.
              </p>
              <div className="d-md-flex justify-content-center gap-4">
                <Link to="/projects" className="btn btn-info btn-lg px-6 py-4 fw-bold fs-4 mb-3 mb-md-0">
                  Start Building Now
                </Link>
                <Link to="/about" className="btn btn-outline-info btn-lg px-6 py-4 fw-bold fs-4">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
