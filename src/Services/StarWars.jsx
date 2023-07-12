import axios from "axios";

export const getStar = async (personaje = "") => {
    try {
        const res = await axios.get(
            `https://swapi.dev/api/people/${personaje}`
        );
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const newRequest = async (link) => {
    try {
        const res = await axios.get(link);
        return res;
    } catch (err) {
        console.log("El error es:", err);
    }
};

export const getStar2 = async () => {
    try {
        const v = await axios.get("https://swapi.dev/api/people/");
        console.log(v.data);
        return v.data;
    } catch (err) {
        console.log("El error es:", err);
    } finally {
        console.log("Ejecución del finally");
    }
};

export const getImg = async (num) => {
    try {
        const res = await axios.get(
            `https://starwars-visualguide.com/assets/img/characters/${num}.jpg`
        );
        console.log("fotoooooo", res);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getImg2 = (num) => {
    console.log("111", num);
    const res = `https://starwars-visualguide.com/assets/img/characters/${num}.jpg`;
    return res;
};

export const getCharByName = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        return res.data;
    } catch (err) {
        console.log("El error es:", err);
    }
};
