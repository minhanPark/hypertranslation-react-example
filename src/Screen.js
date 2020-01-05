import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { userLogin } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      <button onClick={userLogin}>Login</button>
    </div>
  );
};

export default Screen;
