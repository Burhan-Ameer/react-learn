import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// today we are learning about hooks and this certain topic of hooks is usestate 
//  the use state is used to manipulate the actual dom to display the changes in the webpage

function App() {
//  here is how to use usestate 
let [ count, setcounter]=useState(12) // so what this code means is that count is a variable that is going to store the value passed bu use state function the setcounter function changes the value inside the count variable 
// Although we could use custom names of vaiable or functions that depends upoun you but to keep it as understandable as possible we dont do that
// always use the array of let or var try not to use const as it simply dont work


// let count=12;
  function increament(){
   
    // setcounter(count+1)
    //now what if i want to increament for more than one time you might say well thats easy use this setcounter method to increament but thats not simple look
    // setcounter(count+1)
    // this condition might be expressing that it is used for more than once  but it is  not beacuse this use state consider this call to function as single entitiy
    // but what we can do here is that 
    setcounter(prevcount=>prevcount+1)
    setcounter(prevcount=>prevcount+1)
    // now this statement is incrementing the number by two so  we can't just write some code and hope that it may or may not work  
    //  INTERVIEW QUESION IS ABOVE SO KEEP THAT ION MIND 
  
  // console.log( "hello ")
  }

  function decreamenet(){
    count--;
    if(count>=0)
    setcounter(count)
    // console.log( "hello ")
    } 

  return (
    <>
   <h1> hello this is vite plus react</h1>
   <h2>count :{count}</h2>
   <button onClick={increament}>add</button>
   <br />
   <button onClick={decreamenet}>subtract </button>
    </>
  )
}

export default App
