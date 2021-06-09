import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    UserService.getEventTypes().then((response) => {
      setEvent(response);
      console.log(response);
    });
    UserService.getUserBoard().then((response) => {
      setContent(response);
    });
  }, []);

  return (
    <div className="container">
      <div class="row">
        <div class="col-3">
          {" "}
          <ul className="list-group">
            {event.map((value) => {
              console.log("d");
              console.log(value);
              return (
                <li className="list-group-item">
                  <h5 style={{ backgroundColor: UserService.getColor(value) }}>
                    {" "}
                    {value}
                  </h5>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="col-9">
          <Calendar event={content}></Calendar>
        </div>
      </div>
    </div>
  );
};

export default Home;
