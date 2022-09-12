import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isUseBackend: true,
});

export default AuthContext;
