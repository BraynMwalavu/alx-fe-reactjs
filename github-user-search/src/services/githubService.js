import axios from "axios";

// Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch user data");
  }
};

// Advanced search for multiple users
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  const query = [
    username && `${username} in:login`,
    location && `location:${location}`,
    minRepos && `repos:>=${minRepos}`
  ]
    .filter(Boolean)
    .join(" ");

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );
    return response.data.items || [];
  } catch (error) {
    throw new Error("Unable to fetch search results");
  }
};
