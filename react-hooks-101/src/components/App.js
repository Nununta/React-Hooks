import React, {useEffect,useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Events from './Events'
import OperationLogs from './OperationLogs'
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'

const APP_key = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_key)
  const inititialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer,inititialState)
  
  useEffect(()=>{
    // console.log('useEffect')
    localStorage.setItem(APP_key,JSON.stringify(state))
  },[state])

   return(
    <AppContext.Provider value={{state, dispatch}}>

      <div className="container-fluid">
        <EventForm  />    
        <Events />    
        <OperationLogs />    
      </div>
    </AppContext.Provider>
   )
 
}



export default App;
