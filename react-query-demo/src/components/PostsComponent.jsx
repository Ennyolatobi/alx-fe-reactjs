// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // cache data for 5 minutes
    staleTime: 1000 * 60,     // consider data fresh for 1 minute
    refetchOnWindowFocus: false, // don't refetch when tab gains focus
    keepPreviousData: true,       // keep previous data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.id}. </strong>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
