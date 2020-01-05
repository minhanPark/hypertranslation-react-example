## simple hypertranslation-react

useContext를 이용해서 만들어 본 리액트 번역기입니다.

```js
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
```
리액트의 콘텍스트는 위와 같이 createContext를 통해서 콘텍스트와 context provider를 만들고,  
provider는 App.js에 전달합니다.
```js
function App() {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}
```
콘텍스트는 사용할 컴포넌트에서 불러와서 값을 전달해주면 됩니다.
```js
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

```