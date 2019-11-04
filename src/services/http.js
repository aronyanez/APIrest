import axios from "axios";
export const BASE_URL =
  "https://pixabay.com/api/?key=6209515-43c3c50462b55c3a5a57d604d";
//Instancia de axios para consumo de api
export const HTTP = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json"
  // }
  //  withCredentials: true
});
