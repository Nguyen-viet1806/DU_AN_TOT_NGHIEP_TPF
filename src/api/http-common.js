import axios from "axios";
var DOMAIN = "http://localhost:8080";
const HTTP = axios.create({
  baseURL: `${DOMAIN}`,
//   headers: {
//     Authorization: `Basic `+ `${localStorage.getItem("token")}`,
//     "Access-Control-Allow-Origin": "*",
//     "Current-Page-Url": window.location.href
//   }
});
export { HTTP };