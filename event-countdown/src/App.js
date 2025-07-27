// App.js
import React, { useState } from "react";
import EventForm from "./components/EventForm";
import CountdownTimer from "./components/CountdownTimer";
import "./App.css";

function App() {
  const [event, setEvent] = useState(null);

  return (
    <div className="App">
      <h1>🎉 Event Countdown Timer</h1>
      {!event && <EventForm onSetEvent={setEvent} />}
      {event && <CountdownTimer event={event} />}
    </div>
  );
}

export default App;
