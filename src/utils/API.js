import axios from "axios";

const userRequest = axios.create({
  baseURL: "https://wasteless.bboa14171205.nctu.me/",
  headers: {
    Accept: "application/json"
  }
});

// userRequest.interceptors.request.use(
//   config => {
//     console.log(
//       `${config.method} request send to ${
//         config.url
//       } at ${new Date().getTime()}`
//     );
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export const postRequest = (url, data) => userRequest.post(url, data);
export const getRequest = url => userRequest.get(url);

// export const getRestaurantDataRequest = () => userRequest.get(`api/restaurant`);
// export const postUserRegister = data =>
//   userRequest.post(`api/user/register`, data);
