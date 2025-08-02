import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // this returns an array of users
  } catch (error) {
    throw error;
  }
};
