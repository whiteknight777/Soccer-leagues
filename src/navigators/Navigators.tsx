import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeNavigator } from "../navigators/HomeNavigator";
import { AuthNavigator } from "../navigators/AuthNavigator";
import { useAuthentication } from "../context/Authentication";

// import { AppRoutes } from "./AppRoutes";

// const { TERMS_SCREEN, PRESENTATION_SCREEN } = AppRoutes;

export function Navigators() {
  const { user } = useAuthentication();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"AUTH"}>
        {!user ? (
          <Stack.Screen
            name="AUTH"
            component={AuthNavigator}
            options={{
              headerShown: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "purple" },
            }}
          />
        ) : (
          <Stack.Screen
            name="HOME"
            component={HomeNavigator}
            options={{
              headerShown: false,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#23036a" },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
