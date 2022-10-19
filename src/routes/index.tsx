import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import { Welcome, Login, Signup, Home } from "Pages";

export enum Routes {
  welcome = "/",
  login = "/login",
  signup = "/signup",
  home = "/home",
}

export const Router = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route path={Routes.welcome} element={<Welcome />} />
      <Route path={Routes.login} element={<Login />} />
      <Route path={Routes.signup} element={<Signup />} />
      <Route path={Routes.home} element={<Home />} />
    </ReactRouterRoutes>
  </BrowserRouter>
);
