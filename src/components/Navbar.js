import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div>
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
        </div>
        <div>
          {user ? (
            <button
              onClick={() => {
                signOut(auth);
                navigate("/login");
              }}
              className="nav-link text-white bg-danger rounded border-0"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="nav-link text-white bg-dark rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
