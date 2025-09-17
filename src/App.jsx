
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
function App() {

  const handleClick2=()=>{
    alert('you are a goat');
  }

  const handleClick3=(num)=>{

    const newNumber=num+5;
    alert(newNumber);
  }
  
  return (
    <>
      
      <h1>Vite + React</h1>

      <Batsman></Batsman>
     {/* <button onclick="handleClick()">Click me</button> */}
     {/* <button onClick={handleClick}>Click me</button> */}
     <button onClick={function handleClick(){
        alert('I am clicked');
      }
     }>Click me</button>
     <br />

     <button onClick={handleClick2}>Find yourself</button>
     <button onClick={()=>handleClick3(6)}>Click</button>

     <Counter></Counter>
    </>
  )
}

export default App
