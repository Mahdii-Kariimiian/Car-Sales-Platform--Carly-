import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Home/Index";
import SingleCar from "./pages/single car/SingleCar";


function App() {
    return (
        <div className="px-[95px] py-6 text-main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Index />} />
                        <Route path="/singlecar" element={<SingleCar />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
