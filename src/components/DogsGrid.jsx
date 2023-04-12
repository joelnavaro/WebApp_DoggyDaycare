

function getImages(array, container){

    for(const item in array){
        const img = <img src={item.img} alt={item.chipNumber}/>
        container.push(img)

        console.log("what: ",container.length);

    };
    return ;
};

const DogsGrid = (props) =>{
    const data = props.data;
    const container = [];

    if(data != null){
        data.forEach( dog => {
            const img = <img src={dog.img} alt={dog.chipNumber}/>
            container.push(img)
        });
    }
    

    //const images = getImages(data, container);
    console.log("inside component", data);


    return(
        <div>
            {container}
        </div>

    );
    
}

export default DogsGrid;