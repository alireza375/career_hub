import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div>
            <Banner />
            <CategoryList />
            <FeaturedJob />
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;