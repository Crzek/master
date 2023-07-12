import { Btn } from "./BotoneStyle";

const Botones = ({ numero, setNumero, maxLista }) => {
    function hacer(target) {
        console.log(target.textContent);
        if (target.textContent === "Prev" && numero > 0) {
            setNumero(numero - 1);
        } else if (target.textContent === "Next" && numero < maxLista - 1) {
            setNumero(numero + 1);
        } else if (target.textContent === "Prev" && numero === 0) {
            setNumero(maxLista - 1);
        } else if (target.textContent === "Next" && numero === maxLista - 1) {
            setNumero(0);
        }
    }

    return (
        <div>
            <Btn
                onClick={(e) => {
                    console.log(e);
                    hacer(e.target);
                }}
            >
                Prev
            </Btn>
            <Btn
                onClick={(e) => {
                    hacer(e.target);
                }}
            >
                Next
            </Btn>
        </div>
    );
};

export default Botones;
