import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "RunningWater",
    loggedIn: false
  });
  const userLogin = () => setUser({ ...user, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
