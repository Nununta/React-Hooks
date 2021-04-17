import React,{useState,useContext} from 'react'
import AppContext from '../contexts/AppContext'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENT,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'
import {timeCurrentIso8601} from '../utils'


const EventForm = () => {
    const {state, dispatch} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
  
    const addEvent = e => {
      e.preventDefault()
      
      dispatch({
        type: CREATE_EVENT,
        title,
        body,
      })
      dispatch({
          type: ADD_OPERATION_LOG,
          description: 'イベントを作成しました',
          operatedAt: timeCurrentIso8601()
      })
  
      setTitle('')
      setBody('')
    }
  
    const deleteAllEvents = e => {
      e.preventDefault()
      const result = window.confirm('全てのイベントを削除しても良いですか❓')
      if(result) {
        dispatch({
            type: DELETE_ALL_EVENT,
        })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: '全てのイベントを削除しました',
            operatedAt: timeCurrentIso8601()
        })
      }
      
     
  
    }
  
    const Uncreatable = title === '' || body === ''
    
    const deleteAllOperationLogs = e => {
        e.preventDefault()
        const result = window.confirm('全てのログを削除しても良いですか❓')
        if(result) {
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS,
            })
        } 
       
    }
    // const UncreateLogs = description === ''



return(
<>
    <h4>イベントの作成フォーム</h4>
    <form>
        <div className="form-group">
            <label htmlFor="EventTitle">タイトル</label>
            <input className="form-control" id="EventTitle" value={title} onChange={e => setTitle(e.target.value)}  />
        </div>
    
        <div className="form-group">
            <label htmlFor="EventBody">ボディー</label>
            <textarea className="form-control" id="EventBody" value={body} onChange={e => setBody(e.target.value)} />
            <button className="btn btn-primary" onClick={addEvent} disabled={Uncreatable} >イベント作成</button>
            <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベント削除する</button>
            <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0  } >全ての操作ログを削除する</button>
        </div>
    </form>
</>
)
}

export default EventForm

