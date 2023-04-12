import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import DogsGrid from "./DogsGrid";

/* //const apiURL = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';

async function fetchData(api, setState, setStateGrid){
    const response = await fetch(api);
    //console.log("response: ", response);

    const data = await response.json();
    //console.log("data: ", data);

    const record = data.record;

    //console.log("Array with: ", record.length, "items");
    const random = Math.floor(Math.random() * record.length);

    setState(record[random]);
    //console.log("first dog: ", record[random].name, typeof random);

    //this works
    record.forEach( item =>{
        //console.log(item.name)
    });
} */

function getData(data){
    setDogs(data);
}

const HomePage = (props)=>{
    /* const [dogs, setDogs] = useState(null);
    
    useEffect( ()=>{
        fetchData(apiURL, setDogs);
        
    }, []); */

    return(
        <div>
            <h1>Doggy Daycare</h1>
            <section>
                Menu con botones
                <Link to='/registry'>
                    <button>Dog Registry</button>
                </Link>
            </section>
            <div>
                divcard with dog of the day
                <DogCard dog={props.sample} />
            </div>
            <footer>
                footersome links to go back somewhere
            </footer>

        </div>
    );
}

/* const data = async ()=>{
    const response = await fetch(apiURL);
    console.log("response: ", response);

    const data = await response.json();
    console.log("data: ", data);

    setDogs(data.record);
}; */

export default HomePage

