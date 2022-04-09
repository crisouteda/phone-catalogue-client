import axios from "axios";
import { Config } from "../services";

export const getPhones = async () => {
  return await axios.get(`${Config.apiBase}phones/getPhones`);
};
