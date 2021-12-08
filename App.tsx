import React, { Component } from "react";
import { View, TextField, Text, Button } from "react-native-ui-lib";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  AuthenticationProvider,
  useAuthentication,
} from "./src/context/Authentication";
import { AuthNavigator } from "./src/navigators/AuthNavigator";
import { HomeNavigator } from "./src/navigators/HomeNavigator";

const queryClient = new QueryClient();

function App() {
  const { user } = useAuthentication();
  return (
    <>
      <AuthenticationProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        {user === true ? <HomeNavigator /> : <AuthNavigator />}
        {/* </QueryClientProvider> */}
      </AuthenticationProvider>
    </>
  );
}

export default App;
