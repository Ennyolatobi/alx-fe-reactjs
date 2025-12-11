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

// NEW: ADVANCED USER SEARCH
export async function searchUsers({ username, location, minRepos, page = 1 }) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(
      `${BASE_URL}/search/users`,
      {
        params: {
          q: query.trim(),
          per_page: 10,
          page,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
