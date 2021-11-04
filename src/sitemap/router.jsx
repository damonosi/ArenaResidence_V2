import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/home" />
    <Route exact path="/scara" c />

    <Route path="/scara/c1" />
    <Route path="/scara/c2" />

    <Route path="/contact" />
    <Route path="/parteneri" />
    <Route path="/alte" />

    <Route path="/apartamente/:id" />

    <Route path="/etaje/C1/1" />
    <Route path="/etaje/C1/2" />
    <Route path="/etaje/C1/3" />
    <Route path="/etaje/C1/4" />
    <Route path="/etaje/C1/5" />
    <Route path="/etaje/C1/6" />
    <Route path="/etaje/C1/7" />
    <Route path="/etaje/C1/8" />

    <Route path="/etaje/C2/1" />
    <Route path="/etaje/C2/2" />
    <Route path="/etaje/C2/3" />
    <Route path="/etaje/C2/4" />
    <Route path="/etaje/C2/5" />
    <Route path="/etaje/C2/6" />
    <Route path="/etaje/C2/7" />
    <Route path="/etaje/C2/8" />
  </Switch>
);
