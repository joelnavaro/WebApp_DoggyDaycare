import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import './homepage.css';



const HomePage = (props)=>{
    const [dogs, setDogs] = useState(0);
    const number = props.data;
    const present = [];
    
    
    if(number!=null){
        for(const x of number){
            if(x.present){
                present.push(x);
            }
        }
        //console.log("present in", present.length, typeof present.length);
    }
    //console.log("present out", present.length);
    
    useEffect( ()=>{
        setDogs(present.length);
    }, []);
    

    return(
        <div className="homepage">
            <div>
                <h1>Doggy Daycare</h1>
                
                <section className="homemenu">
                    <Link to='/registry'>
                        <button>Dog Registry</button>
                    </Link>
                    <Link to='/dogrecord'>
                        <button>Dog</button>
                    </Link>
                </section>
                <section>
                    Today we have {dogs} dogs at the daycare!
                </section>
            </div>

            <DogCard dog={props.sample} />

            <footer>
                {/*  */}
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

export default HomePage;

