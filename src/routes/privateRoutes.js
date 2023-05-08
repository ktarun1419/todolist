import React from 'react'
import { useSelector } from 'react-redux'
import { preloginSelector } from '../slices/preloginSlice'
import { Navigate } from 'react-router'

const PrivateRoutes = ({component:RouteComponent,}) => {
    const {isAuthenticated,token,userData}=useSelector(preloginSelector)
    console.log({isAuthenticated,token,userData})
    if (isAuthenticated && token) {
        console.log('enterned')
        return (
         <RouteComponent />
        )
    }else{
        console.log('removed')
        return <Navigate to='/login' />
    }
}
export default PrivateRoutes