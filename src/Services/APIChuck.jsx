import React, { useEffect, useState } from "react";
import axios from "axios";

const APIChuck = () => {
    const [names, setNames] = useState([]);
    const [category, setCategory] = useState("");

    function getCategories() {
        axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
            console.log(res);
            setNames(res.data);
        });
    }

    function getJokeFromCategory(category) {
        axios
            .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then((res) => {
                console.log(res);
                setCategory(res.data.value);
            });
    }

    useEffect(() => {
        getCategories();
        console.log(names);
    }, []);

    return (
        <div>
            <ul>
                {names.map((name, iter) => {
                    return (
                        <li key={"li" + iter}>
                            <a
                                href="#"
                                onClick={() => {
                                    // e.preventDefault();
                                    getJokeFromCategory(name);
                                }}
                                key={"a" + iter}
                            >
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p>{category}</p>
        </div>
    );
};

export default APIChuck;
