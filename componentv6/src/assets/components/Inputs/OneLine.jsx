import { useState, useEffect, useRef } from "react";

function OneLine ({ prompts, onComplete }) {
  const [inputs, setInputs] = useState([]); // Use state to manage inputs
  const [pivot, setPivot] = useState(0); // Use state to manage pivot
  const [inputValue, setInputValue] = useState(''); // Define inputValue and update it accordingly
  const inputRef = useRef(null); // To get the input ref and focus it

  const isEmpty = () => prompts.length == 0;
  const assignBaseField = () => prompts.push('What do you want to do?');
  const isEnterKey = (event) => event.key === 'Enter'; // Rename ifEnter to isEnterKey
  const isCompleted = () => pivot === prompts.length - 1;
  const setPlaceholder = () => inputRef.current.placeholder = prompts[pivot];

  const handleKeyDown = (event) => {
    if (!isEnterKey(event)) return;
    setInputs([...inputs, inputValue]);
    setInputValue(''); // restore the input value to ''
    if (isCompleted()) {
      // code for api
      //OneLine.rule(inputs) // call the api method
      onComplete([...inputs, inputValue]); // Call the onComplete callback with the entered values array
      
      setPivot(0); // Reset pivot using setState
      setInputs([]); // Reset inputs using setState
      prompts.length = 0; // pop all the elements of prompts
      assignBaseField(); // Add the base field to the prompts array
      return;
    }

    setPivot(pivot + 1); // Update pivot using setState
    setPlaceholder();
  };

  useEffect(() => {
    if (isEmpty()) {
      assignBaseField();
    }

    setPlaceholder();
    inputRef.current.focus();
  }, [pivot, prompts]); // Add prompts as a dependency to useEffect

  return (
    <>
    <h1>{pivot}</h1>
      <input ref={inputRef} id="input-field" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(event) => setInputValue(event.target.value)} />
    </>
  );
}

export default OneLine;
