// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="text-white" style={{backgroundColor: "#101113"}}>
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="py-5 py-lg-0 min-vh-75 d-flex align-items-center">
//         <div className="container">
//           <div className="row align-items-center g-5">
//             <div className="col-lg-6">
//               <span className="badge bg-info text-dark px-4 py-2 mb-4 fs-6 fw-semibold">
//                 Made for Computer Science Students
//               </span>
//               <h1 className="display-4 fw-bold mb-4">
//                 Build Real
//                 <span className="text-info d-block">Projects with Teams</span>
//               </h1>
//               <p className="fs-4 text-light mb-5">
//                 Find teammates, work on portfolio projects, learn by doing. Perfect for students.
//               </p>

//               <div className="d-grid gap-3 d-md-flex mb-5">
//                 <Link to="/projects" className="btn btn-info btn-lg px-5 py-3 fw-bold fs-5">
//                   Browse Projects
//                 </Link>
//                 <Link to="/create-project" className="btn btn-outline-info btn-lg px-5 py-3 fw-bold">
//                   Start Project
//                 </Link>
//               </div>

//               <div className="row g-4">
//                 <div className="col-4">
//                   <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
//                     <div className="h3 fw-bold text-info mb-1">89</div>
//                     <small className="text-light">Projects Live</small>
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
//                     <div className="h3 fw-bold text-info mb-1">245</div>
//                     <small className="text-light">Students</small>
//                   </div>
//                 </div>
//                 <div className="col-4">
//                   <div className="text-center p-3 bg-dark bg-opacity-50 rounded-3">
//                     <div className="h3 fw-bold text-info mb-1">42</div>
//                     <small className="text-light">Teams Formed</small>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="card border-0 bg-dark bg-opacity-60 rounded-4 p-4 shadow-lg">
//                 <div className="d-flex justify-content-between mb-3">
//                   <span className="badge bg-success px-3 py-2">Active</span>
//                   <span className="badge bg-secondary px-2">Hackathon</span>
//                 </div>
//                 <h4 className="fw-bold mb-3">Task Management App</h4>
//                 <p className="text-light mb-4">
//                   Build a collaborative task app with real-time updates. Great for MERN learning.
//                 </p>
//                 <div className="d-flex gap-2 mb-4">
//                   <span className="badge bg-info bg-opacity-50 px-3 py-2">React</span>
//                   <span className="badge bg-info bg-opacity-50 px-3 py-2">Node</span>
//                   <span className="badge bg-info bg-opacity-50 px-3 py-2">Socket.io</span>
//                 </div>
//                 <div className="mb-4">
//                   <div className="d-flex justify-content-between mb-2">
//                     <small className="text-light">Team:</small>
//                     <span className="badge bg-warning text-dark fw-bold px-4 py-2">2/4</span>
//                   </div>
//                   <span className="badge bg-success w-100 text-center py-3 fs-6 fw-bold">Join Team</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="py-5 bg-opacity-90" style={{backgroundColor: "#101113"}}>
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold fs-1 mb-3">Popular Categories</h2>
//             <p className="text-light fs-5 col-lg-6 mx-auto">
//               Find projects that match your skills
//             </p>
//           </div>
//           <div className="row g-4">
//             {[
//               {name: 'React Projects', count: '25', icon: '⚛️'},
//               {name: 'Fullstack MERN', count: '18', icon: '🔗'},
//               {name: 'Backend APIs', count: '12', icon: '⚙️'},
//               {name: 'UI/UX Design', count: '9', icon: '🎨'},
//               {name: 'Hackathons', count: '15', icon: '⚡'},
//               {name: 'Beginner', count: '32', icon: '🌱'}
//             ].map((cat, i) => (
//               <div key={i} className="col-md-4 col-lg-2">
//                 <Link to="/projects" className="text-decoration-none">
//                   <div className="card border-0 bg-dark bg-opacity-60 hover-bg-opacity-80 rounded-4 p-4 h-100 border-info border-opacity-30 transition-all text-center">
//                     <div className="fs-1 mb-3">{cat.icon}</div>
//                     <h5 className="fw-bold text-white mb-2">{cat.name}</h5>
//                     <div className="h6 text-info fw-bold">{cat.count}</div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-5 " style={{backgroundColor: "#101113"}}>
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold fs-1 mb-3">How It Works</h2>
//             <p className="text-light fs-5 col-lg-8 mx-auto">
//               4 simple steps from student to developer
//             </p>
//           </div>

