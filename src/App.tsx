import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Home/Index";
import SingleCar from "./pages/single car/SingleCar";
import AllCars from "./pages/all cars/AllCars";

function App() {
    return (
        <div className="text-main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Index />} />
                        <Route path="/listingcars/singlecar/:id" element={<SingleCar />} />
                        <Route path="/listingcars" element={<AllCars />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
