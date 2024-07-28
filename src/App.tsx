import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./Pages/Home/Index";
import SingleCar from "./Pages/SingleCar/SingleCar";
import AllCars from "./Pages/AllCars/AllCars";
import ScrollToTop from "./Components/General/ScrollToTop";
import AddOrEdit from "./Pages/AddOrEditCars/Index";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/About/AboutUs";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Index />} />
                        <Route
                            path="/listingcars/singlecar/:id"
                            element={<SingleCar />}
                        />
                        <Route path="/listingcars" element={<AllCars />} />
                        <Route
                            path="/listingcars/:type"
                            element={<AllCars />}
                        />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                    </Route>
                    <Route path="addcar" element={<AddOrEdit />} />
                    <Route path="editcar/:id" element={<AddOrEdit />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
