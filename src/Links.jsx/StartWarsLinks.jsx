import React from "react";
import { Link } from "react-router-dom";
function StartWarsLinks() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/personaje">Personaje</Link>
                </li>
            </ul>
        </div>
    );
}

export default StartWarsLinks;
