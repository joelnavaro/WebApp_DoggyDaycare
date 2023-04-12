

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
        //it doesnt iterate through, better with a single card
        /* const content = data[0].map( (dog, index)=>{
            <div key={index}>
                <img src={dog.img} alt={dog.chipNumber}/>
            </div>
        } );
        container.push(content); */
        data.forEach( dog => {
            const img = <div>
                <img src={dog.img} alt={dog.chipNumber}/>
                </div>
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