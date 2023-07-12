import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
            setName(res.data.name);
        });
    }, []);

    return <div>{name}</div>;
};
export default App;
