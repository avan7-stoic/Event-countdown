// components/EventForm.js
import React, { useState } from "react";

function EventForm({ onSetEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate) {
      onSetEvent({ name: eventName, date: new Date(eventDate) });
      setEventName("");
      setEventDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />
      <button type="submit">Start Countdown</button>
    </form>
  );
}

export default EventForm;
