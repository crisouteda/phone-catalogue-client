import axios from "axios";
import { Config } from "../services";

export const getPhones = async () =>
  await axios.get(`${Config.apiBase}phones/getPhones`);
