import { useEffect, useState } from "react";
import DayShift from "./DayShift";

function TimeShift({ currentDay, saveDay }) {
  const [dayData, setdayData] = useState(null);    /// Today's date
  const [dailyTotal, setDailyTotal] = useState(0); /// Total hours of the day 

  useEffect(() => {
    setdayData({
      day: currentDay.day,
      date: currentDay.date,
      month: currentDay.month,
      year: currentDay.year,
      hour: currentDay.hour
    })
  }, [currentDay]);

  useEffect(() => {
    let total = currentDay.hour.map((day) => day.toDo).reduce((a, b) => a + b);
    setDailyTotal(total)
  }, [dayData]);

  const hourShift = (handleCal) => {
    setdayData((prev) => {
      return {
        ...prev,
        hour: prev.hour.map((hour) => {
          if (hour.clock === handleCal.clock) {
            hour.toDo = handleCal.toDo
            return hour
          } else {
            return hour
          }
        })
      }
    })
  };

  const submitHour = () => {
    saveDay(dayData)
  }

  return (
    <>
      <h1>Schedule</h1>
      <h1>Daily total: {dailyTotal} </h1>
      <h1>{dayData ? <><p>{dayData.day} {dayData.date} {dayData.month} {dayData.year}</p></> : null}</h1>
      <table>
        <tr>
          {currentDay.hour.map((time, i) => {
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
