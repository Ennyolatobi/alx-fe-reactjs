import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // grabs the dynamic segment from URL
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Viewing blog post with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default BlogPost;
