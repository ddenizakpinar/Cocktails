import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./Cocktails.module.css";
import DetailsCard from "../DetailsCard/DetailsCard";
import Spinner from "../Spinner/Spinner";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#121212",
        height: "auto",

    },
    gridList: {
        width: "100%",
        height: "100%",
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

const theme = createMuiTheme({
    overrides: {
        MuiGridListTile: {
            tile: {
                display: "block",
                overflow: " hidden",
                position: "relative",
            },
        },
    },
});
export default function AdvancedGridList(props) {
    const isMobile = window.innerWidth < 480;
    const isMedium = window.innerWidth < 720;
    const cols = isMobile ? 1 : isMedium ? 2 : 3;

    const classes = useStyles();

    return (
        <div>
            {props.drinks ? <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <GridList cellHeight="auto" spacing={8} cols={cols} className={classes.gridList}>
                        {
                            props.drinks.drinks.map(tile => (
                                <GridListTile key={tile.strDrinkThumb} cols={1} rows={1}>
                                    {
                                        <DetailsCard drink={tile.detail.data.drinks[0]}/>
                                    }
                                    <GridListTileBar
                                        title={tile.strDrink}
                                        titlePosition="top"
                                    
                                        actionPosition="left"
                                        className={classes.titleBar}
                                    />
                                </GridListTile>

                            ))
                        }
                    </GridList>
                </div>
            </ThemeProvider> : <Spinner></Spinner>}
        </div>
    );
}
