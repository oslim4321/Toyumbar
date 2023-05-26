import axios from "axios";

const Base_Url = "http://localhost:3000/";

export const PublicRequest = axios.create({
  baseURL: Base_Url,
});

export const getUserRequestWithToken = (token) => {
  return axios.create({
    baseURL: Base_Url,
    headers: {
      // token: `Bearer ${token}`,
    },
  });
};
