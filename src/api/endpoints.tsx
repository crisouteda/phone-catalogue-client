import axios from "axios";
import { Config } from "../services";

export const getPhone = async (id: string) =>
  await axios.get(`${Config.apiBase}phones/phone/${id}`);

export const getPhones = async () =>
  await axios.get(`${Config.apiBase}phones/phones`);
