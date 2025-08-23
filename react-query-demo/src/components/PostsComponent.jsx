import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,


    cacheTime: 1000 * 60 * 5,         
    staleTime: 1000 * 30,           
    refetchOnWindowFocus: true,   
    keepPreviousData: true,      
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
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
