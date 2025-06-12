import axiosInstance from "../axios/axios-instance";

export const fetchProducts = (limit, skip) => {
  let url = `/products?limit=${limit}&skip=${skip}`;
  return axiosInstance.get(url).then((res) => res.data);
};
