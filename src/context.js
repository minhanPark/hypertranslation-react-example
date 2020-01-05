import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "RunningWater",
    loggedIn: false
  });
  const userLogin = () => setUser({ ...user, loggedIn: true });
  const userLogout = () => setUser({ ...user, loggedIn: false });
  return (
    <UserContext.Provider value={{ user, fn: { userLogin, userLogout } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
