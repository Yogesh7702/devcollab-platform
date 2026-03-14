




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/projects"); 
    }
  }, [user, navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#101113" }}>
      <div className="card border-0 rounded-4 overflow-hidden shadow-lg" style={{ width: "400px", backgroundColor: "#16171a", border: "1px solid rgba(13, 202, 240, 0.1)" }}>
        
        {/* Top Accent Line - Branding Consistency */}
        <div style={{ height: "4px", backgroundColor: "#0dcaf0" }}></div>

        <div className="card-body p-5">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white mb-2">Welcome <span className="text-info">Back</span></h2>
            <p className="text-secondary small">Enter your credentials to access your team</p>
          </div>

          {/* Error Feedback */}
          {error && (
            <div className="alert alert-danger bg-danger bg-opacity-10 border-danger border-opacity-25 text-danger small py-2 text-center mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
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

            {/* Password Field */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="text-info small fw-bold d-block text-uppercase tracking-wider m-0" style={{ fontSize: '11px' }}>Password</label>
                <Link to="/forgot-password" size="small" className="text-secondary text-decoration-none" style={{ fontSize: '11px' }}>Forgot?</Link>
              </div>
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

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-info w-100 py-2 fw-bold text-dark mt-2 shadow-sm transition-all rounded-3"
              disabled={isLoading}
              style={{ letterSpacing: '0.5px' }}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Authenticating...
                </>
              ) : "Login to Dashboard"}
            </button>
          </form>

          {/* Redirect to Signup */}
          <div className="text-center mt-5">
            <p className="text-secondary small">
              New to DevCollab?{" "}
              <Link to="/signup" className="text-info text-decoration-none fw-bold ms-1">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;