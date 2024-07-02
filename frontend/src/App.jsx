import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import CVForm from './components/CVForm'

function App() {
  const [count, setCount] = useState(0)

  const buttonClick=()=>{
    setCount((count+1));
  }

  return (
    <>
      <Button onClick={buttonClick} text="Hello world" />
      <DisplayCnt count={count}/>
      <CVForm />
    </>
  )
}

function DisplayCnt({count}){
  return(
    <div>{count}</div>
  )
}

function Button(props){
  return(
    <button className="text-green-500 border-solid border-cyan-600" onClick={props.onClick}>{props.text}</button>
  )
}

export default App
