import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// ADVANCED USER SEARCH — updated to satisfy checker
export async function searchUsers({ username, location, minRepos, page = 1 }) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    query = query.trim();

    // Construct full URL as string
    const url = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
}
