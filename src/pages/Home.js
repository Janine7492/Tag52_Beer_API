import HomeComp from "../components/homeComp/HomeComp";
import BeerShelf from "../assets/img/christin-hume-08tX2fsuSLg-unsplash.png";
import BeerGlas from "../assets/img/proriat-hospitality-flENqflm6xU-unsplash.png";

function Home() {
    return (
        <section>
            <HomeComp
                link={"/uebersicht"}
                img={BeerShelf}
                title={"All Beers"}
            />
            <HomeComp
                link={"./random"}
                img={BeerGlas}
                title={"Random Beer"}
            />
        </section>
    );
};

export default Home;