import React, { useState } from "react";
import { fetchAdvancedUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUsers([]);
    setLoading(true);

    try {
      const basicUsers = await fetchAdvancedUsers(username, location, minRepos);

      // Fetch detailed data for each user
      const detailedUsers = await Promise.all(
        basicUsers.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );

      if (detailedUsers.length > 0) {
        setUsers(detailedUsers);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.login}</h3>
              <img src={user.avatar_url} alt={user.login} width="100" />
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </p>
              {/* ✅ Enhanced info from fetchUserData */}
              <p>Bio: {user.bio || "No bio available"}</p>
              <p>Followers: {user.followers}</p>
              <p>Public Repos: {user.public_repos}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
