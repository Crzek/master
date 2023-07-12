import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStar, getImg2 } from "../Services/StarWars";
import { FlexRow } from "../styles/StarWars";

const Personaje = () => {
    const params = useParams();
    const [personaje, setPersonaje] = useState();
    console.log(params);

    useEffect(() => {
        getStar(params.id).then((person) => {
            console.log("resP", person);
            setPersonaje(person);
        });
        // const felch = async () => {
        //     setPersonaje(await getStar(params.id));
        //     console.log(personaje);
        // };
        // felch();
    }, [params.id]);

    if (!personaje) {
        return (
            <div>
                <h2>Cargando Personaje....</h2>
            </div>
        );
    } else {
        return (
            <FlexRow>
                {console.log(personaje)}
                <div>
                    <h2>{personaje.name}</h2>
                    <p>Height: {personaje.height}</p>
                    <p>Gender: {personaje.mass}</p>
                    <p>Hair: {personaje.hair_color}</p>
                    <p>Skin: {personaje.skin_color}</p>
                    <div>
                        <h3>StarShips</h3>
                        {personaje.starships &&
                            personaje.starships.map((ship, iter) => {
                                return (
                                    <ul key={`lista ship ${iter}}`}>
                                        <li>
                                            <a href="#">{ship}</a>
                                        </li>
                                    </ul>
                                );
                            })}
                    </div>
                    <div>
                        <h3>species</h3>
                        {personaje.species &&
                            personaje.species.map((specie, iter) => {
                                return (
                                    <ul key={`lista species ${iter}`}>
                                        <li>
                                            <a href="#">{specie}</a>
                                        </li>
                                    </ul>
                                );
                            })}
                    </div>
                    <div>
                        <h3>Vehicles</h3>
                        {personaje.vehicles &&
                            personaje.vehicles.map((vehicle, iter) => {
                                return (
                                    <ul key={`lista vehiculos ${iter}`}>
                                        <li>
                                            <a href="#">{vehicle}</a>
                                        </li>
                                    </ul>
                                );
                            })}
                    </div>
                </div>
                <div>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                        alt={`Foto` + personaje.name}
                    />
                </div>
            </FlexRow>
        );
    }
};

export default Personaje;
