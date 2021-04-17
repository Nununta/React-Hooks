import React,{useState,useContext} from 'react'
import AppContext from '../contexts/AppContext'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENT
} from '../actions'


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
      }
      
     
  
    }
  
    const Uncreatable = title === '' || body === ''



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
            <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベント削除する</button>
        </div>
    </form>
</>
)
}

export default EventForm

