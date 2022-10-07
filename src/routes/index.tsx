import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import { Welcome, Login, Signup } from "Pages";

export enum Routes {
  welcome = "/",
  login = "/login",
  signup = "/signup",
}

export const Router = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route path={Routes.welcome} element={<Welcome />} />
      <Route path={Routes.login} element={<Login />} />
      <Route path={Routes.signup} element={<Signup />} />
    </ReactRouterRoutes>
  </BrowserRouter>
);
