
import React from 'react'
import DayListItem from 'components/DayListItem.js'

export default function DayList(props) {
const days = props.days.map(day => {
  console.log(day)

 return(<ul>
<DayListItem 
  name={day.name} 
  spots={day.spots} 
  selected={day.name === props.day}
  setDay={props.setDay}  
    />

 </ul>)
})
return days
 }


// days:Array a list of day objects (each object includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
// The DayList is responsible for rendering a list of DayListItem components. It doesn't have any styles of its own so we don't need a DayList.scss file.