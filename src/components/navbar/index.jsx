import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { navLogin } from "../../redux/nav/navSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  dispatch(navLogin(localStorage.getItem("x-auth-token")));
  const token = useSelector((s) => s.nav.value);
  console.log(token);
  return (
    <section id="navbar">
      <div className="container">
        <nav className="nav">
          <Link className="nav__logo" to={"/"}>
            Logo
          </Link>
          <ul className="nav__links">
            <li className="nav__item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {token ? (
              <li className="nav__item">
                <NavLink to={"/users"}>Users</NavLink>
              </li>
            ) : (
              <></>
            )}
            <li className="nav__item">
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
