import axios from "axios";
import authHeader from "./auth-header";

const getEventTypes = () => {
  console.log(JSON.parse(localStorage.getItem("user")));
  const user = JSON.parse(localStorage.getItem("user"));
  var data = new FormData();
  var config = {
    method: "get",
    url: "https://ik-react-task.herokuapp.com/events/event_types/",
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log("sa");
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getUserBoard = () => {
  var data = new FormData();
  const user = JSON.parse(localStorage.getItem("user"));
  var config = {
    method: "get",
    url: "https://ik-react-task.herokuapp.com/events/",
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log("sa");

      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const addEvent = (datas) => {
  var FormData = require("form-data");
  var data = new FormData();

  data.append("name", `${datas.name}`);
  data.append("event_type", `${datas.event_type}`);
  data.append("start", `${datas.start}`);
  data.append("end", `${datas.end}`);
  const user = JSON.parse(localStorage.getItem("user"));
  var config = {
    method: "post",
    url: "https://ik-react-task.herokuapp.com/events/",
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getColor = (type) => {
  switch (type) {
    case "Bootcamp":
      return "#FF0000";

    case "Charity":
      return "#00FFFF";
    case "Sports events":
      return "#800080";
    case "Exhibitions":
      return "#FFFF00";
    case "Corporate":
      return "#FF00FF";
    case "Family":
      return "#FFC0CB";
    case "Fundraising":
      return "#C0C0C0";
    case "Holiday":
      return "#808080";
    case "Sponsored runs":
      return "#FFA500";
    case "Music events":
      return "#A52A2A";
    case "Networking events":
      return "#800000";
    case "Product launches":
      return "#008000";
    case "Trade shows":
      return "#808000";
    default:
      return "#ffff";
  }
};

export default {
  getEventTypes,
  getUserBoard,
  addEvent,

  getColor
};
