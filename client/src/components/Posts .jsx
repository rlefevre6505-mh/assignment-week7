import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/posts"
      );
      const data = await response.json();
      setPosts(data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>Gigs</h3>

      {posts.map}
    </div>
  );
}
