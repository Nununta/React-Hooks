import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'
import Events from './Events'
import EventForm from './EventForm'
import AppContext from '../contexts/AppContext'

console.log({AppContext})

const App = () => {
  const [state, dispatch] = useReducer(reducer,[])

   return(
    <AppContext.Provider value={'Hello Provider'}>

      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />    
        <Events state={state} dispatch={dispatch} />    
      </div>
    </AppContext.Provider>
   )
 
}



export default App;
