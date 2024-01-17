import axios from "axios";
import { BASE_URL } from "@/lib/BASE_URL";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
