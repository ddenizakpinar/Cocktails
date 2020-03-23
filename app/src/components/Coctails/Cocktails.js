import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./Cocktails.module.css";
import DetailsCard from "../DetailsCard/DetailsCard";
import Details from "../../containers/Details/Details";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        height: "100vh"
    },
    gridList: {
        width: "100hh",
        height: "100vh",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },

}));

const random = () => {
    const random = Math.floor(Math.random() * 3);
    return random;
};

export default function AdvancedGridList(props) {


    props.drinks.drinks.map((item, index) => {
        item.size = index % (5) === 0 ? 1 : 1;
    });

    const classes = useStyles();
    console.log(props.drinks);
    return (
        <div className={classes.root}>
            <GridList cellHeight="auto" spacing={0} cols={3} className={classes.gridList}>
                {props.drinks.drinks.map(tile => (

                    <GridListTile key={tile.strDrinkThumb} cols={tile.size} rows={1}>

                        <Details id={tile.idDrink}></Details>

                        <GridListTileBar
                            title={tile.strDrink}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon/>
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>

                ))}
            </GridList>
        </div>
    );
}
