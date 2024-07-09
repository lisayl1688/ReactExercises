import "./Pet.css"

interface petArray {
    
    name: string,
    species: string,
    habitat: string,
    lifespan: number,
    diet: string,
    funFacts: string[],
    emoji:string

}


const Pet: React.FC<petArray> = (props) =>{
    return ( 
        <div className="petArrangement">
        <div>{props.emoji}</div>
        <h4>{props.name}</h4>
        <p>{props.species}</p>
        <p>{props.habitat}</p>
        <p>{props.diet}</p>
        <p>{props.lifespan}</p>
        <ul>
            {props.funFacts.map((item, index) => (
                       
                <li key ={index}>{item}</li>
                    
                ))}
        </ul>

    </div>
     );
}
 
export default Pet;