import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2>Blog Post #{id}</h2>
      <p>This is the blog post content for ID: {id}</p>
    </div>
  );
}
