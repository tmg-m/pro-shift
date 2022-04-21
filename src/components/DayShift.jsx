import { useState } from "react";

function DayShift ({clock, toDo, hourShift}) {
  
  let workHour = 0;
  let handleStyle = {};

  if(toDo === 0){
    workHour = 1;
    handleStyle = {"backgroundColor": "white"};
  }
  else if(toDo === 1){
    workHour = 0.5
    handleStyle = {"backgroundColor": "blue"};
  } else if (toDo === 0.5){
    workHour = 0
    handleStyle = {"backgroundColor": "lightBlue"};
  }

  const handleCal = () => {
    hourShift({ clock: clock, toDo: workHour})
  };

  return(
    <>
      <h1>{`${clock}:00`}</h1>
      <button style={handleStyle} onClick={handleCal}>{toDo}</button>
    </> 
  )
}

export default DayShift;