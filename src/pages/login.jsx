import React from "react";
import { Link } from "react-router-dom";
import dashboard from "./dashboard";

function login() {
  return (
    <div className="page-container h-screen bg-ash flex">
      <div className="left-container w-2/5 h-full bg-black flex items-center justify-center">
        <h1 className="text-white font-mont font-bold text-8xl">Board.</h1>
      </div>
      <div className="w-full bg-ash">
        <Link to={dashboard}>
          <p>Next page</p>
        </Link>
      </div>
    </div>
  );
}

export default login;
