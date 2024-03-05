import React from "react";

/**AuthContext is not a component, but an object that contains a component , React.createContext accept a state, either a single value like
 * string, but usually it is an object. context can pass down string, objects, function...
  Context is a way to share values, such as state or functions, across multiple components without explicitly passing them through each component as props.*/

  const AuthContext = React.createContext({
    //false is default/inital value
    isLoggedIn: false
})


export default AuthContext;