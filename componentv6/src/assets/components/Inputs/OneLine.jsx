import { useEffect, useRef } from "react";

function OneLine ({ prompts, onComplete }) {
  let inputs = []; // const [inputs, setInputs] = useState([]);
  let pivot = -1; // const [currentPrompt, setCurrentPrompt] = useState(0); // The pivot for traverse the array prompts
  const inputRef = useRef(null); // To get the input ref and focus it https://stackoverflow.com/questions/52125898/when-to-use-inputref-current-instead-of-this-inputref-react-js


  const isEmpty = () => prompts.length == 0;
  const assignBaseField = () => prompts.push('What do you want to do?');
  const ifEnter = (event) => event.key === 'Enter'
  const isCompleted = () => pivot == prompts.length;
  const setPlaceholder = () => inputRef.current.placeholder = prompts[pivot];

  const handleKeyDown = (event) => {
    if (!ifEnter(event)) return;
    if (isCompleted()) {
      // code for api
      // instead of this document.getElementById('input-field').placeholder = ""; just re-render the componen
    //OneLine.rule(inputs) // call the api method
      pivot = 0; // reset the pivot
      prompts.length = 0; // pop all the elements of prompts
      onComplete(inputs); // Call the onComplete callback with the entered values array
      assignBaseField();
      return;
    }

    pivot++;
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
      <input ref={inputRef} id="input-field" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(event) => setInputValue(event.target.value)} />
    </>
  );
}

export default OneLine;
