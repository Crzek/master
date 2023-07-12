import React, { useState } from "react";
import Ejercicios from "./components/Ejercicios";
import BtnEjercicio from "./components/BtnEjercicio";
import WORKOUT from "./assets/ejercicio/assets/data/workouts";
import Flecha from "./assets/ejercicio/assets/img/flecha.png";
import {
    Flex,
    RotateIMG,
    Global,
    Row,
    Column,
    MiniFotos,
} from "./components/WorkoutStyles";
import MultiFoto from "./components/MultiFoto";

const AppEjercicio = () => {
    const [iterador, setIterador] = useState(0);
    const [selectwork, setSelectwork] = useState(WORKOUT[iterador]);
    const exercisesList = selectwork.exercises;
    const selectExercise = exercisesList[iterador];
    console.log("Todo", WORKOUT);
    console.log("lista eje", exercisesList);
    console.log("Ex", selectExercise);

    return (
        <>
            <Global />
            <Column className="Flex">
                <div className="SmallFlex">
                    <BtnEjercicio
                        flecha={Flecha}
                        iterador={iterador}
                        setIterador={setIterador}
                        Flex={Flex}
                        workOuts={WORKOUT}
                        selectwork={selectwork}
                        setSelectwork={setSelectwork}
                    ></BtnEjercicio>
                </div>
                <Row>
                    <Ejercicios
                        iter={iterador}
                        className="Ejercicio"
                        exercise={selectExercise}
                    ></Ejercicios>
                    <MiniFotos width={500}>
                        <MultiFoto
                            fotosList={exercisesList}
                            iter={iterador}
                        ></MultiFoto>
                    </MiniFotos>
                </Row>
            </Column>
        </>
    );
};

export default AppEjercicio;



import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={Component} />
        </Routes>
    </BrowserRouter>
);

export default Router;