import { useState, useEffect } from "react";

export default function Event() {
  const [posts, setPosts] = useState([]);
  const [attendees, setAttendees] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/going"
      );
      const data = await response.json();
      setAttendees(data);
      console.log(`attendees data: ${data}`);
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
        <p>Who's going:</p>
        {attendees.map((attendee) => {
          return <p>{attendee.person}</p>;
        })}
      </div>
      {console.log(attendees)}
    </div>
  );
}
