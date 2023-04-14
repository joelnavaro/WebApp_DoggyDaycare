import { Link } from "react-router-dom";
import DogsGrid from "./DogsGrid";



const DogsRegistry = (props)=>{
    /* const [grid, setGrid] = useState(null);

    const dogsGrid =  ()=>(
        grid.forEach( item =>{
            <DogsGrid dogs={item}>{item.name}</DogsGrid>
        })
    );  */

    return(
        <div className="registrycomp">
            <h1>Registered Dogs</h1>
            <section className="registrymenu">
                <Link to='/'>
                    <button className="btn">Home</button>
                </Link>
                <Link to='/dogrecord'>
                    <button className="btn">Dog</button>
                </Link>
            </section>
            <DogsGrid data={props.data}/>
        </div>
    );
}

export default DogsRegistry;