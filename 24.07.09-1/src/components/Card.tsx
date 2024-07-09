import "./Card.css"

interface cardArray {
    title: string,
    price: string,
    img: string,

}

const Card: React.FC<cardArray> = (props) => {

    return ( 
        <div className="cardArrangement">
            <img src={props.img} alt="pictures" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>Buy Now</button>

        </div>
     );
}
 
export default Card;


