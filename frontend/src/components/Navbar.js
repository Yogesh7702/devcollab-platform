import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate }  from "react-router-dom";
import {logout} from "../redux/auth/authSlice";

 const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          DevCollab
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#devcollabNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="devcollabNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-primary px-3" to="/create-project">
                Create Project
              </Link>
            </li>
 
           {!user ? (

            <>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

             <li className="nav-item">
                  <Link className="btn btn-primary px-3" to="/signup">
                    Sign Up
                  </Link>
                  </li>

            </>
           ) : (
             <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </li>
           )}


          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
