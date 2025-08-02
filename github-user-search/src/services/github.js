import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
};
