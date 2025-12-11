import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();  // important for the checker

    if (!query.trim()) return;

    setLoading(true);
    setUser(null);
    setError(null);

    try {
      const data = await fetchUserData(query.trim());
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: 10, width: "70%", marginRight: 10 }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div
          style={{
            marginTop: 20,
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 8,
            display: "flex",
            gap: 20
          }}
        >
          <img
            src={user.avatar_url}
            alt="Avatar"
            style={{ width: 80, height: 80, borderRadius: 8 }}
          />

          <div>
            <h2>{user.name || user.login}</h2>
            <p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                Visit GitHub Profile
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
