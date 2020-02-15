import { LOGIN_FB } from './actionType';
import {postRequest} from '../../utils/API';
// import axios from 'axios'

export const getResponseSuccess =(payload)=>({
  type: LOGIN_FB,
  payload
})

export const getFacebookData = (token) =>{
  console.log(token)
  return (dispatch) =>{
    return postRequest('/api/user/facebook/login', token)
    .then(res=>{
      console.log(res)
      dispatch(getResponseSuccess(res.data))
    })
    .catch((e) => {
      console.log(e.message)
    })
  }
}