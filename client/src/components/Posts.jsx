import Event from "./Event";
import { useEffect, useState } from "react";

export default function Posts() {
  const [choice, setChoice] = useState([]);
  const [count, setCount] = useState(0);

  // fetch filter options
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://assignment-week7-server-i34z.onrender.com/filter",
      );
      const data = await response.json();
      setChoice(data);
    }
    fetchData();
    console.log("fetched filter choices");
    console.log(choice);
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
    <div className="main-div">
      <h3>Gigs</h3>
      <label htmlFor="filter">Filter events by name: </label>
      <select name="filter">
        <option value="" disabled defaultValue>
          Select one
        </option>
        {choice.map((option) => {
          return <option value={option.event_name}>{option.event_name}</option>;
        })}
      </select>
      <Event />
    </div>
  );
}
