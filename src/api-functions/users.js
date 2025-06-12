import axiosInstance from "../axios/axios-instance";

export const fetchUsers = () => {
  return axiosInstance.get("/users").then((res) => res.data);
};

export const fetchUserById = (id) => {
  return axiosInstance.get(`/users/${id}`).then((res) => res.data);
};
