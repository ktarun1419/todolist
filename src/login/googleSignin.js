import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { preloginSelector, updateAuthenication, updateToken } from '../slices/preloginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const GoogleSignin = () => {
const provider=new GoogleAuthProvider()
const {token,isAuthenticated}=useSelector(preloginSelector)
const auth=getAuth()
const navigate=useNavigate()
const dispatch=useDispatch()
const signin=()=>{
    console.log({auth})
    signInWithPopup(auth,provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        dispatch(updateToken(token))
        dispatch(updateAuthenication(true))
        navigate('/todo')
       
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
}
const logout=()=>{
  dispatch(updateToken(''))
  dispatch(updateAuthenication(false))
  navigate('/login')

}
const Button =styled.button`
padding:8px 16px;
background:white;
color:black;
border:0;
border-radius:8px
`
  return (
    <div>
        {isAuthenticated ?
           <Button onClick={logout}>Logout</Button>
            : <Button onClick={signin}>
            Sign in with google
        </Button> }
       
    </div>
  
  )
}

export default GoogleSignin