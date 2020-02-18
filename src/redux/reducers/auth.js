const initialState = {
  isLogIn: false,
  userInfo: [],
  userName: "",
  userImage: null,
  userEmail: null,
  userPhone: null,
  error: null,
  userId: 0
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_FB_SUCCESS":
      return { ...state, isLogIn: true, userInfo: action.payload };
    case "LOGIN_FB_FAILURE":
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default auth;
