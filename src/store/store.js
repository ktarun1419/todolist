import { combineReducers, configureStore } from '@reduxjs/toolkit'
import PreloginReducer, { preloginSelector } from '../slices/preloginSlice'
import  TodoReducer  from '../slices/todoslice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
const rootReducer = combineReducers({ 
    preloginSelector:PreloginReducer,
    todoSelector:TodoReducer
    //notes: notesReducer
  })
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['preloginSelector']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export const persistor = persistStore(store)