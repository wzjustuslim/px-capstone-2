import React from "react";

const UserProfileContext = React.createContext({
  wallet:0,
  token:{},
  transactions:{},

});

export default UserProfileContext;
