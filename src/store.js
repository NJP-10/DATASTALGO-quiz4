import {thunk} from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { projectListReducer } from './Reducers/projectsReducers';

const reducer = combineReducers({ 
  projectList: projectListReducer
})

const initialState = {

}

const middleware = [thunk]

const store = configureStore({
    reducer,
    initialState,
    Middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store
