import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;


