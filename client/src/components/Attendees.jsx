import { useState, useEffect } from "react";

export default function Attendees() {
  const [attendees, setAttendees] = useState([]);

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

  // const event_num = 1;

  return (
    <div>
      <p>Who's going:</p>
      {attendees.map((attendee) => {
        return <p>{attendee.person}</p>;
      })}
    </div>
  );
}
