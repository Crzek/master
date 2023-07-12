import { Resaltado } from "./ResaltadoStyle";

const Teatro = ({ todos, lista, numero }) => {
    function encontrar() {
        const elementoEncontrado = lista.find((elemento, iter) => {
            if (numero === iter) {
                return elemento;
            }
        });
        return elementoEncontrado;
    }

    return (
        <div>
            {todos ? (
                lista.map((elemento, iter) => {
                    if (iter === numero) {
                        return (
                            <Resaltado key={`elemento${iter}`}>
                                {elemento}
                            </Resaltado>
                        );
                    } else {
                        return <p key={`elemento${iter}`}>{elemento}</p>;
                    }
                })
            ) : (
                <p>{encontrar()}</p>
            )}
        </div>
    );
};

export default Teatro;
