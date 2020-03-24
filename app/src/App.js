import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {Route, Switch, Redirect} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Cocktails from "./components/Coctails/Cocktails";

import classes from './App.module.css';

class App extends PureComponent {

    state = {
        drinks: null,
        filteredDrinks: null,
        filter: "ni"
    };

    componentDidMount() {
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

            data.data.drinks.shift(1);
            data.data.drinks.shift(1);
            data.data.drinks.shift(1);


            this.setState({
                drinks: data.data,
                filteredDrinks: data.data
            })
        }).catch();
    }

    filtre = () => {
        console.log(this.state.drinks)
        const filter = this.state.drinks.drinks.filter((drink) => {
            return drink.strDrink.toLowerCase().includes(this.state.filter.toLowerCase())
        });
        const drinks = {
            drinks: filter
        };
        this.setState({
            filteredDrinks:drinks
        });

        console.log(drinks)
    }


    inputHandler = (event) => {
        this.setState({filter: event.target.value});
        this.filtre();
    };

    render() {

        return (
            <div className={classes.App}>

                <NavigationBar inputHandler={this.inputHandler}/>
                <h1 style={{color: "white"}}>{this.state.filter}</h1>
                <Switch>
                    {
                        this.state.drinks !== null ?
                            <Route path="/" exact component={() => <Cocktails drinks={this.state.filteredDrinks}/>}/> : null
                    }


                </Switch>


            </div>
        );
    }
}


export default App;