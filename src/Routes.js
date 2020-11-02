import React from "react";
import {Route, Switch} from "react-router-dom";
import NewPost from "./NewPost";
import Home from "./Home";
import Post from "./Post";

function Routes() {
return (
    <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/new"><NewPost/></Route>
    <Route exact path="/:postId"><Post /></Route>

    </Switch>

)
}

export default Routes;