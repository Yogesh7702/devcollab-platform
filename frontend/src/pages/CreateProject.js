import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/CreateProject.css";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../redux/projects/projectAction";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TECH_OPTIONS = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "Java",
    "Spring Boot",
    "Python",
  ];

  const ROLE_OPTIONS = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Designer",
    "DevOps",
  ];

  const GOAL_OPTIONS = [
    "Learning",
    "Portfolio",
    "Hackathon",
    "Startup",
    "Open Source",
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [],
    roles: "",
    duration: "1-2 weeks",
    goal: "",
    difficulty: "",
  });

  const [techSelect, setTechSelect] = useState("");

  const { isLoading } = useSelector((state) => state.projects);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechAdd = () => {
    if (techSelect && !formData.techStack.includes(techSelect)) {
      setFormData((prev) => ({
        ...prev,
        techStack: [...prev.techStack, techSelect],
      }));
    }
    setTechSelect("");
  };

  const removeTech = (tech) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      techStack: formData.techStack,
      difficulty: formData.difficulty,
      roles: formData.roles ? [formData.roles] : [],
      duration: formData.duration,
      goal: formData.goal,
      membersRequired: formData.roles ? 1 : 0,
    };

    console.log("FINAL FORM DATA 👉", finalData);

    dispatch(createProject(finalData))
      .unwrap()
      .then(() => navigate("/projects"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="container my-5">
          <h2 className="fw-bold mb-4">Create Project</h2>

          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label">Project title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Difficulty</label>
                <select
                  className="form-select"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select difficulty</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Tech stack</label>

                <div className="tech-box">
                  {formData?.techStack?.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                      <span onClick={() => removeTech(tech)}>×</span>
                    </span>
                  ))}
                  <select
                    value={techSelect}
                    onChange={(e) => setTechSelect(e.target.value)}
                    onBlur={handleTechAdd}
                  >
                    <option value="">Add tech</option>
                    {TECH_OPTIONS.map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-8">
                  <label className="form-label">Required roles</label>
                  <select
                    className="form-control"
                    name="roles"
                    value={formData.roles}
                    onChange={handleChange}
                  >
                    <option value="">Select role</option>
                    {ROLE_OPTIONS.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="1-2 weeks">1–2 weeks</option>
                    <option value="1 month">1 month</option>
                    <option value="2-3 months">2–3 months</option>
                    <option value="Long-term">Long-term</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Goal</label>
                <select
                  className="form-control"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select goal</option>
                  {GOAL_OPTIONS.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="btn btn-primary px-4 rounded-3"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create Project"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProject;
