import { useState } from "react";
import { useEffect } from "react";

function Input () {
  const [prompts, setPrompts] = useState(["Please Enter the Identificacion Number", "Please Enter the Name", "Please Enter the Last Name"]);
  const [inputs, setInputs] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    document.getElementById('input-field').placeholder = prompts[currentPrompt];
  }, [currentPrompt]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputs([...inputs, inputValue]);
      setInputValue('');
      setCurrentPrompt(currentPrompt + 1);
      if (currentPrompt < prompts.length - 1) {
        document.getElementById('input-field').placeholder = prompts[currentPrompt + 1];
      } else {
        document.getElementById('input-field').placeholder = "";
        alert(`You've completed all the prompts! Here are your inputs:\n${inputs.join("\n")}`);
      }
    }
  };

  return (
    <input id="input-field" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyPress={handleKeyPress}
    />
  );

}

export default Input
