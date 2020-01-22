import React from "react"
// interviewer:Object we can use the interview object that already exists in stories/index.js for this
// onEdit:Function to be called when the user clicks the Edit button
// onDelete:Function to be called when the user clicks the Delete button
export default function (props) {
return (<main className="appointment__card appointment__card--show">
<section className="appointment__card-left">
  <h2 className="text--regular">{props.student}</h2>
  <section className="interviewer">
    <h4 className="text--light">Interviewer</h4>
    <h3 className="text--regular">Sylvia Palmer</h3>
  </section>
</section>
<section className="appointment__card-right">
  <section className="appointment__actions">
    <img
      className="appointment__actions-button"
      src="images/edit.png"
      alt="Edit"
      onEdit={props.onEdit}
    />
    <img
      className="appointment__actions-button"
      src="images/trash.png"
      alt="Delete"
      onDelete={props.onDelete}

    />
  </section>
</section>
</main>)

}