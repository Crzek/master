import { useState } from "react";
import Teatro from "./components/Teatro";
import teatroJSON from "./assets/data/teatro.json";
import Botones from "./components/Botones";

const AppTeatro = () => {
    const [numero, setNumero] = useState(0);
    const [estado, setEstado] = useState(false);
    console.log("numero", numero);

    return (
        <div>
            <Botones
                numero={numero}
                setNumero={setNumero}
                maxLista={teatroJSON.length}
            ></Botones>
            <button
                type="button"
                onClick={(e) => {
                    console.log(estado);

                    if (estado) {
                        setEstado(false);
                        e.target.textContent = "Todos";
                    } else {
                        setEstado(true);
                        e.target.textContent = "Unico";
                    }
                }}
            >
                Todos
            </button>
            <Teatro todos={estado} lista={teatroJSON} numero={numero}></Teatro>
        </div>
    );
};

export default AppTeatro;
