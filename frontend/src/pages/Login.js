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
      navigate("/Projects"); 
    }
  }, [user, navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="card border-0 shadow-sm rounded-4"
        style={{ width: "420px" }}
      >
        <div className="card-body p-4">

        
          <div className="text-center mb-4">
            <span className="badge bg-light text-dark mb-2">
              DevCollab
            </span>
            <h4 className="fw-bold mt-2">Welcome back</h4>
            <p className="text-muted small">
              Login to continue building with your team
            </p>
          </div>

        
          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}

       
          <form onSubmit={handleSubmit}>
           
            <div className="mb-3">
              <label className="form-label small">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label small">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="••••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

         
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100 mt-2"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

     
          <div className="text-center mt-4">
            <span className="text-muted small">
              Don’t have an account?
            </span>{" "}
            <Link to="/signup" className="fw-semibold">
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
