import {combineReducers} from 'redux'
import events from './events'
import events from './operationLogs'


export default combineReducers({
    events,
    operationLogs
})
