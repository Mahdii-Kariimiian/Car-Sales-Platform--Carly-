import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Home";
import SingleCar from "./pages/SingleCar";
import AllCars from "./pages/AllCars";
import ScrollToTop from "./components/general/scrollToTop";
import AddOrEdit from "./pages/AddOrEditCars";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Index />} />
                        <Route
                            path="/allcars/singlecar/:id"
                            element={<SingleCar />}
                        />
                        <Route path="/allcars" element={<AllCars />} />
                        <Route
                            path="/allcars/:type"
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
