import { useState, useEffect, useRef } from "react";

function OneLine ({ myArray }) {
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
        alert(`You've completed all the prompts! Here are your inputs:\n${inputs.join("\n")}`);
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






{/*
  import { useState, useEffect, useRef } from "react";
  
  const allowedCharactersPattern = /^[a-zA-ZäöüÄÖÜßñÑàèéìíòóùúÀÈÉÌÍÒÓÙÚ가-힣ㄱ-ㅎㅏ-ㅣ一-龥ぁ-んァ-ン]*$/;

function OneLine({ myArray }) {
  const [inputs, setInputs] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    document.getElementById('input-field').placeholder = myArray[currentPrompt];
    inputRef.current.focus();
  }, [currentPrompt, myArray, currentPrompt]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Check if the input value matches the allowed characters pattern
      if (allowedCharactersPattern.test(inputValue)) {
        setInputs([...inputs, inputValue]);
        setInputValue('');
        setCurrentPrompt(currentPrompt + 1);
        if (currentPrompt < myArray.length - 1) {
          document.getElementById('input-field').placeholder = myArray[currentPrompt + 1];
        } else {
          document.getElementById('input-field').placeholder = "";
          alert(`You've completed all the prompts! Here are your inputs:\n${inputs.join("\n")}`);
        }
      } else {
        // Alert or handle invalid input
        alert("Invalid characters detected. Please enter only allowed characters.");
      }
    }
  };
  */}
