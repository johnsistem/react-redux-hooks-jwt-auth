import React, { useState } from "react";

import Dropdown from "./Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyComponent(props) {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  const handleChange1 = (date) => setDate1(date);
  const handleChange2 = (date) => setDate2(date);

  const today = new Date();
  let in3Days = new Date();
  in3Days.setDate(in3Days.getDate() + 3);

  return (
    <div>
      <Dropdown handleEvent={props.handleEvent}></Dropdown>
      <p>Start Date</p>
      <DatePicker
        selected={date1}
        name="start"
        onChange={props.handleChange1}
        minDate={today}
        dateFormat="y-MM-dd h:mm:ss a"
      />
      <br></br>
      <br></br>
      <p>End Date</p>
      <DatePicker
        selected={date2}
        name="end"
        onChange={props.handleChange2}
        minDate={today}
        dateFormat="yyyy-d-M  yyyy h:mm aa"
      />
    </div>
  );
}
