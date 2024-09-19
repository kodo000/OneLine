import OneLine from './assets/components/Inputs/OneLine.jsx';

function App() {
  // first try const prompts = [];
  const prompts = ['name', 'email', 'dni'];

  const handleComplete = (enteredValues) => {
    alert(`You've completed all the prompts! Here are your answers:\n${enteredValues.join("\n")}`);
  };

  return (
    <OneLine prompts={prompts} onComplete={handleComplete} />
  );
}

export default App
