import { Link } from "react-router-dom";


const DogsRegistry = ()=>{

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
            </div>

        </div>


    );
}

export default DogsRegistry