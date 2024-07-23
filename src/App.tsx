import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./Pages/Home/Index";
import SingleCar from "./Pages/SingleCar/SingleCar";
import AllCars from "./Pages/AllCars/AllCars";
import ScrollToTop from "./Components/General/ScrollToTop";

function App() {
    return (
        <div className="text-main">
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
