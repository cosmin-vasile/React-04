import React, { useEffect } from "react";
import {
  Outlet,
  NavLink,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useLogUserNavigation from "./hooks/useLogUserNavigation";
import useFetchEpisodes from "./hooks/useFetchEpisodes";
import { setEmail, setName } from "../../slices/userDetailsSlice";

//Holds app structure
const App = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmail("cosmin.vasile@scoalainformala.ro"));
  }, []);

  useEffect(() => {
    dispatch(setName("Cosmin Vasile"));
  }, []);

  console.log("userDetails", userDetails);

  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  useLogUserNavigation(pathname);
  const episodes = useFetchEpisodes();
  console.log("episodes", episodes);
  const [queryParams, setQueryParams] = useSearchParams();
  console.log(queryParams.get("filter"));
  console.log(queryParams.get("order"));
  // useEffect(() => {
  //   setQueryParams({
  //     ...queryParams,
  //     filter: "asdasd",
  //     order: "asdasd",
  //   });
  // }, []);

  return (
    <div className="main-app">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
