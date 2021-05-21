import React from "react";
import { Route } from "react-router";
import Header from "./Components/Header";

const App = () => {




  return (
    <div id="AppPg">

      <Route path="/" component={Header}>
      </Route>
    </div>
      
  );
};
export default App;
