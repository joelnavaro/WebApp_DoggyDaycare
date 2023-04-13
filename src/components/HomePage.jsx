import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import DogsGrid from "./DogsGrid";
import './homepage.css';



const HomePage = (props)=>{
    /* const [dogs, setDogs] = useState(null);
    
    useEffect( ()=>{
        fetchData(apiURL, setDogs);
        
    }, []); */

    return(
        <div className="homepage">
            <h1>Doggy Daycare</h1>
            <section className="homemenu">
                <Link to='/registry'>
                    <button>Dog Registry</button>
                </Link>
            </section>
            <DogCard dog={props.sample} />
            <footer>
                footer some links to go back somewhere
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

