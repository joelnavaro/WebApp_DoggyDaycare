import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import DogsRegistry from './components/DogsRegistry'
import DogRecord from './components/DogRecord'

const apiURL = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';

async function fetchData(api, setSample, setData){
    const response = await fetch(api);

    const data = await response.json();

    const record = data.record;

    const random = randomDog(record);

    setSample(record[random]);
    setData(record);
    
}
function randomDog(record){
  const random = Math.floor(Math.random() * record.length);
  return random;
};


function App() {
  
  const [sample, setSample] = useState([]);
 
  const [data, setData] = useState(null);
    
    useEffect( ()=>{
        fetchData(apiURL, setSample, setData);
        
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage sample={sample} data={data}/> }/>
        <Route path='/registry' element={ 
          <DogsRegistry data={data}/> }/>
        <Route path='/dogrecord' element={<DogRecord data={data}/>}/> 
        <Route path='/dogrecord/:id' element={<DogRecord data={data}/>}/> 
        {/* route to owners contact list */}
      </Routes>

    </div>
  );
}

export default App
