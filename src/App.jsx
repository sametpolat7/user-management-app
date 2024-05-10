import React from "react";

// Including the full library in development bundles can slow startup times, particularly with "named imports" from @mui/icons-material, which can be up to six times slower than "default imports". https://mui.com/material-ui/guides/minimizing-bundle-size/ == Concern ==

import UserInterface from "./container/UserInterface";

import "./assets/styles/App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <React.Fragment>
      <UserInterface />
    </React.Fragment>
  );
}

export default App;
