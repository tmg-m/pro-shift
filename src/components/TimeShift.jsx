import { useEffect, useState } from "react";
import DayShift from "./DayShift";
import hourDataDb from "../hourData.json"

function TimeShift({ date }) {
  const [required, setRequired] = useState({
    day: "",
    date: "",
    month: "",
    year: "",
  });

  const [daily, setDaily] = useState(hourDataDb);   /// main data of each day
  const [dailyTotal, setDailyTotal] = useState(0);

  useEffect(() => {
    let newDate = date.toString().split(" ");
    setRequired({
      day: newDate[0],
      date: newDate[2],
      month: newDate[1],
      year: newDate[3],
    })
  }, [date]);

  useEffect(() => {
    let total = daily.map((day) => day.toDo).reduce((a, b) => a + b);
    setDailyTotal(total)
  }, [daily]);

  const hourShift = (handleCal) => {
    setDaily(prev => {
      return [
        ...prev.map((hour) => {
          if (hour.clock === handleCal.clock) {
            hour.toDo = handleCal.toDo
            return hour
          } else {
            return hour
          }
        })
      ]
    })
  };

  const submitHour = () => {
    console.log("saving")
  }

  return (
    <>
      <h1>Schedule</h1>
      <h1>Daily total: {dailyTotal} </h1>
      <h1>{required ? <><p>{required.day} {required.date} {required.month} {required.year}</p></> : null}</h1>
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
      <button onClick={submitHour}>Save</button>
    </>
  )
}

export default TimeShift;


// const submitHour = () => {
//   if (savedDay.length <= 0) {
//     setSavedDay(prev => {
//       return [
//         ...prev,
//         {
//           day: required.day,
//           date: required.date,
//           month: required.month,
//           year: required.year,
//           hour: daily,
//         }
//       ]
//     })
//   } else if(savedDay.length > 0) {
//     savedDay.map(dayData => {
//       if (dayData.day === required.day && dayData.date === required.date && dayData.month === required.month && dayData.year === required.year) {
//         console.loglog("ok")
//       } else {
//         console.log("ok")
//         // setSavedDay(prev => {
//         //   return [
//         //     ...prev,
//         //     {
//         //       day: required.day,
//         //       date: required.date,
//         //       month: required.month,
//         //       year: required.year,
//         //       hour: daily,
//         //     }
//         //   ]
//         // })
//       }
//     })
//   } else {
//     console.log("do something");
//   }

// }