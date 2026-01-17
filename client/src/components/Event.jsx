import { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router";
import Attendees from "./Attendees";

// const AttendeesContext = createContext();
// useContext, createContext,

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
      // console.log(`posts data: ${data}`);
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
    <div>
      <div>
        {posts.map((post, i) => {
          return (
            <div key={`event_key${i}`}>
              <p>{post.event_name}</p>
              <p>{post.event_date}</p>
              <p>{post.event_location}</p>
              {/* <Routes>
                <Route path={`/event/:${i}`} element={<Attendees />} />
              </Routes>
              <Link to={`/event/:${i}`}>See who's going</Link>
              <Outlet /> */}

              <div>
                <p>Who's going?</p>
                {attendees.map((attendee, i) => {
                  console.log(attendee.event_id);
                  return (
                    attendee.event_id == posts[i].id ? (
                      <Attendees key={`attendee${i}`}>
                        <p>{attendee.person}</p>
                      </Attendees>
                    ) : null,
                    console.log("null")
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
