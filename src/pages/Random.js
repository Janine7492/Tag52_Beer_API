import DetailsCard from "../components/detailsCard/DetailsCard";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";


function Random() {
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(data => {
                setBeer(data);
                console.log(data);
            });
    }, []);


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
                link={"/"}
            />
            <Navbar />
        </>
    );
};

export default Random;