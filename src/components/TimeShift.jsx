import { useEffect, useState } from "react";

function TimeShift ({data}) {
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

  console.log(required);

  return (
    <>
      <h1>Schedule</h1>
      <h1>{required? <><p>{required.day} {required.todayDate} {required.month} {required.year}</p></> : null}</h1>
    </>
  )
}

export default TimeShift;