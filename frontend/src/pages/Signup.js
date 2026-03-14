import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/authAction";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { user, isLoading, isError, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const { name, email, password } = formData;

  dispatch(
    registerUser({
      name,
      email,
      password
    })
  );
};
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#101113" }}>
      <div className="card border-0 rounded-4 overflow-hidden shadow-lg" style={{ width: "420px", backgroundColor: "#16171a", border: "1px solid rgba(13, 202, 240, 0.1)" }}>
        
        {/* Top Accent Line */}
        <div style={{ height: "4px", backgroundColor: "#0dcaf0" }}></div>

        <div className="card-body p-5">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white mb-2">Join <span className="text-info">DevCollab</span></h2>
            <p className="text-secondary small">Create an account to start collaborating</p>
          </div>

          {/* Error Message */}
          {isError && !isLoading && !user && (
            <div className="alert alert-danger bg-danger bg-opacity-10 border-danger border-opacity-25 text-danger small py-2 text-center">
              {isError}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="text-info small fw-bold mb-2 d-block text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Full Name</label>
              <input
                type="text"
                className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3"
                style={{ borderRadius: '8px' }}
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="text-info small fw-bold mb-2 d-block text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Email Address</label>
              <input
                type="email"
                className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3"
                style={{ borderRadius: '8px' }}
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="text-info small fw-bold mb-2 d-block text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Password</label>
              <input
                type="password"
                className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3"
                style={{ borderRadius: '8px' }}
                placeholder="••••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="text-info small fw-bold mb-2 d-block text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Confirm Password</label>
              <input
                type="password"
                className="form-control bg-dark border-secondary border-opacity-25 text-white shadow-none py-2 px-3"
                style={{ borderRadius: '8px' }}
                placeholder="••••••••"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              className="btn btn-info w-100 py-2 fw-bold text-dark mt-2 shadow-sm transition-all rounded-3" 
              disabled={isLoading}
              style={{ letterSpacing: '0.5px' }}
            >
              {isLoading ? (
                <span className="spinner-border spinner-border-sm me-2"></span>
              ) : "Create Account"}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-5">
            <p className="text-secondary small">
              Already a member?{" "}
              <Link to="/login" className="text-info text-decoration-none fw-bold ms-1">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;