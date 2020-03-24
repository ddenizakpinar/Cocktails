import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import "./DetailsCard.module.css";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 600,
        backgroundColor: "transparent"
    },
    media: {
        height: 0,
        paddingTop: '46.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    tile: {
        height: "4px"
    }
}));

export default function DetailsCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <div  onClick={handleExpandClick}>
                <CardMedia
                    className={classes.media}
                    image={props.drink.strDrinkThumb}
                    title={props.drink.strDrink}/>
            </div>

            <CardActions style={{backgroundColor: "#121212"}} disableSpacing/>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div style={{color: "white"}}>

                        <Typography paragraph>
                            <b>Method:</b>
                        </Typography>

                        <Typography paragraph>
                            {props.drink.strCategory}
                            {props.drink.strInstructions}
                            {props.drink.strGlass}
                        </Typography>
                        <Typography paragraph>
                            <b>Ingredients:</b>
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient1}
                            {props.drink.strMeasure1}
                        </Typography>

                        <Typography>
                            {props.drink.strIngredient2}
                            {props.drink.strMeasure2}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient3}
                            {props.drink.strMeasure3}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient4}
                            {props.drink.strMeasure4}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient5}
                            {props.drink.strMeasure5}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient6}
                            {props.drink.strMeasure6}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient7}
                            {props.drink.strMeasure7}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient8}
                            {props.drink.strMeasure8}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient9}
                            {props.drink.strMeasure9}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient10}
                            {props.drink.strMeasure10}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient11}
                            {props.drink.strMeasure11}
                        </Typography>
                        <Typography>
                            {props.drink.strIngredient12}
                            {props.drink.strMeasure12}
                        </Typography>
                    </div>
                </CardContent>
            </Collapse>
        </Card>

    );
}



