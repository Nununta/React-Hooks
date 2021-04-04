import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

const App = props => {
    const[state, setState] = useState(props); 
    const reset = () => {
      setState(props);
    }

    useEffect(()=>{
      console.log('useEffect');
      //Domがレンダリングするたびに呼ばれる。
    })

    useEffect(()=>{
      console.log('useEffect firstonly');
      //Domがレンダリングされた一回のみ呼ばれる。
    },[])

    useEffect(()=>{
      console.log('useEffect nameChangeonly');
      //nameがレンダリングされた一回のみ呼ばれる。
    },[state.name])

    // const renderPeriod = () => {
    //   console.log('render period');
    //   return '。';
    // }

  return (
    <React.Fragment>
      <p>現在の{state.name}は{state.price}円です。</p>
      <button onClick={() => setState({...state, price:state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price:state.price - 1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input  value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </React.Fragment>
  );
}
App.defaultProps = {
  name:'ラーメン',
  price:1000,
}

export default App;
