import { useState, useEffect } from "react";

function OneLine ({ myArray }) {
  const [inputs, setInputs] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    document.getElementById('input-field').placeholder = myArray[currentPrompt];
  }, [currentPrompt]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputs([...inputs, inputValue]);
      setInputValue('');
      setCurrentPrompt(currentPrompt + 1);
      if (currentPrompt < myArray.length - 1) {
      {/* if (currentPrompt < myArray.length)  if this it will need an extra enter or sayed other way it will require another input that will a useless one */}
        document.getElementById('input-field').placeholder = myArray[currentPrompt + 1];
      } else {
        document.getElementById('input-field').placeholder = "";
        alert(`You've completed all the prompts! Here are your inputs:\n${inputs.join("\n")}`);
      }
    }
  };

  return (
    <>
    <input id="input-field" type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyPress={handleKeyPress} />
    </>
  );

}

export default OneLine;
