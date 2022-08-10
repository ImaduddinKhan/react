import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
}); //context here refers to the apps/component wide state

export default AuthContext;
