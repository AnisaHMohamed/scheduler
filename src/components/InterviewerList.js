 import React from 'react'
 import InterviewerListItem from 'components/InterviewerListItem.js'
 import "./InterviewerList.scss"


 export default function InterviewerList(props) {
 
  const interviewers = props.interviewers.map(interviewer => {
    return(
       <InterviewerListItem 
       
        id={interviewer.id} 
        name= {interviewer.name}
        selected={interviewer.id === props.value}
        setInterviewer={(ev)=>props.onChange(interviewer.id)}  //mouse click
        avatar = {interviewer.avatar}
          />
       
       )
      })
      return( <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewers}</ul>
    </section>)
       };
       

      
