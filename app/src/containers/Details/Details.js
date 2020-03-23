import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

class Child extends PureComponent {

    state = {
        drink: ""
    };

    componentDidMount() {
        axios.get(
            "https://the-cocktail-db.p.rapidapi.com/lookup.php", {
                params: {
                    "i": this.props.id
                },
                headers: {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "28c7ad4c19msh6f19516a62edb69p1054d2jsn0e3eba366df7"
                }
            }).then((data) => {
            this.setState({
                drink: data.data
            })
        }).catch();

    }

    render() {

        return (
            <div>
                {
                    this.state.drink ? <DetailsCard drink={this.state.drink.drinks[0]}></DetailsCard> : null

                }

            </div>
        );
    }
}

Child.propTypes = {};

export default Child;