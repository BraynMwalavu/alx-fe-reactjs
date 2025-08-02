import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const result = await fetchUserData(query);
      setUsers(result);
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

      {!loading && users.length > 0 && (
        <div className="mt-6 grid gap-4 max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded shadow hover:shadow-md flex items-center gap-4"
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

export default App;
