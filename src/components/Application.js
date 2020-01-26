import React, { useState, useEffect } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import axios from "axios"
import Appointment from "components/Appointment/index";
import{ getAppointmentsForDay, getInterview }from "../helpers/selectors"

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers:{}
  });
  
  const setDay = day => setState({ ...state, day });
  
  useEffect(() => {
    let promiseDays = axios.get(`/api/days`);
    let promiseAppointments = axios.get(`/api/appointments`);
    let promiseInterviewers = axios.get(`/api/interviewers`);


    Promise.all([
      promiseDays,
      promiseAppointments,
      promiseInterviewers
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);
    console.log("the interviewer data",state.interviewers)
    const filteredAppointments = getAppointmentsForDay(state, state.day);
    const appointmentList = filteredAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return <Appointment interview={interview} time={appointment.time} key={appointment.id} {...appointment} />;
  });
  console.log("appointmet list", appointmentList[1])
  
  
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
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
