import { useState, useEffect } from "react";

export default function Post(event_name, event_date, event_location) {
  const [posts, setPosts] = useState();
  const [attendees, setAttendees] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/posts"
      );
      const data = await response.json();
      setPosts(data.results);
      console.log(`posts data: ${data.results}`);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/going"
      );
      const data = await response.json();
      setAttendees(data.results);
      console.log(`attendees data: ${data.results}`);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {posts.map(() => {
          return (
            <div>
              <p>{event_name}</p>
              <p>{event_date}</p>
              <p>{event_location}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>Who's going:</p>
        {attendees.map((attendee) => {
          return <p>{attendee}</p>;
        })}
      </div>
    </div>
  );
}
