// to create context api
import { createContext } from "react";
const UserContext = createContext();
export default UserContext;

// Create a Context Provider
import { useState } from "react";
import UserContext from "./createContext";

const UserProvider = ({children} =>{
    const [user, setUser] = useState("bharat");

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
})
export default UserProvider;

// Wrap Your application (App) with the Provider
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

// Consume Context in Any Component
import { useContext } from "react";
import UserContext from "./UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>User: {user}</h2>
      <button onClick={() => setUser("React Dev")}>
        Change User
      </button>
    </>
  );
};

export default Profile;