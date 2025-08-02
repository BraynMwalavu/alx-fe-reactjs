import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const result = await fetchUserData(query);
      setUser(result);
    } catch (err) {
      console.error("API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {error && (
        <p className="text-center text-red-600">
          Looks like we can't find the user
        </p>
      )}

      {user && !error && (
        <div className="mt-6 max-w-md mx-auto bg-white p-4 rounded shadow hover:shadow-md flex items-center gap-4">
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
      )}
    </div>
  );
}

export default App;
