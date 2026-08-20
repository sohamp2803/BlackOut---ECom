import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return <div>{toggle ? <Login setToggle={setToggle} /> : <Signup setToggle={setToggle} />}</div>;
};

export default App;
