import { useEffect, useState } from "react";
import { getStar, getImg2 } from "../Services/StarWars";
import { FlexRow, ImgSmall } from "../styles/StarWars";
import { Link } from "react-router-dom";

const Wars = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        getStar().then((res) => {
            console.log("res", res);
            setPersonajes(res.results);
        });
        // const fetchChars = async () => {
        //     const data = await getStar();
        //     setPersonajes(data.results);

        //     console.log("chars", personajes);
        //     // getStar();
        // };
        // fetchChars();
    }, []);

    return (
        <FlexRow>
            {personajes &&
                personajes.map((char, iter) => {
                    const imagen = getImg2(iter + 1);
                    return (
                        <div key={`foto${iter}`}>
                            <Link to={`/personaje/${iter + 1}`}>
                                <ImgSmall
                                    src={imagen}
                                    alt={`Foto ${char.name}`}
                                />
                                <h2>{char.name}</h2>
                            </Link>
                        </div>
                    );
                })}
        </FlexRow>
    );
};

export default Wars;
