import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import UserService from "../services/user.service";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: "", event_type: "", start: "", end: "" },
      date1: ""
    };
  }

  render() {
    let finalEvent = [];
    let event = this.props.event;
    event.map((item) => {
      console.log(UserService.getColor(item.event_type));
      console.log(item);
      finalEvent.push({
        title: item.name,
        start: item.start.slice(0, 19),
        end: item.end.slice(0, 19),
        duration: "04:00",
        backgroundColor: UserService.getColor(item.event_type),
        description: "Lecture"
      });
    });

    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={finalEvent}
      />
    );
  }
}
