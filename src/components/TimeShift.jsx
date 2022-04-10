import { useEffect, useState } from "react";

function TimeShift({ data }) {
  const [required, setRequired] = useState({
    day: "",
    todayDate: "",
    month: "",
    year: "",
  });

  const [total, setTotal] = useState({
    totalHours : 0,
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

  const timeTable = []
  for (let i = 1; i <= 24; i++) {
    timeTable.push(i)
  }
  console.log(timeTable);

  const handleAddHour = () => {
    setTotal((prev) => {
      return {
        ...prev,
        totalHours: prev.totalHours+ 1,
      };
    })
  }

  console.log(total);

  return (
    <>
      <h1>Schedule</h1>
      <h1>{required ? <><p>{required.day} {required.todayDate} {required.month} {required.year}</p></> : null}</h1>
      <table>
        <tr>
          {timeTable.map((hours, i) => {
            return(
              <td>{hours}</td>
            )
          })}
        </tr>
        <tr>
        {timeTable.map((hours, i) => {
            return(
              <td>
                <div>
                  <button onClick={handleAddHour}></button>
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