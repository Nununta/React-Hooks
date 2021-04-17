import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
import { DELETE_EVENT } from '../actions'



const Event = ({event}) => {
      const {state,dispatch} = useContext(AppContext)
      const handleClickDelete = () => {
        const result = window.confirm(`イベント(id=${event.id})を削除しても良いですか❓`)
        if(result) {
            dispatch({
                type: DELETE_EVENT,
                id: event.id,
              })
        }
        
      }
      return (
        <tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button></td>
        </tr>
      ) 
}

export default Event



// {
//     state.map((event,index) => {
//       const handleClickDelete = () => {
//         dispatch({
//           type: 'DELETE_EVENT',
//           id: event.id,
//         })
//       }

//       return (
//         <tr key={index}>
//           <td>{event.id}</td>
//           <td>{event.title}</td>
//           <td>{event.body}</td>
//           <td><button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button></td>
//         </tr>
//       ) 
//     })
//   }