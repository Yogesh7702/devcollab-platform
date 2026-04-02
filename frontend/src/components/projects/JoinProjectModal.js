import React, { useState } from "react";

export function JoinProjectModal({ show, onClose, project }) {
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);

  const handleSendRequest = async () => {
    console.log("clicked");

    try {
      if (!role) {
        alert("Please select role");
        return;
      }

      if (!message) {
        alert("Please enter message");
        return;
      }

      const formData = new FormData();
      formData.append("role", role);
      formData.append("message", message);
      if (resume) {
        formData.append("resume", resume);
      }

      const res = await fetch(
        `http://localhost:8080/api/requests/${project._id}/join`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        },
      );

      const data = await res.json();
      console.log(data);

      alert("Request sent successfully!");
      onClose();
    } catch (error) {
      console.log(error);
      console.log(error.message);

      alert("Failed to send request.", error.message);
    }
  };

  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div className="bg-dark p-4 rounded shadow" style={{ width: "500px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-light fw-semibold">Join Project</h5>

          <button
            className="btn-close btn-close-white ms-auto"
            style={{ paddingRight: "30px" }}
            onClick={onClose}
          ></button>
        </div>

        <div className="mb-3 ">
          <label className="form-label text-light">Select Role</label>

          <select
            className="form-select bg-dark text-light border-secondary"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Choose Role</option>
            {project?.roles?.map((role, index) => (
              <option key={role._id} value={role._id || role.role}>
                {role.role} - ({role.count})
              </option>
            ))}
          </select>

          <div className="mb-3">
            <label className="form-label text-light">
              Why should we choose you?
            </label>

            <textarea
              className="form-control bg-dark text-light border-secondary"
              rows="4"
              placeholder="Explain your experience and why you want to join this project..."
              value={message}
              onChange={(e) => setMessage(e.target?.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Upload Resume</label>

            <input
              type="file"
              className="form-control bg-dark text-light border-secondary"
              accept=".pdf, .doc,.docx"
              onChange={(e) => setResume(e.target?.files[0])}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <button className="btn-btn-outline-light" onClick={onClose}>
            Cancel
          </button>

          <button className="btn btn-info" onClick={handleSendRequest}>
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
