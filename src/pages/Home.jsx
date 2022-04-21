import { useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TimeShift from '../components/TimeShift';
import hourDataDb from "../hourData.json"

function Home() {
  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [dayDb, setDayDb] = useState([
  {
    day: 'Thu', date: '21', month: 'Apr', year: '2022', hour: [{ "clock": 1, "toDo": 0 },
    { "clock": 2, "toDo": 0 },
    { "clock": 3, "toDo": 0 },
    { "clock": 4, "toDo": 1 },
    { "clock": 5, "toDo": 0.5 },
    { "clock": 6, "toDo": 0 },
    { "clock": 7, "toDo": 0 },
    { "clock": 8, "toDo": 0 },
    { "clock": 9, "toDo": 0 },
    { "clock": 10, "toDo": 0 },
    { "clock": 11, "toDo": 0 },
    { "clock": 12, "toDo": 0 },
    { "clock": 13, "toDo": 0 },
    { "clock": 14, "toDo": 0 },
    { "clock": 15, "toDo": 0 },
    { "clock": 16, "toDo": 0 },
    { "clock": 17, "toDo": 0 },
    { "clock": 18, "toDo": 0 },
    { "clock": 19, "toDo": 0 },
    { "clock": 20, "toDo": 0 },
    { "clock": 21, "toDo": 0 },
    { "clock": 22, "toDo": 0 },
    { "clock": 23, "toDo": 0 },
    { "clock": 24, "toDo": 0 }]
  },
  {
    day: 'Fri', date: '22', month: 'Apr', year: '2022', hour: [{ "clock": 1, "toDo": 0 },
    { "clock": 2, "toDo": 0 },
    { "clock": 3, "toDo": 0 },
    { "clock": 4, "toDo": 1 },
    { "clock": 5, "toDo": 1 },
    { "clock": 6, "toDo": 1 },
    { "clock": 7, "toDo": 1 },
    { "clock": 8, "toDo": 1 },
    { "clock": 9, "toDo": 0 },
    { "clock": 10, "toDo": 0 },
    { "clock": 11, "toDo": 0 },
    { "clock": 12, "toDo": 0 },
    { "clock": 13, "toDo": 0 },
    { "clock": 14, "toDo": 0 },
    { "clock": 15, "toDo": 0 },
    { "clock": 16, "toDo": 0 },
    { "clock": 17, "toDo": 0 },
    { "clock": 18, "toDo": 0 },
    { "clock": 19, "toDo": 0 },
    { "clock": 20, "toDo": 0 },
    { "clock": 21, "toDo": 0 },
    { "clock": 22, "toDo": 0 },
    { "clock": 23, "toDo": 0 },
    { "clock": 24, "toDo": 0 }]
  },
  {
    day: 'Sat', date: '23', month: 'Apr', year: '2022', hour: [{ "clock": 1, "toDo": 0 },
    { "clock": 2, "toDo": 0.5 },
    { "clock": 3, "toDo": 0.5 },
    { "clock": 4, "toDo": 0.5 },
    { "clock": 5, "toDo": 1 },
    { "clock": 6, "toDo": 1 },
    { "clock": 7, "toDo": 1 },
    { "clock": 8, "toDo": 1 },
    { "clock": 9, "toDo": 0 },
    { "clock": 10, "toDo": 0 },
    { "clock": 11, "toDo": 0 },
    { "clock": 12, "toDo": 0 },
    { "clock": 13, "toDo": 0 },
    { "clock": 14, "toDo": 0 },
    { "clock": 15, "toDo": 0 },
    { "clock": 16, "toDo": 0 },
    { "clock": 17, "toDo": 0 },
    { "clock": 18, "toDo": 0 },
    { "clock": 19, "toDo": 0 },
    { "clock": 20, "toDo": 0 },
    { "clock": 21, "toDo": 0 },
    { "clock": 22, "toDo": 0 },
    { "clock": 23, "toDo": 0 },
    { "clock": 24, "toDo": 0 }]
  }
]);

  const [currentDate, setCurrentDate] = useState({    /// Today's date
    day: "",
    date: "",
    month: "",
    year: "",
  });

  const [dbCurrentDay, setdbCurrentDay] = useState();


  function onChange(nextValue) {
    setValue(nextValue);
  }

  useEffect(() => {
    let newDate = value.toString().split(" ");
    setCurrentDate({
      day: newDate[0],
      date: newDate[2],
      month: newDate[1],
      year: newDate[3],
    })
  }, [value]);

  useEffect(() => {
    if(dayDb.length > 0){
      dayDb.map((thisDay) => {
        if(thisDay.day === currentDate.day && thisDay.date === currentDate.date && thisDay.month === currentDate.month && thisDay.year === currentDate.year){
          setdbCurrentDay(thisDay)
        } else {
          setdbCurrentDay({
            day: currentDate.day,
            date: currentDate.date,
            month: currentDate.month,
            year: currentDate.year,
            hour: hourDataDb,
          })
        }
      })
    } else {
      setdbCurrentDay({
        day: currentDate.day,
        date: currentDate.date,
        month: currentDate.month,
        year: currentDate.year,
        hour: hourDataDb,
      })
    }
  }, [value, currentDate]);

  const saveDay = (submitHour) => {
    const {day, date, month, year, hour} = submitHour;
    dayDb.map((dayOnDb) => {
      if(day === dayOnDb.day && date === dayOnDb.date && month === dayOnDb.month && year === dayOnDb.year){
       dayOnDb.hour = hour;
      } else {
        setDayDb((prev) => {
        return [
          ...prev,
          submitHour
        ]
        })
      }
    })
  }

  console.log(dbCurrentDay)

  const handleVisible = () => {
    setVisible((visible) => !visible)
  }

  return (
    <>
      <h1>Pro Shift</h1>
      <Calendar onChange={onChange} value={value} />
      {visible ? <>
        <button onClick={handleVisible}>Hide work schedule</button>
        <TimeShift date={currentDate} currentDay={dbCurrentDay} saveDay={saveDay} />
      </>
        : <button onClick={handleVisible}>show work Schedule</button>}
    </>
  )

}

export default Home;

/* 

const setting = () => {
      if (dayDb.length !== 0) {
        dayDb.map((dbDay) => {
          if (dbDay.day === currentDate.day && dbDay.date === currentDate.date && dbDay.month === currentDate.month && dbDay.year === currentDate.year) {
            setdbCurrentDay({
              day: dbDay.day,
              date: dbDay.date,
              month: dbDay.month,
              year: dbDay.year,
              hour: dbDay.hour,
            })
          } else {
            setdbCurrentDay({
              day: currentDate.day,
              date: currentDate.date,
              month: currentDate.month,
              year: currentDate.year,
              hour: hourDataDb,
            })
          }
        })
      } else {
        setdbCurrentDay({
          day: currentDate.day,
          date: currentDate.date,
          month: currentDate.month,
          year: currentDate.year,
          hour: hourDataDb,
        })
      }
    }

*/