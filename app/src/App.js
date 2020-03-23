import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Cocktails from "./components/Coctails/Cocktails";
import * as API from "./components/API";
import axios from "axios";

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
            this.setState({
                drinks: data.data
            })
        }).catch();
    }

    render() {
        return (
            <div>
                <NavigationBar/>

                {
                    this.state.drinks !== null ? <Cocktails drinks={this.state.drinks}/> : null
                }

            </div>
        );
    }
}


export default App;