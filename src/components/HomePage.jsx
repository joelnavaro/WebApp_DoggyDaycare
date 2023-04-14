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
    }
    
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


export default HomePage;

