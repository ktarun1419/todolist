import React from 'react'
import { Route, Routes,Switch } from 'react-router'
import PrivateRoutes from './privateRoutes'
import TodoList from '../components/sidebar/todolist'
import GoogleSignin from '../login/googleSignin'

const UserRoutes = () => {

  return (
  <>
  <Routes>
        <Route path='/login' element={ <GoogleSignin />} />
        <Route path='/todo' element={<PrivateRoutes component={TodoList} />} />
  </Routes>
  </>
  )
}

export default UserRoutes