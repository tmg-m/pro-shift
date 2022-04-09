import { useEffect, useState } from "react";

function TimeShift ({data}) {
  const [date, setsDate] = useState(null);

  useEffect(() => {
    setsDate(data.toString())
  }, [data]);

  console.log(data);

  return (
    <>
      <h1>Time</h1>
      <h1>{date? <h1>{date}</h1> : null}</h1>
    </>
  )
}

export default TimeShift;