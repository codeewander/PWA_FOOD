import { combineReducers } from "redux";
import auth from "./auth";
import restaurant from "./Restaurant";

export default combineReducers({
  auth,
  restaurant
});
