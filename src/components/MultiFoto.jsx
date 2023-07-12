import React from "react";
import { ImgRed, ImgSmall } from "./WorkoutStyles";

const MultiFoto = (props) => {
    console.log(props);
    return (
        <>
            {props.fotosList.map((foto, i) => {
                if (props.iter === i) {
                    return (
                        <ImgRed
                            src={foto.img}
                            alt={foto.name}
                            key={`Foto-${i}`}
                        />
                    );
                }
                return (
                    <ImgSmall
                        src={foto.img}
                        alt={foto.name}
                        key={`Foto-${i}`}
                    />
                );
            })}
        </>
    );
};

export default MultiFoto;
