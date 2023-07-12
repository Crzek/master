import React from "react";

const BotonesStarWars = ({ numChar }) => {
    const botones = [];

    for (let index = 0; index < numChar; index++) {
        botones.push(
            <button type="button" key={index + 1}>
                {index + 1}
            </button>
        );
    }

    return <div>{botones}</div>;
};

export default BotonesStarWars;
