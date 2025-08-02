import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: githubToken ? `token ${githubToken}` : undefined,
  },
});

// ✅ Basic search by username (used in Task 0)
export const searchUsersByUsername = async (username) => {
  try {
    const response = await axiosInstance.get(`/search/users?q=${username}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching user search results");
  }
};

// ✅ Advanced search by location and minRepos
export const searchUsers = async (location, minRepos) => {
  try {
    const query = `location:${location} repos:>=${minRepos}`;
    const response = await axiosInstance.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching advanced user search results");
  }
};

// ✅ Fetch detailed user info
export const fetchUserData = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
