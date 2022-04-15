import { Config } from "../services";
import { IPhone } from "../types";

export const getPhone = async (id: string) => {
  const request = await fetch(`${Config.apiBase}phones/${id}`);
  const response = await request.json();
  return response;
};

export const getPhones = async (items: number, lastScanned?: string) => {
  const request = await fetch(
    `${Config.apiBase}phones/pagination/${items}/${lastScanned}`
  );
  const response = await request.json();
  return response;
};

export const createPhone = async (newPhone: IPhone) => {
  const token = localStorage.getItem("token");
  const data = `data=${JSON.stringify(newPhone)}`;
  const request = await fetch(`${Config.apiBase}phones/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authentication: `Bearer ${token}`,
    },
    body: data,
  });
  const response = await request.json();
  return response;
};

export const deletePhone = async (id: number) => {
  const token = localStorage.getItem("token");
  const request = await fetch(`${Config.apiBase}phones/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authentication: `Bearer ${token}`,
    },
  });
  const response = await request.json();
  return response;
};

export const updatePhone = async (updatedPhone: IPhone) => {
  const token = localStorage.getItem("token");
  const data = `data=${JSON.stringify(updatedPhone)}`;
  const request = await fetch(`${Config.apiBase}phones/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authentication: `Bearer ${token}`,
    },
    body: data,
  });
  const response = await request.json();
  return response;
};
