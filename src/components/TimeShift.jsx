import { useEffect, useState } from "react";
import DayShift from "./DayShift";
import hourData from "../hourData.json"

function TimeShift({ data }) {
  const [required, setRequired] = useState({
    day: "",
    todayDate: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    let newDate = data.toString().split(" ");
    setRequired({
      day: newDate[0],
      todayDate: newDate[2],
      month: newDate[1],
      year: newDate[3],
    })
  }, [data]);

  const [daily, setDaily] = useState(hourData);   /// main data

  const hourShift = (handleCal) => {
    setDaily(prev => {
      return [
        ...prev.map((hour) => {
          if( hour.clock === handleCal.clock){
            hour.toDo = handleCal.toDo
            return hour
          } else {
            return hour
          }
        })
      ]
    })
  };

  console.log(daily);

  return (
    <>
      <h1>Schedule</h1>
      <h1>{required ? <><p>{required.day} {required.todayDate} {required.month} {required.year}</p></> : null}</h1>
      <table>
        <tr>
          {daily.map((time, i) => {
            return (
              <td key={i}>
                <div>
                  <DayShift clock={time.clock} toDo={time.toDo} hourShift={hourShift} />
                </div>
              </td>
            )
          })}
        </tr>
      </table>
    </>
  )
}

export default TimeShift;