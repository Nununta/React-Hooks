import React, { useReducer, useEffect,useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

const App = () => {
   const [state, dispatch] = useReducer(reducer,[])
   const[title,setTitle] = useState('')
   const[body,setBody] = useState('')
   
   const addEvent = e => {
    e.preventDefault()
    
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    }    
    )
    setTitle('')
    setBody('')

   }

   return(
    <>
    <div className="container-fluid">
      <h4>イベントの作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="EventTitle">タイトル</label>
          <input className="form-control" id="EventTitle" value={title} onChange={e =>setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="EventBody">ボディー</label>
          <textarea className="form-control" id="EventBody" value={body} onChange={e => setBody(e.target.value)} />

          <button className="btn btn-primary" onClick={addEvent}>イベント作成</button>
          <button className="btn btn-danger">全てのイベント削除する</button>
        </div>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map(event =>{
             return <tr>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
              </tr>
            })
          }
        </tbody>
        
      </table>

    </div>
    </>
   )
 
}



export default App;
