import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TimeShift from '../components/TimeShift';

function Home() {

  const [value, setValue] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [dayDb, setDayDb] = useState([]);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const saveDay = () => {
    console.log("i m here in parent")
  }

  const handleVisible = () => {
    setVisible((visible) => !visible)
  }

  return (
    <>
      <h1>Pro Shift</h1>
      <Calendar onChange={onChange} value={value} />
      {visible ?<>
            <button onClick={handleVisible}>Hide work schedule</button> 
            <TimeShift date={value} saveDay={saveDay}/> 
         </>  
      : <button onClick={handleVisible}>show work Schedule</button>}
    </>
  )

}

export default Home;