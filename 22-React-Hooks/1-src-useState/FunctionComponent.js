import React, { useState, useEffect } from 'react';

function FunctionComponent() {
  const [counter, setCounter] = useState(0);
  const [isVisable, setIsVisable] = useState(true);
  const [timer, setTimer] = useState(0);

  console.log("Function Component : ", counter);

  // React Lifecycle
  // array boş ise didmount gibi olur. 
  // return kısmı WillUnmount a denk geliyor
  useEffect(() => {
    console.log("Fuction useEffect Çalıştı..");

    const myTimer = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => clearInterval(myTimer);
  }, []);

  // didUpdate e denk geliyor
  useEffect(() => {
    console.log("Timer 2 : ", timer)
  })


  const increase = () => {
    setCounter(counter + 1);
  }

  const decrase = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Functional Component (Hooks)</h1>

      <p>Counter : {counter}</p>

      <button onClick={increase}>Artır</button>

      <button onClick={decrase}>Azalt</button>
      <br />
      <span>Timer : {timer}</span>
    </div>
  )
}

export default FunctionComponent


// React Hooks
// Hooks ta 5 adet keyword vardır;
/*  -- useState     (state tanımlaması ve değiştirilmesi)
    -- useEffect    (React Lifecycle işlemleri burada yapılır)
    -- useContext
    -- useRef
    -- useReducer

*/