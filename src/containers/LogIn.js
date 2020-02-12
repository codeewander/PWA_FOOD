import React,{ useState,useEffect }  from 'react'
import { Button } from '@material-ui/core'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styled from 'styled-components'
import axios from 'axios'
import {connect} from 'react-redux'
import { getFacebookData } from '../redux/actions/action'


const LogIn =(props) =>{
  const [isLogIn, setLogIn] = useState('false')

  const responseFacebook = async (response)=> {
    if(response.accessToken){
      setLogIn('true')
      try{
        await props.getFacebookData(response.accessToken)

        // console.log(result)

      }catch(e){
        console.log(e.message)
      }
    }
    }

  const LogInContainer = styled.div`
    background-color: #4c69ba;
    color: #fff;
    display:inline-block;
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
  `
  return (
    <>
      <FacebookLogin
        appId="1394427937404636"
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        render={renderProps => (
          <LogInContainer onClick={renderProps.onClick}>FACEBOOK 登入</LogInContainer>
        )}
      />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getFacebookData
  }
}


export default connect(null, mapDispatchToProps)(LogIn)