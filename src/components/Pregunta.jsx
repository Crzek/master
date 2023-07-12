import { useState } from "react";
import { Box, FlexBox, Img, InlineBlock } from "./PreguntaStyles";

const Pregunta = (p) => {
    const [iterador, setIterador] = useState(0);
    const pregunta = p.preguntas[iterador];

    function nextQuestion() {
        if (p.preguntas.length === iterador + 1) {
            p.setWinner(true);
        } else {
            setIterador(iterador + 1);
        }
    }

    function correct(right) {
        if (right) {
            nextQuestion();
        } else {
            setIterador(0);
        }
    }

    return (
        <Box>
            <h2>{`${iterador + 1}-${pregunta.question}`}</h2>
            <FlexBox>
                <InlineBlock>
                    {pregunta.answers.map((respuesta, iter) => {
                        return (
                            <p key={`res-${iter}`}>
                                <button
                                    type="button"
                                    onClick={() => correct(respuesta.isRight)}
                                >
                                    X
                                </button>
                                {respuesta.txt}
                            </p>
                        );
                    })}
                </InlineBlock>
                <Img src={pregunta.img} alt="" />
            </FlexBox>
        </Box>
    );
};

export default Pregunta;
