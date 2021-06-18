import React, { Fragment } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import LoginPage from "../pages/login/loginPage"
import AuthPage from "../pages/authPage/authPage"
import PrivateRoute from "./privetRoute"
import PublicRoute from "./publicRoute"
import HomePage from "../pages/home/home"
import Nav from "../components/nav/nav"
import { useSelector } from "react-redux"
interface authobject {
  data: {
    access_token: string
    expires_in: string
  }
  user: { email: string; id: number }
  loggedIn: boolean
}

function RouteNavigator() {
  const userData = useSelector((state: { Auth: authobject }) => ({
    Auth: state.Auth,
  }))
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Switch>
          {/* <Route exact path="/" render={() => <AuthPage />} /> */}
          <PublicRoute
            path="/"
            isAuthenticated={userData.Auth.loggedIn}
            component={AuthPage}
          />
          <PrivateRoute
            path="/home"
            isAuthenticated={userData.Auth.loggedIn}
            component={HomePage}
          />
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}
export default RouteNavigator
