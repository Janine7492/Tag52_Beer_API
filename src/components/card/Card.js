import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <section className="beerCard">
            <img src={props.imgURL} alt={props.name}></img>
            <article className="beerCardInfoSec">
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created By {props.contributed}</p>
                <Link to={`/details/${props.id}`}>Details</Link>
            </article>
        </section>
    );
};

export default Card;