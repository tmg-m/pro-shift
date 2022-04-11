import { useEffect, useState } from "react";

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

  const [daily, setDaily] = useState({
    "hour1": 0,
    "hour2": 0,
    "hour3": 0,
    "hour4": 0,
    "hour5": 0,
    "hour6": 0,
    "hour7": 0,
    "hour8": 0,
    "hour9": 0,
    "hour10": 0,
    "hour11": 0,
    "hour12": 0,
    "hour13": 0,
    "hour14": 0,
    "hour15": 0,
    "hour16": 0,
    "hour17": 0,
    "hour18": 0,
    "hour19": 0,
    "hour20": 0,
    "hour21": 0,
    "hour22": 0,
    "hour23": 0,
    "hour24": 0,
  });

  const [total, setTotal] = useState({
    totalHours: 0,
  });

  const [defaultBtn, sets] = useState(true);
  const [selectBtn, setSelectBtn] = useState(false);



  const timeTable = []
  for (let i = 1; i <= 24; i++) {
    timeTable.push(i)
  }

  const handleDefaultHour = (e) => {
    setDaily((prev) => {
      return {
        ...prev,
        [e.target.name]: 0,
      };
    })
  }

  const handleAddHour = (e) => {
    setDaily((prev) => {
      return {
        ...prev,
        [e.target.name]: 1,
      };
    })
  }
  const handleReduceHour = (e) => {
    setDaily((prev) => {
      return {
        ...prev,
        [e.target.name]: .5,
      };
    })
  }

  console.log(daily);

  return (
    <>
      <h1>Schedule</h1>
      <h1>{required ? <><p>{required.day} {required.todayDate} {required.month} {required.year}</p></> : null}</h1>
      <table>
        <tr>
          {timeTable.map((hours, i) => {
            return (
              <td>{hours}</td>
            )
          })}
        </tr>
        <tr>
          {timeTable.map((hours, i) => {
            return (
              <td>
                <div key={i}>
                  <button name={`hour${hours}`} onClick={handleAddHour}>1</button>
                  <button name={`hour${hours}`} onClick={handleReduceHour}>0.5</button>
                  <button name={`hour${hours}`} onClick={handleDefaultHour}>0</button>
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