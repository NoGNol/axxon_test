import React from "react";

import DataProvider from "./components/DataProvider";
import Router from "./Router";

const App = () => {

    return (
        <DataProvider>
           <Router/>
        </DataProvider>      
    )
}

export default App;