import React, {PureComponent} from 'react';
import axios from "axios";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Cocktails from "./components/Coctails/Cocktails";
import classes from './App.module.css';

// "start": "node server.js",
class App extends PureComponent {

    state = {
        drinks: null,
        filteredDrinks: null,
        filter: ""
    };

    componentDidMount() {
        this.fetchCocktails();
    }

    fetchCocktails = () => {
        axios.get(
            "https://the-cocktail-db.p.rapidapi.com/filter.php", {
                params: {
                    "a": "Alcoholic"
                },
                headers: {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "28c7ad4c19msh6f19516a62edb69p1054d2jsn0e3eba366df7"
                }
            }).then((data) => {
            data.data.drinks.shift();
            data.data.drinks.shift();
            data.data.drinks.shift();
            this.fetchDetails(data.data.drinks);
        }).catch();
    };

    fetchDetails = async (data) => {
        const detailed = [];
        const fetchDetails = data.map(drink => {
            return axios.get(
                "https://the-cocktail-db.p.rapidapi.com/lookup.php", {
                    params: {
                        "i": drink.idDrink
                    },
                    headers: {
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "28c7ad4c19msh6f19516a62edb69p1054d2jsn0e3eba366df7"
                    }
                }).then((data) => {
                drink.detail = data;
                detailed.push(drink);
            }).catch();
        });

        Promise.all(fetchDetails).then(() => {
            const formatted = {
                drinks: detailed
            };
            this.setState({
                drinks: formatted,
                filteredDrinks: formatted
            })
        });
    };

    search = () => {
        const filteredDrinks = this.state.drinks.drinks.filter((drink) => {
            return drink.strDrink.toLowerCase().includes(this.state.filter.toLowerCase())
        });
        const formattedFilteredDrinks = {
            drinks: filteredDrinks
        };
        console.log(filteredDrinks);
        this.setState({
            filteredDrinks: formattedFilteredDrinks
        });
    };

    inputHandler = (event) => {
        this.setState({filter: event.target.value});
        this.search();
    };

    render() {

        return (
            <div className={classes.App}>
                <NavigationBar inputHandler={this.inputHandler}/>
                {

                    <Cocktails drinks={this.state.filteredDrinks}/>

                }
            </div>
        );
    }
}


export default App;