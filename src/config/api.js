import axios from "axios";

export const baseURL = "http://localhost:3977/api/";

export const API = axios.create({
  baseURL,
});

export const Headers = (token) => {
  API.defaults.headers.post["Content-Type"] = "application/json";
  API.defaults.headers.post["token"] = localStorage.getItem("token");
  API.defaults.headers.get["token"] = localStorage.getItem("token");
  return token
    ? {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
};
