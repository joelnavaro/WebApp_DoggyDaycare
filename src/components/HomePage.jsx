import { Link } from "react-router-dom";


const HomePage = ()=>{
    //this shows the HomePage with all its components
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

