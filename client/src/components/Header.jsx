import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-green-300">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-xl">Auth-App</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "no-underline text-green-950"
                  : "text-green-950 underline underline-offset-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "no-underline text-green-950"
                  : "text-green-950 underline underline-offset-4"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive
                  ? "no-underline text-green-950"
                  : "text-green-950 underline underline-offset-4"
              }
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
