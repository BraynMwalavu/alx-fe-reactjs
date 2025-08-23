// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // updated from postId → id

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog Post {id}</h1>
      <p className="mt-4 text-gray-700">
        This is the content for blog post with ID: {id}.
      </p>
    </div>
  );
}

export default BlogPost;
