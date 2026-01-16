import { useState } from "react";

export default function Form() {
  //we set useSate as an object to act as an empty template for the form values
  const [formValues, setFormValues] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form values are: ", formValues);
    // add functionality here to send data to a server, fetch the post route and declare the headers (body, where the body value is your state)

    fetch("https://assignment-week7-server-7mub.onrender.com/new-post", {
      method: "POST",
      headers: {
        eventName: "",
        eventDate: "",
        eventLocation: "",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  function handleInputChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h3>Post a gig</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="event_name">Band/event name</label>
        <input
          type="text"
          id="event_name"
          name="event_name"
          value={formValues.event_name}
          onChange={handleInputChange}
        />

        <label htmlFor="event_date">Date</label>
        <input
          type="date"
          id="event_date"
          name="event_date"
          value={formValues.event_date}
          onChange={handleInputChange}
        />

        <label htmlFor="event_location">Location</label>
        <input
          type="text"
          id="event_location"
          name="event_location"
          value={formValues.event_location}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
