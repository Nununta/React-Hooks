import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Events from './Events'
import OperationLogs from './OperationLogs'
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'


const App = () => {
  const inititialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer,inititialState)

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
