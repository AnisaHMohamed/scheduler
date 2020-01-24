import React, { useState, useEffect } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import axios from "axios"
import Appointment from "components/Appointment/index";

const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
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
        avatar: "https://i.imgur.com/LpaY82x.png"
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
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 5,
    time: "7pm",
    interview: {
      student: "Heidi Klum",
      interviewer: {
        id: 1,
        name: "Seal",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  }
];



export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([])
  
  useEffect(() => {
    axios.get(`/api/days`).then((daysData) => {
      console.log("find me here", daysData)
      setDays(daysData.data) 
    })
  },[])
  
  const appointmentList = appointments.map(appointment => {
    return <Appointment key={appointment.id} {...appointment} />;
  });

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
      </section>
      <section className="schedule">{appointmentList}</section>
    </main>
  );
}
// The schedule is made up of a list of <Appointment /> components. To create these, we need to iterate over the appointments array, passing the appropriate props down. Currently, each Appointment needs to have at minimum a props.time value. When the data contains an interview key, we pass it as a prop. This looping pattern should be more familiar to us since we have now built a few different types of lists.

// In the schedule <section> of our Application component, map over the appointments array to create a list in the schedule section.

// Just like in our stories earlier, due to the CSS, we'll need to add one last Appointment to the end of the list representing the last appointment for the day. We should also check the console to make sure each Appointment has a key.
