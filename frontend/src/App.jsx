import { useState } from 'react'
//import './styles/App.css'
import Header from './components/Header.jsx'
import MainPage from './components/MainPage.jsx'

function App() {
  return (
    <>
      <Header/>
      <MainPage />
    </>
  )
}


function Button(props){
  return(
    <button className="text-green-500 border-solid border-cyan-600" onClick={props.onClick}>{props.text}</button>
  )
}

export default App
