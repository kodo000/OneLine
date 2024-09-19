import { useState, useEffect, useRef } from "react";

function OneLine ({ myArray, onComplete }) {
  const [inputs, setInputs] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    document.getElementById('input-field').placeholder = myArray[currentPrompt];
    inputRef.current.focus();
  }, [currentPrompt]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputs([...inputs, inputValue]);
      setInputValue('');
      setCurrentPrompt(currentPrompt + 1);
      if (currentPrompt < myArray.length - 1) {
        document.getElementById('input-field').placeholder = myArray[currentPrompt + 1];
      } else {
        document.getElementById('input-field').placeholder = "";
        onComplete(inputs); // Call the onComplete callback with the entered values array
      }
    }
  };

  return (
    <>
      <input ref={inputRef} id="input-field" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyPress={handleKeyPress} />
    </>
  );
}

export default OneLine;
