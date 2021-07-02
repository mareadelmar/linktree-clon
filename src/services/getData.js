export const getData = () => {
    const url = "https://localhost:3000/data.json";
    return fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
};
