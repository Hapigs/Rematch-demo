import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigator from "./components/Navigtor";

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
        <Navigator />
    </BrowserRouter>
  </React.StrictMode>
);

export default App;