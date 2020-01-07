import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...theRest }) => {
    return (
      <Route
        {...theRest}
        render={() => {
          if (localStorage.getItem("token")) {
            return <Component />;
          } else {
            console.log(
              "Rendering: ", Route 
            );
            
          }
        }}
      />
    );
  };
  
  export default ProtectedRoute; 