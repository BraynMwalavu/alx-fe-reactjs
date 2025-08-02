import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchUsers } from "./services/github";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        GitHub User Search
      </h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow hover:shadow-md"
          >
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
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
        ))}
      </div>
    </div>
  );
}

export default App;
