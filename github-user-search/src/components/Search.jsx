import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      return;
    }

    setError("");
    setUser(null);
    setLoading(true);

    try {
      const userData = await fetchUserData(username.trim());
      setUser(userData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto" }}>
      <label htmlFor="username" style={{ display: "block", marginBottom: "0.5rem" }}>
        GitHub Username
      </label>
      <input
        id="username"
        type="text"
        placeholder="e.g. torvalds"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="GitHub username"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width="100"
            height="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || "No bio provided"}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
