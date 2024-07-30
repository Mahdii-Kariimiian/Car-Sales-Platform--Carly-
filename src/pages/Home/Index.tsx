import Hero from "./components/Hero";
import CarStyleList from "./components/CarStyleList";
import SellerBuyer from "./components/SellerBuyer";
import LatestCars from "./components/LatestCars";
import ContactUs from "./components/Contact";

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
