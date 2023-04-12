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
        <div>
            <h2>Registered Dogs</h2>
            <section>
                section All buttons back and so
                <Link to='/'>
                    <button>Home</button>
                </Link>
            </section>
            <div>
                div All the dogs in miniature
                <DogsGrid data={props.data}/>
            </div>

        </div>


    );
}

export default DogsRegistry;