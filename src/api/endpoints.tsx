import { Config } from "../services";

export const getPhone = async (id: string) => {
  const request = await fetch(`${Config.apiBase}phones/phone/${id}`);
  const response = await request.json();
  return response;
};

export const getPhones = async () => {
  const request = await fetch(`${Config.apiBase}phones/phones`);
  const response = await request.json();
  return response;
};
