import React from 'react';

import Cocktails from "../components/Coctails/Cocktails";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const router = (props) => (
    <Switch>
        <Route path="/" exact component={Cocktails}/>
        <Route path="/about-us" exact component={Cocktails}/>
    </Switch>
);
const authenticatedRouter = (props) => (
    <Switch>
        <Route path="/" exact component={Cocktails}/>
    </Switch>
);

export {authenticatedRouter, router};