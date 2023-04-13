import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import DogsRegistry from './components/DogsRegistry'

const apiURL = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';

async function fetchData(api, setSample, setData){
    const response = await fetch(api);
    //console.log("response: ", response);

    const data = await response.json();
    //console.log("data: ", data);

    const record = data.record;

    //console.log("Array with: ", record.length, "items");
    const random = randomDog(record);

    setSample(record[random]);
    setData(record);
    //console.log("first dog: ", record[random].name, typeof random);

    //this works
    /* record.forEach( item =>{
        console.log(item.name)
    }); */
}
function randomDog(record){
  const random = Math.floor(Math.random() * record.length);
  return random;
};


function App() {
  //for the HomePage component
  const [sample, setSample] = useState([]);
  //for the DogRegistry component
  const [data, setData] = useState(null);

  //const [dogs, setDogs] = useState(null);
    
    useEffect( ()=>{
        fetchData(apiURL, setSample, setData);
        
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage sample={sample}/> }/>
        <Route path='/registry' element={ 
          <DogsRegistry data={data}/> }/>
      </Routes>

    </div>
  );
}

export default App
