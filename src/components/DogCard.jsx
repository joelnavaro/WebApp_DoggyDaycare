


const DogCard = (props)=>{
    const dog = props.dog;

    if (dog != null){
        //for(item in props.dog.owner){};
        return(
            <div>
                {/* nombre, sexo, presente, etc */}
                <h2>{props.dog.name}</h2>
                <h2>{props.dog.id}</h2>
                <img src={props.dog.img} alt={props.dog.chipNumber} />
                <h2>{props.dog.breed}</h2>
                {/* {owner} */}
            </div>
        )
    }else{
        console.log("card state is null");
    }
}
export default DogCard