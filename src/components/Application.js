import React, { useState } from "react";
import DayList from "components/DayList"
import "components/Application.scss";
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "4pm",
    interview: {
      student: "Anisa Mohamed",
      interviewer: {
        id: 1,
        name: "Heidi Klum",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Another Student",
      interviewer: {
        id: 1,
        name: "Another Mentor",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  ,
  {
    id: 5,
    time: "7pm",
    interview: {
      student: "Heidi Klum",
      interviewer: {
        id: 1,
        name: "Seal",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  }
];
export default function Application(props) {
  const [day, setDay] = useState('Monday');

  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList days={days} day={day} setDay={setDay} />


</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
      
    </main>
    
  );
}
