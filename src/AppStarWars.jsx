import Wars from "./components/Wars";
import Router from "./routes/StarWars";
import { BrowserRouter } from "react-router-dom";

const AppStarWars = () => {
    return (
        <Router>
            <Wars></Wars>
        </Router>
    );
};

export default AppStarWars;
