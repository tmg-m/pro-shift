import { useEffect, useState } from "react";

function TimeShift ({date}) {
  const [data, setsData] = useState(null);

  useEffect(() => {
    setsData(date.toString())
  }, [date]);

  console.log(data)

  return (
    <>
      <h1>Time</h1>
      <h1>{data? <h1>{data}</h1> : null}</h1>
    </>
  )
}

export default TimeShift;