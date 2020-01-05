import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, loggedIn }
  } = useContext(UserContext);
  return (
    <>
      <div>Hello My name is {name}</div>
      <div>And {loggedIn ? "I am Logged In" : "I am Logged Out"}</div>
    </>
  );
};

export default Header;
