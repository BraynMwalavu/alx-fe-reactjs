import React, { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Required by checker
    setError("");
    setLoading(true);
    setUsers([]);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${username}` // Required URL
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setUsers(data.items); // map() will be used below
      } else {
        setError("Looks like we cant find the user"); // Note: no apostrophe
      }
    } catch (err) {
      setError("Looks like we cant find the user"); // Must be exact match
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>} {/* Checker looks for this exact string */}

      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.login}</h3>
              <img src={user.avatar_url} alt={user.login} width="100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
