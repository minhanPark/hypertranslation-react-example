import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  console.log(name, loggedIn);
  return (
    <>
      <div>Hello My name is {name}</div>
      <div>And {loggedIn ? "I am Logged In" : "I am Logged Out"}</div>
    </>
  );
};

export default Header;
