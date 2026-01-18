import { useState, useEffect } from "react";

export default function Event() {
  const [posts, setPosts] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [count, setCount] = useState(0);

  // fetch requests
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
    console.log("fetched events");
  }, [count]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/going",
      );
      const data = await response.json();
      setAttendees(data);
    }
    fetchData();
    console.log("fetched attendees");
  }, [count]);

  //database polling
  useEffect(() => {
    console.log("useTimer hook useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
      console.log(count);
    }, 5000);
    return () => {
      console.log("useTimer hook useEffect cleanup");
      clearInterval(interval);
    };
  });

  return (
    <>
      {posts.map((post, i) => {
        const yearString = post.event_date.toString().slice(0, 4);
        const monthString = post.event_date.toString().slice(5, 7);
        const dayString = post.event_date.toString().slice(8, 10);
        const dateString = `${dayString} - ${monthString} - ${yearString}`;
        return (
          <>
            <div className="event-container" key={`event_key${i}`}>
              <p className="event-name">{post.event_name}</p>
              <div className="event-details">
                <p className="event-date">{dateString}</p>
                <p className="event-location">{post.event_location}</p>
              </div>
              <div className="whos-going">
                <h4>Who's going?</h4>
                <div className="attendees-container">
                  {attendees.map((attendee, index) => {
                    if (attendee.event_id == post.id) {
                      return (
                        <p
                          className="attendee"
                          key={`${attendee.id}goingto${index}`}
                        >
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
