import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [toggle, setToggle] = useState(true);

  return toggle ? (
    <Login setToggle={setToggle} />
  ) : (
    <Signup setToggle={setToggle} />
  );
};

export default Auth;
