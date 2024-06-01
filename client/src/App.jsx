import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
