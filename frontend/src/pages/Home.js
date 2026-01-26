import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">

          
            <div className="col-lg-6">

             
              <span className="badge rounded-pill bg-light text-dark px-3 py-2 mb-3">
                Dev Collab
              </span>

              <h1 className="fw-bold display-4 mt-3">
                Find Teammates. Build Real <br /> Projects.
              </h1>

              <p className="text-muted fs-5 mt-3">
                A student-friendly platform to explore real-world projects,
                learn by building, and collaborate with junior developers.
              </p>

              
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary btn-lg px-4">
                  Explore Projects
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
                  Create Project
                </button>
              </div>

            
              <div className="d-flex gap-3 mt-4">
                <div className="border rounded p-3 small">
                  <strong>100+</strong><br />
                  <span className="text-muted">learning-ready projects</span>
                </div>
                <div className="border rounded p-3 small">
                  <strong>Beginner</strong><br />
                  <span className="text-muted">friendly teams</span>
                </div>
                <div className="border rounded p-3 small">
                  <strong>Real</strong><br />
                  <span className="text-muted">portfolio experience</span>
                </div>
              </div>
            </div>

         
            <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
              <div className="border rounded-4 p-4 shadow-sm" style={{ width: "380px" }}>

                <div className="d-flex justify-content-between mb-3">
                  <span className="badge bg-dark">Active</span>
                  <span className="badge bg-light text-dark">Indigo UI</span>
                </div>

                <h5 className="fw-bold">Build with a team in a weekend</h5>
                <p className="text-muted">
                  Browse projects, request to join, and chat with teammates.
                </p>

                <div className="d-flex gap-2 mb-3">
                  <span className="badge bg-light text-dark">React</span>
                  <span className="badge bg-light text-dark">Node</span>
                  <span className="badge bg-light text-dark">UI/UX</span>
                  <span className="badge bg-light text-dark">Git</span>
                </div>

                <button className="btn btn-primary w-100">
                  See what’s trending
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

       <section className="py-5 bg-white">
  <div className="container">
    <div className="row g-4">

     
      <div className="col-md-4">
        <div className="border rounded-4 p-4 h-100">
          <div
            className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
            style={{ width: "44px", height: "44px" }}
          >
            🤝
          </div>
          <h5 className="fw-bold">Find teammates</h5>
          <p className="text-muted mb-0">
            Match with builders who share your stack and goals.
          </p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="border rounded-4 p-4 h-100">
          <div
            className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
            style={{ width: "44px", height: "44px" }}
          >
            ✨
          </div>
          <h5 className="fw-bold">Real project experience</h5>
          <p className="text-muted mb-0">
            Build something shippable—perfect for your portfolio.
          </p>
        </div>
      </div>

      
      <div className="col-md-4">
        <div className="border rounded-4 p-4 h-100">
          <div
            className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-3"
            style={{ width: "44px", height: "44px" }}
          >
            🌱
          </div>
          <h5 className="fw-bold">Beginner friendly</h5>
          <p className="text-muted mb-0">
            Clear roles, simple scopes, and helpful community vibes.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">How DevCollab Works</h2>
      <p className="text-muted fs-5">
        No random groups. Match by skills, roles, and real project goals.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-md-3">
        <div className="border rounded-4 p-4 h-100 bg-white text-center">
          <div className="fs-1 mb-3">🧠</div>
          <h6 className="fw-bold">Choose Your Stack</h6>
          <p className="text-muted small mb-0">
            React, MERN, UI/UX, Backend — select what you want to work on.
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="border rounded-4 p-4 h-100 bg-white text-center">
          <div className="fs-1 mb-3">📌</div>
          <h6 className="fw-bold">Pick a Role</h6>
          <p className="text-muted small mb-0">
            Frontend, backend, full-stack or just learning & observing.
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="border rounded-4 p-4 h-100 bg-white text-center">
          <div className="fs-1 mb-3">🤝</div>
          <h6 className="fw-bold">Join or Create</h6>
          <p className="text-muted small mb-0">
            Send join requests or start your own project as a lead.
          </p>
        </div>
      </div>

      <div className="col-md-3">
        <div className="border rounded-4 p-4 h-100 bg-white text-center">
          <div className="fs-1 mb-3">🚀</div>
          <h6 className="fw-bold">Build & Ship</h6>
          <p className="text-muted small mb-0">
            Collaborate, chat, build fast — and ship real products.
          </p>
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

    