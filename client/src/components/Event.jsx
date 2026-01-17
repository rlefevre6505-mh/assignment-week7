import { useState, useEffect } from "react";

export default function Event() {
  const [posts, setPosts] = useState([]);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/going",
      );
      const data = await response.json();
      setAttendees(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {posts.map((post, i) => {
        const yearString = post.event_date.toString().slice(0, 4);
        const monthString = post.event_date.toString().slice(5, 7);
        const dayString = post.event_date.toString().slice(8, 10);
        const dateString = `${dayString} - ${monthString} - ${yearString}`;
        console.log(dayString, monthString, yearString);
        return (
          <>
            <h3>Gigs</h3>
            <div className="event-container" key={`event_key${i}`}>
              <p>{post.event_name}</p>
              <p>{dateString}</p>
              <p>{post.event_location}</p>
              <div>
                <p>Who's going?</p>
                <div className="attendees-container">
                  {attendees.map((attendee, index) => {
                    if (attendee.event_id == post.id) {
                      return (
                        <p key={`${attendee.id}goingto${index}`}>
                          {attendee.person}
                        </p>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
