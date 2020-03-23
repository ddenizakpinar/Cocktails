import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {Route, Switch, Redirect} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Cocktails from "./components/Coctails/Cocktails";
import Child from "./containers/Details/Details";

class App extends PureComponent {

    state = {
        drinks: null
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
                drinks: data.data
            })
        }).catch();
    }

    render() {

        return (
            <div>

                <NavigationBar/>
                <Switch>
                    {
                        this.state.drinks !== null ?
                            <Route path="/" exact component={() => <Cocktails drinks={this.state.drinks}/>}/> : null
                    }
                    <Route path="/details/:id" children={(props) => <Child {...props}></Child>}/>


                </Switch>


            </div>
        );
    }
}


export default App;