import React, { useState, useEffect } from "react";
import Datepicker from "./Datepicker";
import UserService from "../services/user.service";

const BoardUser = () => {
  const [data, setData] = useState({
    name: "",
    event_type: "",
    start: "",
    end: ""
  });

  const [alert, setAlert] = useState(true);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const handleChange1 = (date) => {
    let k = date + "";
    //console.log(convert(date) + "T" + k.slice(16, 24) + ".331Z");
    let final = convert(date) + "T" + k.slice(16, 24) + ".331Z";
    setData({
      ...data,
      start: final
    });
  };
  const handleChange2 = (date) => {
    let k = date + "";
    //console.log(convert(date) + "T" + k.slice(16, 24) + ".331Z");
    let final = convert(date) + "T" + k.slice(16, 24) + ".331Z";
    setData({
      ...data,
      end: final
    });
  };
  const handleEvent = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const handleChange = (event) => {
    setData({
      ...data,
      name: event.target.value
    });
  };

  const renderAuthButton = () => {
    if (alert) {
      return null;
    } else {
      return (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            Not Valid Input
          </div>
        </div>
      );
    }
  };
  const addEvent = () => {
    if (
      data.name.length > 1 &&
      data.event_type.length > 1 &&
      data.start.length > 1 &&
      data.end.length > 1
    ) {
      UserService.addEvent(data).then((response) => {
        console.log(response);
      });
    } else {
      setAlert(false);
    }
  };

  console.log(data);
  return (
    <div className="container">
      <h1>Add an Event</h1>
      <label>Event :</label> <input type="text" onChange={handleChange} />
      <Datepicker
        handleChange1={handleChange1}
        handleChange2={handleChange2}
        handleEvent={handleEvent}
      ></Datepicker>
      <br></br>
      <button onClick={addEvent}>Add Event</button>
      {renderAuthButton()}
    </div>
  );
};

export default BoardUser;
