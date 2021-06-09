import axios from "axios";

const register = (username, email, password) => {
  var data = new FormData();
  data.append("email", `${email}`);
  data.append("password", `${password}`);
  var config = {
    method: "post",
    url: "https://ik-react-task.herokuapp.com/accounts/register/",
    headers: {
      Authorization: "Basic Og=="
    },
    data: data
  };
  return axios(config)
    .then(function (response) {
      alert("User Registered you can add proceed with Login");
      return response.data;
    })
    .catch(function (error) {
      alert("Error Please provide Credentials");
      return error;
    });
};

const login = (username, password) => {
  var data = new FormData();
  data.append("email", `${username}`);
  data.append("password", `${password}`);

  var config = {
    method: "post",
    url: "https://ik-react-task.herokuapp.com/accounts/login/",
    headers: {
      Authorization: "Basic Og=="
    },
    data: data
  };

  return axios(config).then(function (response) {
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(JSON.stringify(response.data.token));
    data = JSON.stringify(response.data.token);
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};
