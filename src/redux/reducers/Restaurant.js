const initialState = {
  restaurantData: null,
  error: null
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANT_DATA_SUCCESS":
      return {
        ...state,
        restaurantData: action.payload
      };
    case "GET_RESTAURANT_DATA_ERROR":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default restaurant;
