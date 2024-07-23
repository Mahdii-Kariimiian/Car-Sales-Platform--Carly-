import Hero from "../Home/Components/Hero";
import CarStyleList from "../Home/Components/CarStyleList";
import SellerBuyer from "../Home/Components/SellerBuyer";
import LatestCars from "../Home/Components/LatestCars";
import ContactUs from "../Home/Components/ContactUs";

const Index = () => {
    return (
        <div>
            <Hero />
            <CarStyleList />
            <LatestCars />
            <SellerBuyer />
            <ContactUs />
        </div>
    );
};

export default Index;
