// src/components/UserProfile.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  // Consume the context
  const userData = useContext(UserContext);

  return (
    <div 
      style={{
        border: "2px solid #0077cc",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "350px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "#0077cc", marginBottom: "10px" }}>
        {userData.name}
      </h2>
      <p style={{ fontSize: "16px", margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{userData.age}</span>
      </p>
      <p style={{ fontSize: "16px", margin: "5px 0" }}>
        Bio: {userData.bio}
      </p>
      <p style={{ fontSize: "16px", margin: "5px 0", color: "#555" }}>
        Email: {userData.email}
      </p>
    </div>
  );
}

export default UserProfile;
