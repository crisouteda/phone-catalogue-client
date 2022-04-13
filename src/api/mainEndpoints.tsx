import { Config } from "../services";

export const getPhone = async (id: string) => {
  const request = await fetch(`${Config.apiBase}phones/${id}`);
  const response = await request.json();
  return response;
};

export const getPhones = async (items: number, lastScanned?: string) => {
  const request = await fetch(
    // `${Config.apiBase}phones/pagination/${items}/${lastScanned}`
    `${Config.apiBase}phones`
  );
  const response = await request.json();
  return response;
};
