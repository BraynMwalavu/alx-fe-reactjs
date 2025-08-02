import axios from "axios";

// Fetch a specific user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced API integration - Search users by location and minimum repos
export const searchGitHubUsers = async ({ location = "", minRepos = 0 }) => {
  const query = `location:${location} repos:>${minRepos}`;
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Returns array of matching users
  } catch (error) {
    throw new Error("Failed to search GitHub users");
  }
};
