import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Protected nested route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={true}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route */}
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
