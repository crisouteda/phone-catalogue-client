import { Config } from "../services";

export const getPhone = async (id: string) => {
  const request = await fetch(`${Config.apiBase}phones/${id}`);
  const response = await request.json();
  return response;
};

export const getPhones = async (items: number, page: number) => {
  const request = await fetch(
    `${Config.apiBase}phones/pagination/${items}/${page}`
  );
  const response = await request.json();
  return response;
};
