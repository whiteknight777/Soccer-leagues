import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";

import { AppRoutes } from "./AppRoutes";

const Stack = createNativeStackNavigator();

const { HOME_SCREEN } = AppRoutes;

export function HomeNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: "",
            headerShown: false,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "purple" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
