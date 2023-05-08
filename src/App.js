import logo from './logo.svg';
import './App.scss';
import GoogleSignin from './login/googleSignin';
import Navbar from './components/navabr/navbar';
import Sidebar from './components/sidebar/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { preloginSelector, updateToken } from './slices/preloginSlice';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './routes/privateRoutes';
import UserRoutes from './routes/Routes';
function App() {
  //const {token}=useSelector((state)=>state.preloginSelector)
  const {token} =useSelector(preloginSelector)
  const dispatch=useDispatch()
  const [theme,setTheme]=useState('dark')
  const setToken=()=>{
    dispatch(updateToken('helooo'))
  }
  return (
    <div className="App">
      {console.log(token)}
      <div className='main_container'>
        <Navbar />
        <Sidebar />
       
        {/* <button onClick={activate} >Connect</button> */}
        <div className={`theme-${theme}`}>
        <UserRoutes />
          {/* <h1>qqqqqqqqqqqqq</h1>
          <button onClick={()=>setTheme('dark')}>Change theme</button> */}

        </div>
      </div>
    </div>
  );
}

export default App;
