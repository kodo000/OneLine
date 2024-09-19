import { useState, useEffect, useRef } from "react";

function OneLine ({ propmts, onComplete }) {
  const [inputs, setInputs] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0); // The pivot for traverse the array prompts
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); // To get the input ref and focus it https://stackoverflow.com/questions/52125898/when-to-use-inputref-current-instead-of-this-inputref-react-js


  {/* Turning this into an arrow function
    function isEmpty() {
      return myArray.isEmpty();
    }
  */}
  const isItEmpty = () => myArray.isEmpty();


  const isCompleted = () => currentPrompt == propmts.length;


  const x = () => console.log('yeah');


  {/* Turning this into an arrow function
    function assignBaseField() {
      myArray.push('What do you want to do?')
    }
  */}
  const assignBaseField = () => prompts.push('What do you want to do?');



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setInputs([...inputs, inputValue]);
      if (isCompleted()) {
        x();
      }
      setInputValue('');
      setCurrentPrompt(currentPrompt + 1);
      if (currentPrompt < propmts.length - 1) {
        document.getElementById('input-field').placeholder = propmts[currentPrompt + 1];
      } else {
        document.getElementById('input-field').placeholder = "";
        onComplete(inputs); // Call the onComplete callback with the entered values array
      }
    }
  };


  useEffect(() => {
    if (isItEmpty()) {
      assignBaseField();
    }

    document.getElementById('input-field').placeholder = propmts[currentPrompt];
    inputRef.current.focus();
  }, [currentPrompt]);

  return (
    <>
      <input ref={inputRef} id="input-field" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(event) => setInputValue(event.target.value)} />
    </>
  );
}

export default OneLine;
