import { useState, useEffect } from "react";
import Attendees from "./Attendees";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/going"
      );
      const data = await response.json();
      setPosts(data);
      console.log(`posts data: ${data}`);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>Gigs</h3>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <p>{post.event_name}</p>
              <p>{post.event_date}</p>
              <p>{post.event_location}</p>
            </div>
          );
        })}
      </div>
      <Attendees />
    </div>
  );
}
