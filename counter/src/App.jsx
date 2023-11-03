import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {

 let [counter, setCounter]= useState(12)
  //  let counter=12

  const addValue= () => {

    if(counter !=20){
    counter= counter+1
    setCounter(counter)
  }
}
  
  const removeValue = () => {
    if(counter!=0){
    counter = counter-1
    setCounter(counter)
  }

}
  
  return (
    <>
      <h1>React with Arish</h1>
      <h3>Counter value {counter}</h3>
       
       <button
       onClick={addValue}
       >Add Value {counter}</button>
       <br />
       <button
       onClick={removeValue}>Remove Value{counter}</button>
      <br />
      <p>footer: {counter}</p>
    </>
  )
}

export default App
