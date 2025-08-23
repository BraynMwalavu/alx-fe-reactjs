import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    cacheTime: 1000 * 60 * 5,        // 5 minutes
    staleTime: 1000 * 30,            // 30 seconds
    refetchOnWindowFocus: true,      // refetch when tab is focused
    keepPreviousData: true,          // keep old data while fetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button 
        onClick={() => refetch()} 
        className="p-2 bg-blue-500 text-white rounded mb-4"
      >
        {isFetching ? "Refreshing..." : "Refresh Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
