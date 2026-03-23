export default function ProductCard(props){

    console.log(props.name)

    return(
        <div className="bg-red w-200">
          <h1 className="text-white bg-green">{props.name}</h1>
          <img src={props.image} alt={props.name}></img>
          <p>LKR {props.price}</p>
          <button>Buy Now</button>
        </div>
    )

}