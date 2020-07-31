import React from "react";
import {HashRouter as Router, Route} from "react-router-dom"
import Screen from "./Screen";

export default () => 
<Router>
    <Route to="/" component={Screen} />
</Router>


