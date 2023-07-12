import { useState } from "react";
import questions from "./assets/data/questions";
import Pregunta from "./components/Pregunta";
import Popap from "./components/Popap";

function App() {
    const [winer, setWiner] = useState(false);

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const questionsRandom = shuffleArray(questions);
    console.log(questionsRandom);

    return (
        <div>
            {!winer ? (
                <Pregunta
                    preguntas={questionsRandom}
                    winner={winer}
                    setWinner={setWiner}
                ></Pregunta>
            ) : (
                <Popap display={"block"}></Popap>
            )}
        </div>
    );
}

export default App;
