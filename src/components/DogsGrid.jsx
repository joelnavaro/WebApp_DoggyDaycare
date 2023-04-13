import {useState} from "react";
import './registry.css';

const DogsGrid = (props) =>{
    const data = props.data;
    const container = [];

    if(data != null){
        //it doesnt iterate through, better with a single card
        /* const content = data[0].map( (dog, index)=>{
            <div key={index}>
                <img src={dog.img} alt={dog.chipNumber}/>
            </div>
        } ); //prueba () en vex de {}
        container.push(content); */
        data.forEach( (dog, index) => {
            const img = <img src={dog.img} alt={dog.chipNumber} key={index}/>;
                
            container.push(img);
        });
    }

    return(
        <div className="doggrid">
            {container}
        </div>

    );
    
}

export default DogsGrid;