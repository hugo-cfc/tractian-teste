import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AssetDetails from "./pages/AssetDetails";
import Profile from "./pages/Profile";
import CompanyPage from "./pages/CompanyPage";
import UnityPage from "./pages/UnityPage";

function CustomRoutes({ isPrivate, ...rest }: any) {
  if (isPrivate && localStorage.getItem("authentication") === "false") {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoutes exact path="/" component={Login} />
      <CustomRoutes isPrivate path="/home" component={Home} />
      <CustomRoutes isPrivate path="/asset/:id" component={AssetDetails} />
      <CustomRoutes isPrivate path="/profile" component={Profile} />
      <CustomRoutes isPrivate path="/companies" component={CompanyPage} />
      <CustomRoutes isPrivate path="/units/:id" component={UnityPage} />
    </Switch>
  );
}
