import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
        page: 1,
      });

      if (data.items.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(data.items);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  }

  async function handleLoadMore() {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await searchUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });

      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold">Advanced GitHub User Search</h2>

        <input
          className="w-full border rounded-md p-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border rounded-md p-2"
          type="text"
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full border rounded-md p-2"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* FEEDBACK */}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      {/* RESULTS */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 shadow-sm p-4 flex items-center gap-4 rounded-md"
          >
            <img
              src={user.avatar_url}
              className="w-16 h-16 rounded"
              alt="avatar"
            />
            <div>
              <p className="text-lg font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {results.length > 0 && !loading && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