//           <div className="row g-4 justify-content-center">
//             {[
//               {step: '1', title: 'Browse', desc: 'Find projects by your skills', icon: '🔍'},
//               {step: '2', title: 'Apply', desc: 'Request to join teams', icon: '📝'},
//               {step: '3', title: 'Collaborate', desc: 'Chat & build together', icon: '💬'},
//               {step: '4', title: 'Ship', desc: 'Deploy & showcase', icon: '🚀'}
//             ].map((s, i) => (
//               <div key={i} className="col-lg-3 col-md-6 text-center">
//                 <div className="p-4 rounded-4 bg-dark bg-opacity-60 border border-light border-opacity-20 hover-border-info transition-all">
//                   <div className="fs-2 mb-3">{s.icon}</div>
//                   <div className="h4 fw-bold text-white mb-2">{s.step}</div>
//                   <h5 className="fw-bold mb-3">{s.title}</h5>
//                   <p className="text-light mb-0">{s.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LATEST PROJECTS */}
//       <section className="py-5 bg-opacity-90" style={{backgroundColor: "#101113"}}>
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold fs-1 mb-4">Latest Projects</h2>
//             <p className="text-light fs-5 col-lg-6 mx-auto">
//               Join active teams building right now
//             </p>
//           </div>

//           <div className="row g-4">
//             {[
//               {title: 'Weather Dashboard', tech: ['React', 'API'], team: '1/3', status: 'OPEN', level: 'Beginner'},
//               {title: 'Blog Platform', tech: ['Next.js', 'Tailwind'], team: '0/4', status: 'OPEN', level: 'Intermediate'},
//               {title: 'Chat App', tech: ['Socket.io', 'React'], team: '3/3', status: 'FULL', level: 'Advanced'},
//               {title: 'Todo App', tech: ['Vue', 'Firebase'], team: '1/2', status: 'OPEN', level: 'Beginner'},
//               {title: 'E-commerce', tech: ['MERN'], team: '2/5', status: 'OPEN', level: 'Intermediate'},
//               {title: 'Portfolio', tech: ['React', 'Framer'], team: '0/2', status: 'OPEN', level: 'Beginner'}
//             ].map((proj, i) => (
//               <div key={i} className="col-lg-4 col-md-6">
//                 <div className="card border-0 bg-dark bg-opacity-70 rounded-3 p-4 h-100 hover-shadow-lg transition-all border border-light border-opacity-10">
//                   <h5 className="fw-bold text-white mb-3">{proj.title}</h5>
//                   <div className="d-flex gap-2 mb-3 flex-wrap">
//                     {proj.tech.map((t, j) => (
//                       <span key={j} className="badge bg-info bg-opacity-50 px-3 py-1 small">{t}</span>
//                     ))}
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <span className="badge bg-secondary px-3 py-2">{proj.level}</span>
//                     <span className="badge bg-warning text-dark fw-bold px-4 py-2">
//                       {proj.team}
//                     </span>
//                   </div>
//                   <span className={`badge w-100 py-3 fs-6 fw-bold ${
//                     proj.status === 'FULL' ? 'bg-danger' : 'bg-success'
//                   }`}>
//                     {proj.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-5">
//             <Link to="/projects" className="btn btn-info btn-lg px-6 py-3 fw-bold fs-5">
//               View All Projects →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* NEW SECTION - STUDENT SUCCESS */}
//       <section className="py-5 " style={{backgroundColor: "#101113"}}>
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold fs-1 mb-4">Student Success Stories</h2>
//             <p className="text-light fs-5 col-lg-8 mx-auto">
//               See what students built and where they are now
//             </p>
//           </div>

