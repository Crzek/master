import React from "react";
import { ImgBig } from "./WorkoutStyles";

const Ejercicios = ({ exercise, iter }) => {
    return (
        <div>
            <h4>{iter + 1 + "-" + exercise.name}</h4>
            <p>{exercise.reps}</p>
            <ImgBig src={exercise.img} alt="Foto work" />
        </div>
    );
};

export default Ejercicios;
