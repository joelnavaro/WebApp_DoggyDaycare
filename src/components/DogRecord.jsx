import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './dogrecord.css';


//setDog, selected
function getImg(data, selected){

    const imgSection = [];
    

    const test = ()=>{
        if (selected != null){
            return true
        }else{
            return false
        }
    }

    //console.log("selected: ", selected)
    if(data != null){
        /* const dogImg = data[index].img;
        const dogName = data[index].name; */
        const index = randomDog(data);

        const dogImg = data[test ? selected : index].img;
        const dogName = data[test ? selected : index].name;

        const img = <div className="dogimg">
            <h2>{dogName}</h2>
            <img src={dogImg} alt="missing pic"/>
        </div>

        imgSection.push(img);
    }
    console.log("image: ", imgSection.length)
    /* const dog = {
        img : dogImg,
        name : dogName
    } */

    return imgSection;

};

//setDetails, selected
function getDtl(data, selected){
    const dtlSection = [];
    
    const test = ()=>{
        if (selected != null){
            return true
        }else{
            return false
        }
    }

    if(data != null){
        const index = randomDog(data);

        /* const dogSex = data[index].sex;
        const dogbreed = data[index].breed;
        const present = data[index].present; 
        const age = data[index].age;
        const chipNumber= data[index].chipNumber;
        const owner = data[index].owner.name; */

        const dogSex = data[test ? selected : index].sex;
        const dogbreed = data[test ? selected : index].breed;
        const present = data[test ? selected : index].present; 
        const age = data[test ? selected : index].age;
        const chipNumber= data[test ? selected : index].chipNumber;
        const owner = data[test ? selected : index].owner.name;

        const dtl = <div className="dogdtls">
            <h2>Owner: {owner}</h2>
            <h2>Present:{present ? " With us today!" : " Not here today!"}</h2>
            <h2>Age: {age}</h2>
            <h2>Breed: {dogbreed}</h2>
            <h2>Sex: {dogSex}</h2>
            <h2>Chip Number: {chipNumber}</h2>
        </div>

        dtlSection.push(dtl);
    }
    console.log("dtl: ", typeof dtlSection)

    return dtlSection;
    
};
function randomDog(record){
    const random = Math.floor(Math.random() * record.length);
    return random;
};

const DogRecord=(props)=>{
    //const [dog, setDog] = useState([]);
    const data = props.data;

    const params = useParams();
    let id = 0;

    if('id' in params && data != null){
        if (params.id > 0 && params.id <= data.length){
            id = Number(params.id);
        };
    };
    

    /* useEffect (()=>{
        if(data != null){
            const currentDog = randomDog(data);
            setDog(currentDog);
        };
        
    }, []);  */

    
    //const id = Number(params.id);

    const imgSection = getImg(data, id);
    const dtlSection = getDtl(data, id);
        
    

    /* const imgSection = getImg(data);
    const dtlSection = getDtl(data); */


    return(
        <div className="recordcomponent">

            <section className="homemenu">
                <Link to='/'>
                    <button className="btn">Home</button>
                </Link>
                <Link to='/registry'>
                    <button className="btn">Dog Registry</button>
                </Link>
            </section>

            <div className="sections">
                <section>{imgSection}</section>
                <section>{dtlSection}</section>
            </div>
        </div>

    );

}

export default DogRecord;