import OneLine from './assets/components/Input/OneLine.jsx'

function App() {
  var myArray = [1, 2, 'I`m the third', 4, 5];

  return (
    <>
      <h1>Welcome to TechFix Sandy!!</h1>
      <br /> <br />
      <OneLine myArray={myArray} /> 
    </>
  )
}

export default App
