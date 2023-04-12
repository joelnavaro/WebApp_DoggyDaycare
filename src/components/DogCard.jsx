


const DogCard = (props)=>{

    if (props.dog == null){
        console.log("card state is null")
    }else{
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
        );
        }
}
export default DogCard