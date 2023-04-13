import {useState} from "react";
import './registry.css';

const DogsGrid = (props) =>{
    const data = props.data;
    const container = [];

    if(data != null){
        //it doesnt iterate through, better with a single card
        const content = data.map( (dog, index)=>(
            <div className="dog" key={index}>
                <img src={dog.img} alt="missing pic" />
                <br />
                <label>{dog.name}</label>
            </div>
        ) );
        container.push(content);
        /* data.forEach( (dog, index) => {
            const img = <img src={dog.img} alt={dog.chipNumber} key={index}/>;
                
            container.push(img);
        }); */
    }

    return(
        <div className="dogscontainer">
            <h2>All our beautiful friends!!</h2>
            <div className="doggrid">
                {container}
            </div>
        </div>

    );
    
}

export default DogsGrid;