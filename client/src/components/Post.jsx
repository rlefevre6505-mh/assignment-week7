import Event from "./Event";
import Attendees from "./Attendees";
import { useState, useEffect } from "react";

export default function Post() {
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
      <div>
        {posts.map((post, i) => {
          return (
            <div id={i}>
              <p>{post.event_name}</p>
              <p>{post.event_date}</p>
              <p>{post.event_location}</p>
            </div>
          );
        })}
      </div>
      <div>
        {/* ROUTES - attendees with dynamic route goes here (fetch data above, loop
        through attendees, but filtered for each event), instea dof in event */}
      </div>
    </div>
  );
}

//   <Event />
//         <Attendees />
