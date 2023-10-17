import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
});

export async function read(url) {
  const { data } = await API.get(url);
  return data;
}
