import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const queryParts = [];

      if (username) queryParts.push(`${username} in:login`);
      if (location) queryParts.push(`location:${location}`);
      if (minRepos) queryParts.push(`repos:>=${minRepos}`);

      const finalQuery = queryParts.join(" ");

      const response = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(finalQuery)}&per_page=10`
      );

      const data = await response.json();

      if (data.items) {
        setUsers(data.items);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4 bg-white p-6 rounded shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="flex-1 px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}

      {error && (
        <p className="mt-4 text-center text-red-600">
          Something went wrong or no users found.
        </p>
      )}

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center bg-white p-4 rounded shadow gap-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
