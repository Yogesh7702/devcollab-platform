// import { Link } from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import { useNavigate }  from "react-router-dom";
// import {logout} from "../redux/auth/authSlice";

//  const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {user} = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//   };
 

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
//       <div className="container-fluid">

//         {/* Brand */}
//         <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
//           DevCollab
//         </Link>

     
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#devcollabNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

       
//         <div className="collapse navbar-collapse" id="devcollabNavbar">
//           <ul className="navbar-nav ms-auto align-items-center gap-3">

//             <li className="nav-item">
//               <Link className="nav-link fw-semibold" to="/projects">
//                 Projects
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="btn btn-outline-primary px-3" to="/create-project">
//                 Create Project
//               </Link>
//             </li>
 
//            {!user ? (

//             <>

//             <li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li>

//              <li className="nav-item">
//                   <Link className="btn btn-primary px-3" to="/signup">
//                     Sign Up
//                   </Link>
//                   </li>

//             </>
//            ) : (
//              <li className="nav-item">
//                 <button onClick={handleLogout} className="btn btn-danger">
//                   Logout
//                 </button>
//               </li>
//            )}


//           </ul>
//         </div>
//       </div>
//     </nav>
//   );

// }

// export default Navbar;



import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg border-bottom border-secondary border-opacity-25 px-4 py-2">
      <div className="container-fluid">
        
        {/* BRAND - Glowing Effect */}
        <Link className="navbar-brand fw-bold fs-3 text-info shadow-sm" to="/">
          <span className="text-white">Dev</span><span className="text-info">Collab</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0 bg-dark bg-opacity-75 rounded-2 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#devcollabNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE */}
        <div className="collapse navbar-collapse mt-2 mt-lg-0" id="devcollabNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4">
            
            {/* PROJECTS */}
            <li className="nav-item">
              <Link 
                className="nav-link fw-semibold text-light px-3 py-2 rounded-pill hover-bg-dark transition-all" 
                to="/projects"
                style={{ transition: 'all 0.3s ease' }}
              >
                📁 Projects
              </Link>
            </li>

            {/* CREATE PROJECT */}
            <li className="nav-item">
              <Link 
                className="btn btn-outline-info btn-sm px-4 py-2 fw-semibold rounded-pill border-2 shadow-sm" 
                to="/create-project"
              >
                ➕ Create Project
              </Link>
            </li>

            {/* AUTH SECTION */}
            {!user ? (
              <>
                {/* LOGIN */}
                <li className="nav-item">
                  <Link 
                    className="nav-link text-light-emphasis px-3 py-2 rounded-2 fw-medium" 
                    to="/login"
                  >
                    👤 Login
                  </Link>
                </li>

                {/* SIGNUP */}
                <li className="nav-item">
                  <Link 
                    className="btn btn-info text-dark fw-semibold px-4 py-2 rounded-pill shadow-sm" 
                    to="/signup"
                  >
                    🚀 Sign Up
                  </Link>
                </li>
              </>
            ) : (
              /* LOGOUT */
              <li className="nav-item dropdown">
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline-danger btn-sm px-4 py-2 fw-semibold rounded-pill border-2 shadow-sm hover-bg-danger transition-all"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  🚪 Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
