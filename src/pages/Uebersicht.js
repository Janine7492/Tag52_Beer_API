import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";


function Uebersicht() {
    const [beerItems, setBeerItem] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(BeerArray => {
                setBeerItem(BeerArray);
            });
    }, []);

    return (
        <div>
            {beerItems.map((item) => {
                return <Card
                    alt={item.name}
                    imgURL={item.image_url}
                    name={item.name}
                    tagline={item.tagline}
                    contributed={item.contributed_by}
                    key={item._id}
                    id={item._id}
                />;
            })}
            <Navbar />
        </div >
    );
}

export default Uebersicht;