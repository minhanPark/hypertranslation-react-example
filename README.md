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

각 컴포넌트에서 useContext를 반복하고 싶지 않다면 컨텍스트를 생성하는 context.js 파일에서 사용할 값만 함수로 리턴해주면 됩니다.

```js
// context.js

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

// user의 정보를 담고 있는 user객체를 리턴하는 함수입니다..
export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

// user 객체의 정보를 수정하는 함수를 리턴하는 함수입니다.
export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};
```

```js
// header.js

const { name, loggedIn } = useUser();
```

그래서 컴포넌트에서는 해당 함수만을 갖고와서 값을 사용하면 됩니다.