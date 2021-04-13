import React, { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  // console.log({count});
  // console.log({setCount});
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const double = () => setCount(count * 2);
  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const divide3 = () => setCount(count => {
    if(count % 3 === 0){
      return count / 3;
    }else {
      return count;
    }
  });
  const Reset = () => setCount(0);

  return (
    <React.Fragment>
    <div>Count:{count}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={Reset}>Reset</button>
      <button onClick={double}>×2</button>
      <button onClick={divide3}>3の倍数の時だけ割る</button>
    </div>
    </React.Fragment>
  );
}

export default App;
