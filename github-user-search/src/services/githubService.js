export const fetchUserData = async (query) => {
  const response = await fetch(`https://api.github.com/search/users?q=${query}`);

  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.items; // Returns array of users
};
