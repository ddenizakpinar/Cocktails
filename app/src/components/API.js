import axios from "axios";

export function fetchAllCocktails() {
    axios.get(
        "https://the-cocktail-db.p.rapidapi.com/filter.php", {
            params: {
                "a": "Alcoholic"
            },
            headers: {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "28c7ad4c19msh6f19516a62edb69p1054d2jsn0e3eba366df7"
            }
        }).then(data => {
        return data.data.drinks[0];
    }).catch(err => console.log(err));
}
