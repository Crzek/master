import { useState } from "react";
import { RotateIMG, FlechaImg } from "./WorkoutStyles";
import workouts from "../assets/ejercicio/assets/data/workouts";

const BtnEjercicio = ({
    flecha,
    iterador,
    Flex,
    setIterador,
    workOuts,
    selectwork,
    setSelectwork,
}) => {
    function Next() {
        console.log(workOuts[iterador]);
        if (workOuts[iterador].exercises.length !== iterador + 1) {
            setIterador(iterador + 1);
        }
    }
    function preview() {
        if (1 !== iterador + 1) {
            setIterador(iterador - 1);
        }
    }
    return (
        <Flex>
            <FlechaImg
                src={flecha}
                alt="imagen atras"
                onClick={() => {
                    preview();
                }}
            />
            <select
                name="workOut"
                id="work"
                onChange={(e) => {
                    console.log("chnge", typeof e.target.value);
                    console.log(e.target.textContent);
                    if (e.target.value === "0") {
                        setSelectwork(workOuts[0]);
                    } else if (e.target.value === "1") {
                        setSelectwork(workOuts[1]);
                    } else if (e.target.value === "2") {
                        setSelectwork(workOuts[2]);
                    }
                }}
            >
                {workOuts.map((work, iter) => {
                    return (
                        <option key={work.title} value={iter}>
                            {work.title}
                        </option>
                    );
                })}
            </select>

            <RotateIMG
                src={flecha}
                alt="imagen Adelante"
                onClick={() => {
                    Next();
                }}
            />
        </Flex>
    );
};
export default BtnEjercicio;
