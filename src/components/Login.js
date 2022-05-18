import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center justify-items-center"
    >
      <div className="justify-content-center justify-items-center d-flex flex-column">
        <button
          className="btn btn-lg btn-google btn-block text-uppercase"
          type="submit"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle />
          <span className="ms-2">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
