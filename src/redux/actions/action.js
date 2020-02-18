import {
  LOGIN_FB,
  GET_RESTAURANT_DATA_SUCCESS,
  GET_RESTAURANT_DATA_ERROR
} from "./actionType";
import { postRequest, getRequest } from "../../utils/API";

//create actions
// export const setResponseSuccess = data => ({
//   type: LOGIN_FB,
//   payload: data
// });

// export const setRestaurantData = data => ({
//   type: SET_RESTAURANT_DATA,
//   payload: data
// });

export const getRestaurantDataSuccess = data => {
  return {
    type: GET_RESTAURANT_DATA_SUCCESS,
    payload: data
  };
};

export const getRestaurantDataError = error => {
  return {
    type: GET_RESTAURANT_DATA_ERROR,
    error: error
  };
};

// export const getFacebookData = token => {
//   console.log(token);
//   return dispatch => {
//     return postRequest("/api/user/facebook/login", token)
//       .then(res => {
//         console.log(res);
//         dispatch(setResponseSuccess(res.data));
//         return res.data;
//       })
//       .catch(e => {
//         console.log(e.message);
//       });
//   };
// };

export const getRestaurantData = () => {
  return dispatch => {
    console.log("do");
    return getRequest("/api/restaurant")
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getRestaurantDataSuccess(res.data));
        return res.data;
      })
      .catch(error => dispatch(getRestaurantDataError(error)));
  };
};
