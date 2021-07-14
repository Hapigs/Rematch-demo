import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigator from "./components/Navigtor";
import Footer from './components/Footer';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
        <Navigator />
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

export default App;