import { useState, useEffect, useRef } from "react";

function OneLine ({ prompts, onComplete }) {
  const [inputs, setInputs] = useState([]);
  const [pivot, setPivot] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const isEmpty = () => prompts.length == 0;
  const assignBaseField = () => prompts.push('What do you want to do?');
  const isEnterKey = (event) => event.key === 'Enter'; // Rename ifEnter to isEnterKey
  const isCompleted = () => pivot === prompts.length - 1;
  const setPlaceholder = () => inputRef.current.placeholder = prompts[pivot];

  const handleKeyDown = (event) => {
    if (!isEnterKey(event)) return;
    setInputs([...inputs, inputValue]);
    setInputValue('');
    if (isCompleted()) {
      // code for this component with api...
      //OneLine.rule(inputs) // call the rule
      onComplete([...inputs, inputValue]);
      
      setPivot(0);
      setInputs([]);
      prompts.length = 0;
      assignBaseField();
      return;
    }

    setPivot(pivot + 1);
    setPlaceholder();
  };

  useEffect(() => {
    if (isEmpty()) {
      assignBaseField();
    }

    setPlaceholder();
    inputRef.current.focus();
  }, [pivot, prompts]);

  return (
    <>
    <h1>{pivot}</h1>
      <input ref={inputRef} id="input-field" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(event) => setInputValue(event.target.value)} />
    </>
  );
}

export default OneLine;
