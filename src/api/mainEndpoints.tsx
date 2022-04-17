import { Config } from "../services";
import { IPhone } from "../types";

export const getPhone = async (id: string) => {
  const request = await fetch(`${Config.apiBase}phones/${id}`);
  const response = await request.json();
  if (request.status >= 400 && request.status < 600) {
    throw new Error(response);
  }
  return response;
};

export const getPhones = async (items: number, lastScanned?: string) => {
  const request = await fetch(
    `${Config.apiBase}phones/pagination/${items}/${lastScanned}`
  );
  const response = await request.json();
  if (request.status >= 400 && request.status < 600) {
    throw new Error(response);
  }
  return response;
};

export const createPhone = async (newPhone: IPhone) => {
  const token = localStorage.getItem("token");
  const body = `data=${JSON.stringify(newPhone)}&token=${token}`;
  const request = await fetch(`${Config.apiBase}phones/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const response = await request.json();
  if (request.status >= 400 && request.status < 600) {
    throw new Error(response);
  }
  return response;
};

export const deletePhone = async (id: string) => {
  const token = localStorage.getItem("token");
  const body = `id=${id}&token=${token}`;
  const request = await fetch(`${Config.apiBase}phones/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const response = await request.json();
  if (request.status >= 400 && request.status < 600) {
    throw new Error(response);
  }
  return response;
};

export const updatePhone = async (updatedPhone: IPhone) => {
  const token = localStorage.getItem("token");
  const body = `data=${JSON.stringify(updatedPhone)}&token=${token}`;
  const request = await fetch(`${Config.apiBase}phones/put`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  const response = await request.json();
  if (request.status >= 400 && request.status < 600) {
    throw new Error(response);
  }
  return response;
};
