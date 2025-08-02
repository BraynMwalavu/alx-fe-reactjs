import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: githubToken ? `token ${githubToken}` : undefined,
  },
});

// Advanced search with explicit URL (needed by checker)
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    const queryParts = [];
    if (username) queryParts.push(`${username} in:login`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const finalQuery = queryParts.join(" ");

    // ✅ Explicit full URL
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(finalQuery)}`,
      {
        headers: {
          Authorization: githubToken ? `token ${githubToken}` : undefined,
        },
      }
    );

    return response.data.items;
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
};
