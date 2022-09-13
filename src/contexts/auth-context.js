import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isUseBackend: false,
});

export default AuthContext;
