import React from "react";
import Header from "./Header";
import { useUser, useFns } from "./context";

const Screen = () => {
  const { loggedIn } = useUser();
  const { userLogin, userLogout } = useFns();
  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      {loggedIn ? (
        <button onClick={userLogout}>Logout</button>
      ) : (
        <button onClick={userLogin}>Login</button>
      )}
    </div>
  );
};

export default Screen;
