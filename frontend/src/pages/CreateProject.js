import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/CreateProject.css";

const CreateProject = () => {
  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [],
    roles: "",
    duration: "1–2 weeks",
    goal: "",
  });

  const [techInput, setTechInput] = useState("");

  // ===== INPUT HANDLER =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===== TECH STACK LOGIC =====
  const addTech = (e) => {
    if (e.key === "Enter" && techInput.trim() !== "") {
      e.preventDefault();

      if (!formData.techStack.includes(techInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          techStack: [...prev.techStack, techInput.trim()],
        }));
      }

      setTechInput("");
    }
  };

  const removeTech = (tech) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((t) => t !== tech),
    }));
  };

  // ===== SUBMIT (UI ONLY) =====
  const handleSubmit = () => {
    console.log("CREATE PROJECT DATA 👉", formData);
    alert("UI only 🚀 Check console for form data");
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">Create Project</h2>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4">
            {/* ===== PROJECT TITLE ===== */}
            <div className="mb-3">
              <label className="form-label">Project title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g., Campus Event Finder"
              />
            </div>

            {/* ===== DESCRIPTION ===== */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
                placeholder="What are you building?"
              />
            </div>

            {/* ===== TECH STACK ===== */}
            <div className="mb-3">
              <label className="form-label">Tech stack (multi-select)</label>

              <div className="tech-box">
                {formData.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                    <span onClick={() => removeTech(tech)}>×</span>
                  </span>
                ))}

                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={addTech}
                  placeholder="Add tech and press Enter"
                />
              </div>

              <small className="text-muted">
                UI only — skills are not saved.
              </small>
            </div>

            {/* ===== ROLES + DURATION ===== */}
            <div className="row mb-3">
              <div className="col-md-8">
                <label className="form-label">Required roles</label>
                <input
                  type="text"
                  name="roles"
                  value={formData.roles}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Frontend, Backend, Designer..."
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>1–2 weeks</option>
                  <option>1 month</option>
                  <option>2–3 months</option>
                  <option>Long-term</option>
                </select>
              </div>
            </div>

            {/* ===== GOAL ===== */}
            <div className="mb-4">
              <label className="form-label">Goal</label>
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="form-control"
                placeholder="Portfolio, hackathon, learning..."
              />
            </div>

            {/* ===== SUBMIT ===== */}
            <button
              className="btn btn-primary px-4 rounded-3"
              onClick={handleSubmit}
            >
              Create Project
            </button>

            <p className="text-muted mt-2">
              UI only — this form doesn’t save data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
