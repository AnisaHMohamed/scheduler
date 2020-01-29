// // Our useApplicationData Hook will return an object with four keys.

// // The state object will maintain the same structure.
// // The setDay action can be used to set the current day.
// // The bookInterview action makes an HTTP request and updates the local state.
// // The cancelInterview action makes an HTTP request and updates the local state.

// export default function useApplicationData (props){
//   const [state, setState] = useState({
//     day: "Monday",
//     days: [],
//     appointments: {},
//     interviewers:{}
//   });

  
//   const cancelInterview = (id) => {
//     return axios.delete(`/api/appointments/${id}`)
//   }
  
//   function bookInterview(id, interview) {

//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     setState({...state,appointments });
//     return axios.put(`/api/appointments/${id}`,  {
//      interview:{ student:interview.student,
//        interviewer: interview.interviewer}
//     } )
//     //take student, interviewer
  
//   } 
//   const setDay = day => setState({ ...state, day });
  
  
//   useEffect(() => {
//     let promiseDays = axios.get(`/api/days`);
//     let promiseAppointments = axios.get(`/api/appointments`);
//     let promiseInterviewers = axios.get(`/api/interviewers`);


//     Promise.all([
//       promiseDays,
//       promiseAppointments,
//       promiseInterviewers
//     ]).then((all) => {
//       setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
//     });
//   },[]);
  
//   const finalObj = {
//     state,
//     setDay,
//     bookInterview,
//     cancelInterview
//   }
//   return finalObj
// }