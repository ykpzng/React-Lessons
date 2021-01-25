import React, { useRef } from 'react';


function useRefComp() {
  const inputRef = useRef();
  const divRef = useRef();

  const onSetBorder = () => {
    inputRef.current.style.border = "1px solid red";
  }

  const onSetBorderDiv = () => {
    divRef.current.style.border = "2px solid blue";
  }

  const onViewTextInput = () => {
    alert(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <div ref={divRef}>
      <h1>Component For useRef</h1>
      <input ref={inputRef} placeholder="Enter text...."></input>
      <button onClick={onSetBorder}>Set Border To input</button>
      <button onClick={onSetBorderDiv}>Set Border To Div</button>
      <button onClick={onViewTextInput}>Viev Input Text</button>
    </div>
  )
}


export default useRefComp
