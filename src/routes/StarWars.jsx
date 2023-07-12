import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wars from "../components/Wars";
import NotFound from "../components/NotFound";
import Personaje from "../components/Personaje";

// require("dotenv").config();
// const URL_Path = process.env.URL;
const URL = "/personaje";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wars />} />
                <Route path="*" element={<NotFound />} />
                <Route path={URL + "/:id"} element={<Personaje />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
