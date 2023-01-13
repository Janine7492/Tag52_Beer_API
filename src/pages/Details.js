import { useParams } from "react-router-dom";
import DetailsCard from "../components/detailsCard/DetailsCard";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";


function Details() {
    const [beer, setBeer] = useState([]);
    const id = useParams().id;
    console.log("ID: ", id);

    // console.log(beer);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => response.json())
            .then(data => {
                setBeer(data);
                console.log(data);
            });
    }, []);

    // console.log(params);
    console.log(beer);




    return (
        <>
            <DetailsCard
                alt={beer.name}
                imgURL={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
                level={beer.attenuation_level}
                key={beer._id}
                description={beer.description}
                link={"/uebersicht"}
            />
            <Navbar />
        </>
    );
}

export default Details;