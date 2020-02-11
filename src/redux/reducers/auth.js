// import { LOGIN_FB } from '../actions/actionType';
// const initialState = {
//   isLogIn: false,
// }

const auth = (state = [] , action) => {
  switch(action.type){
    case 'LOGIN_FB':
      return [...state, Object.assign({},action.payload)]
    default:
      return state;
  }
}

export default auth