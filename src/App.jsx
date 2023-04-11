import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import DogsRegistry from './components/DogsRegistry'

function App() {
  //const [currentScreen, setCurrentScreen] = useScreen();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/registry' element={ <DogsRegistry /> }/>
      </Routes>

    </div>
  );
}

export default App