//           <div className="row g-4 mb-5">
//             {[
//               {name: 'Rahul K.', college: 'IPS College', project: 'E-commerce Site', result: 'Got internship @ local startup'},
//               {name: 'Priya S.', college: 'Jaipur Univ', project: 'Task Manager', result: 'Added to portfolio + interviews'},
//               {name: 'Amit R.', college: 'BCA Student', project: 'Weather App', result: 'First deployed project!'}
//             ].map((story, i) => (
//               <div key={i} className="col-lg-4">
//                 <div className="card border-0 bg-opacity-60 rounded-4 p-4 h-100 border-info border-opacity-20" style={{backgroundColor: "#101113"}}>
//                   <div className="fs-1 mb-3">⭐</div>
//                   <h5 className="fw-bold text-white mb-3">{story.name}</h5>
//                   <div className="mb-3">
//                     <small className="text-light d-block mb-1">{story.college}</small>
//                     <span className="badge bg-success bg-opacity-50 px-3 py-1">{story.project}</span>
//                   </div>
//                   <p className="text-light mb-0 fs-6">{story.result}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link to="/success-stories" className="btn btn-outline-info btn-lg px-6 py-3 fw-bold fs-5">
//               See More Success →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-5 bg-opacity-90 text-center" style={{backgroundColor: "#101113"}}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <h2 className="display-4 fw-bold mb-4">Ready to Build?</h2>
//               <p className="fs-4 text-light mb-5 col-lg-8 mx-auto">
//                 Join 245+ students building real projects. Start your journey today.
//               </p>
//               <div className="d-md-flex justify-content-center gap-4">
//                 <Link to="/projects" className="btn btn-info btn-lg px-6 py-4 fw-bold fs-4 mb-3 mb-md-0">
//                   Start Building Now
//                 </Link>
//                 <Link to="/about" className="btn btn-outline-info btn-lg px-6 py-4 fw-bold fs-4">
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
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
    <div
      className="text-white min-vh-100"
      style={{ backgroundColor: "#101113" }}
    >
      <Navbar />

      <section className="py-5 border-bottom border-info border-opacity-10">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-3 fw-bold mb-4 tracking-tight">
                Build <span className="text-info">Production</span> Grade <br />
                Projects With Teams.
              </h1>
              <p
                className="fs-5 text-secondary mb-5 col-lg-10"
                style={{ lineHeight: "1.6" }}
              >
                The professional collaboration platform for CS students. Find
                partners, manage tech stacks, and ship real-world applications
                for your portfolio.
              </p>
              <div className="d-flex gap-3">
                <Link
                  to="/projects"
                  className="btn btn-info btn-lg px-5 py-3 fw-bold rounded-1"
                >
                  Browse Marketplace
                </Link>
                <Link
                  to="/create-project"
                  className="btn btn-outline-info btn-lg px-5 py-3 fw-bold rounded-1"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              
              <div className="p-4 border border-info border-opacity-25 rounded-3 bg-dark bg-opacity-50">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-info fw-bold small tracking-widest">
                    CURRENTLY TRENDING
                  </span>
                  <div className="d-flex gap-1">
                    <div
                      className="bg-info rounded-circle"
                      style={{ width: 8, height: 8 }}
                    ></div>
                    <div
                      className="bg-info opacity-50 rounded-circle"
                      style={{ width: 8, height: 8 }}
                    ></div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                    <span>MERN Stack</span>
                    <span className="text-info">24 Projects</span>
                  </div>
                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 pb-2">
                    <span>Next.js + Prisma</span>
                    <span className="text-info">18 Projects</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>AI / ML Integration</span>
                    <span className="text-info">12 Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-4 bg-dark bg-opacity-25 border-bottom border-info border-opacity-10">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-4">
              <div className="h3 fw-bold mb-0">89+</div>
              <div className="small text-info text-uppercase fw-bold">
                Live Apps
              </div>
            </div>
            <div className="col-4 border-start border-end border-info border-opacity-10">
              <div className="h3 fw-bold mb-0">245+</div>
              <div className="small text-info text-uppercase fw-bold">
                Students
              </div>
            </div>
            <div className="col-4">
              <div className="h3 fw-bold mb-0">42+</div>
              <div className="small text-info text-uppercase fw-bold">
                Active Teams
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5">
        <div className="container py-4">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="fw-bold">
                Platform <span className="text-info">Capabilities</span>
              </h2>
              <p className="text-secondary">
                Everything you need to go from student to engineer.
              </p>
            </div>
          </div>
          <div className="row g-4 text-start">
            {[
              {
                title: "Team Matching",
                desc: "Our algorithm finds members based on skill compatibility and tech stack needs.",
                icon: "👥",
              },
              {
                title: "Portfolio Ready",
                desc: "Every project is structured to look professional on your Resume and LinkedIn.",
                icon: "💼",
              },
              {
                title: "Tech Verified",
                desc: "Focus on modern stacks like React, Node.js, and Cloud Infrastructure.",
                icon: "✅",
              },
            ].map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="h-100 p-4 border border-info border-opacity-10 rounded-2 hover-border-info transition-all">
                  <div className="fs-3 mb-3">{f.icon}</div>
                  <h5 className="fw-bold mb-3">{f.title}</h5>
                  <p className="text-secondary small mb-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-5 bg-dark bg-opacity-25">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="fw-bold mb-0">
              Active <span className="text-info">Sprints</span>
            </h2>
            <Link
              to="/projects"
              className="text-info text-decoration-none fw-bold small"
            >
              VIEW ALL PROJECTS →
            </Link>
          </div>
          <div className="row g-4">
            {[
              {
                title: "E-Commerce Engine",
                stack: "MERN",
                level: "Intermediate",
                spots: "2/4",
              },
              {
                title: "Task Manager Pro",
                stack: "Next.js",
                level: "Beginner",
                spots: "1/3",
              },
              {
                title: "Crypto Tracker",
                stack: "React + Tailwind",
                level: "Advanced",
                spots: "3/3",
              },
            ].map((p, i) => (
              <div key={i} className="col-lg-4">
                <div className="p-4 border border-info border-opacity-10 rounded-1 bg-dark">
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <h5 className="fw-bold mb-0">{p.title}</h5>
                    <span className="badge border border-info text-info rounded-0 px-2 py-1 small">
                      {p.level}
                    </span>
                  </div>
                  <div className="mb-4 small">
                    <span className="text-secondary">Stack:</span>{" "}
                    <span className="text-white ms-2">{p.stack}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="small fw-bold">
                      Team: <span className="text-info">{p.spots}</span>
                    </div>
                    <button className="btn btn-sm btn-info rounded-0 px-3 fw-bold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-5 text-center">
        <div className="container py-5 border-top border-info border-opacity-10">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Build Something <span className="text-info">Real?</span>
          </h2>
          <p className="text-secondary mb-5 col-lg-6 mx-auto">
            Join the community of developers building the next generation of web
            applications.
          </p>
          <Link
            to="/projects"
            className="btn btn-info btn-lg px-5 py-3 fw-bold rounded-1"
          >
            Join Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
