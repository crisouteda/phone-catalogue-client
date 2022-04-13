import { Config } from "../services";

export const signUp = async (email: string, password: string) => {
  const data = `email=${email}&password=${password}`;
  const request = await fetch(`${Config.apiBase}auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
    credentials: "include",
    body: data,
  });
  const response = await request.json();
  return response;
};

export const signIn = async (email: string, password: string) => {
  const data = `email=${email}&password=${password}`;
  const request = await fetch(`${Config.apiBase}auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
  const response = await request.json();
  return response;
};

export const isUserAuth = async () => {
  const request = await fetch(`${Config.apiBase}auth/isUserAuth`);
  const response = await request.json();
  return response;
};
