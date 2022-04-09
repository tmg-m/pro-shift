import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import TimeShift from '../components/TimeShift';

function Home() {

  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <h1>Pro Shift</h1>
      <Calendar onChange={onChange} value={value} />
      <TimeShift date={value}/>
    </>
  )

}

export default Home;