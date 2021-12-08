import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CarouselScreen } from "../components/CarouselScreen";
import { TermsScreen } from "../screens/TermsScreen";

import { AppRoutes } from "./AppRoutes";

const Stack = createNativeStackNavigator();

const { TERMS_SCREEN, PRESENTATION_SCREEN } = AppRoutes;

export function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PRESENTATION_SCREEN}>
        <Stack.Screen
          name={PRESENTATION_SCREEN}
          component={CarouselScreen}
          options={{
            headerShown: false,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "purple" },
          }}
        />
        <Stack.Screen
          name={TERMS_SCREEN}
          component={TermsScreen}
          options={{
            title: "Terms & conditions",
            headerShown: true,
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#23036a" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
