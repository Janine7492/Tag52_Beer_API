import "./DetailsCard.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/img/Back.svg";


function DetailsCard(props) {

    return (
        <div>
            <img className="detailImg" src={props.imgURL} alt={props.name}></img>
            <article className="detailsPageCard">
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <article className="grey">
                    <p>First brewed</p>
                    <p>{props.firstBrewed}</p>
                </article>
                <article className="grey">
                    <p>Attenuation Level</p>
                    <p >{props.level}</p>
                </article>
                <p className="detailsText">{props.description}</p>
                <Link to={props.link} className="returnButton"><img src={Arrow} alt="Arrow to the left" /></Link>
            </article>
        </div>
    );
};

export default DetailsCard;