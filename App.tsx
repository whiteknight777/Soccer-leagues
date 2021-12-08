import React, { Component } from "react";

import { AuthenticationProvider } from "./src/context/Authentication";
import { Navigators } from "./src/navigators/Navigators";

// const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <AuthenticationProvider>
        <Navigators />
      </AuthenticationProvider>
    );
  }
}

export default App;
