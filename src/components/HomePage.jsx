import { useEffect } from "react";
import { Link } from "react-router-dom";

const apiURL = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';

async function fetchData(api){
    const data = await fetch(api);
    const response = await data.json();

    console.log("Response: ", response.record.length);
}

const HomePage = ()=>{
    //this shows the HomePage with all its components
    useEffect( ()=>{
        fetchData(apiURL);

    }, [])


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
            </div>
            <footer>
                footersome links to go back somewhere
            </footer>

        </div>
    );
}

export default HomePage

