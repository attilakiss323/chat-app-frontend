import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import { Welcome, Login, Signup, Home } from "Pages";
import { RequireAuth } from "./RequireAuth";
import { Public } from "./Public";

export enum Routes {
  welcome = "/",
  login = "/login",
  signup = "/signup",
  home = "/home",
}

export const Router = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route
        path={Routes.welcome}
        element={
          <Public>
            <Welcome />
          </Public>
        }
      />
      <Route
        path={Routes.login}
        element={
          <Public>
            <Login />
          </Public>
        }
      />
      <Route
        path={Routes.signup}
        element={
          <Public>
            <Signup />
          </Public>
        }
      />
      <Route
        path={Routes.home}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </ReactRouterRoutes>
  </BrowserRouter>
);
