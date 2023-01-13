import "./HomeComp.css";
import { Link } from "react-router-dom";



function HomeComp(props) {
    return (
        <article className="homeComp">
            <Link to={props.link}>
                <img src={props.img} />
                <h1 className="homeTitle">{props.title}</h1>
                <p className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
            </Link>
        </article>
    );
}

export default HomeComp;