import OneLine from './assets/components/Input/OneLine.jsx';

function App() {
  const prompts = [];

  const handleComplete = (enteredValues) => {
    alert(`You've completed all the prompts! Here are your answers:\n${enteredValues.join("\n")}`);
  };

  return (
    <OneLine prompts={prompts} onComplete={handleComplete} />
  );
}

export default App
