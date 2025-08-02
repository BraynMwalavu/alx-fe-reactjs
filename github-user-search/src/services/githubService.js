import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: githubToken ? `token ${githubToken}` : undefined,
  },
});

// Fetch detailed user info
export const fetchUserData = async (username) => {
  try {
    const response = await axiosInstance.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search by location and min repos
export const searchUsers = async (location, minRepos) => {
  try {
    const query = `location:${location} repos:>=${minRepos}`;
    const response = await axiosInstance.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching user search results");
  }
};
