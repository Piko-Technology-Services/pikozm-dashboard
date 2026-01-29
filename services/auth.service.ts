import api from "./api";

export const login = (data: {
  email: string;
  password: string;
}) => {
  return api.post("/auth/login", data);
};

export const register = (data: {
  name: string;
  email: string;
  role: string;
  password: string;
}) => {
  return api.post("/auth/register", data);
};

export const logout = () => {
  localStorage.removeItem("token");
};
