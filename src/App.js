import React, { Suspense } from "react";

// NPM Packages
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Router Import
import PageRouter from "./helpers/PageRouter";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Suspense fallback="loading">
      <GlobalProvider>
        <Router>
          <Switch>
            <PageRouter />
          </Switch>
        </Router>
      </GlobalProvider>
    </Suspense>
  );
}

export default App;
