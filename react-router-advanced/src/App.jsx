// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import User from "./components/User";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Home Page */}
        <Route path="/" element={<Home />} />

        {/* Protected Profile Page with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={true}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic User Route */}
        <Route path="/user/:username" element={<User />} />

        {/* Dynamic Blog Post Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
