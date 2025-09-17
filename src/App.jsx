
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import { Suspense } from 'react';

const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const FetchFriends=async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users');
return res.json();


}
function App() {

  const friendsPromise= FetchFriends();
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

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friendss are coming for treats....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

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
