import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/auth/authAction";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { user, isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/projects");
    }
  }, [user, navigate]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="card border-0 shadow-sm rounded-4"
        style={{ width: "450px" }}
      >
        <div className="card-body p-4">

          
          <div className="text-center mb-4">
            <span className="badge bg-light text-dark mb-2">
              DevCollab
            </span>
            <h4 className="fw-bold mt-2">Create your account</h4>
            <p className="text-muted small">
              Join projects. Build skills. Grow together.
            </p>
          </div>

         {error && <p className="text-danger">{error}</p>}

          <form onSubmit={handleSubmit}>
           
            <div className="mb-3">
              <label className="form-label small">Full name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            
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
                placeholder="Create a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="mb-3">
              <label className="form-label small">Confirm password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Repeat password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

           
            <button className="btn btn-primary w-100" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Sign Up"}
        </button>

          </form>

         
          <div className="text-center mt-4">
            <span className="text-muted small">
              Already have an account?
            </span>{" "}
            <Link to="/login" className="fw-semibold">
              Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
